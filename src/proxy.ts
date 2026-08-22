import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

function getPreferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2));

  for (const lang of preferred) {
    if (isLocale(lang)) return lang;
  }
  return defaultLocale;
}

const CSP = [
  "default-src 'self'",
  // Next.js emits a couple of small inline scripts (RSC hydration payload)
  // that aren't nonce-tagged unless the whole site opts into fully dynamic
  // rendering. Keeping static generation is worth more here than a nonce,
  // since the site renders no user input anywhere (no dangerouslySetInnerHTML,
  // no forms, no CMS content) — so injected-script risk is already near zero.
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

function withSecurityHeaders(response: NextResponse) {
  response.headers.set("Content-Security-Policy", CSP);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Canonicalize on the apex domain so search engines don't index the
  // same content twice under www and non-www.
  if (request.nextUrl.hostname === "www.yammi.me") {
    const url = request.nextUrl.clone();
    url.hostname = "yammi.me";
    return withSecurityHeaders(
      NextResponse.redirect(url, { status: 308 })
    );
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return withSecurityHeaders(NextResponse.next());
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return withSecurityHeaders(NextResponse.redirect(url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
