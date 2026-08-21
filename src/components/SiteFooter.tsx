import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/type";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono">
          <Link href={`/${locale}`} className="hover:text-accent transition-colors">
            YAMMI
          </Link>{" "}
          © {year} Ania Yamshanova. {dict.footer.rights}
        </p>
        <div className="flex items-center gap-5 font-mono">
          <a
            href="mailto:anna.yamshanova@outlook.de"
            className="hover:text-accent transition-colors"
          >
            anna.yamshanova@outlook.de
          </a>
          <a
            href="https://www.linkedin.com/in/anna-yamshanova-2a8788219/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
