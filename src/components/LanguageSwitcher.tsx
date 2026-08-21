"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export function LanguageSwitcher({
  locale,
  variant = "light",
}: {
  locale: Locale;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav
      aria-label="Language"
      className="flex items-center gap-1 font-mono text-[11px] tracking-widest"
    >
      {locales.map((l, i) => {
        const isActive = l === locale;
        return (
          <span key={l} className="flex items-center">
            <Link
              href={`/${l}${rest ? `/${rest}` : ""}`}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "opacity-100"
                  : variant === "dark"
                  ? "opacity-45 hover:opacity-80 transition-opacity"
                  : "opacity-40 hover:opacity-80 transition-opacity"
              }
            >
              {localeLabels[l]}
            </Link>
            {i < locales.length - 1 && (
              <span className="mx-1.5 opacity-25">/</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
