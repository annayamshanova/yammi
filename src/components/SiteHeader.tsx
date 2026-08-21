import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/type";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-medium tracking-[0.2em]"
        >
          YAMMI<span className="text-accent">.</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm sm:gap-x-6">
          <Link
            href={`/${locale}/works`}
            className="hover:text-accent transition-colors"
          >
            {dict.nav.works}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="hover:text-accent transition-colors"
          >
            {dict.nav.about}
          </Link>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
