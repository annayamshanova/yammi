import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

const noteByLocale: Record<Locale, string> = {
  en: "Legal notice, required for websites operated from Germany (§ 5 TMG). Kept in German, as is standard practice.",
  de: "Pflichtangaben für Websites mit Sitz in Deutschland (§ 5 TMG).",
  uk: "Юридичні реквізити, обов'язкові для сайтів, що ведуться з Німеччини (§ 5 TMG). Залишено німецькою, як прийнято.",
};

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} dict={dict} />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-soft">
            LEGAL
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Impressum
          </h1>
          <p className="mt-4 text-sm text-ink-soft">{noteByLocale[locale]}</p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 space-y-8 text-sm leading-relaxed">
          <div>
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              ANGABEN GEMÄSS § 5 TMG
            </p>
            <p className="mt-2">
              Anna Yamshanova
              <br />
              Klosterstraße 20
              <br />
              40211 Düsseldorf
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              KONTAKT
            </p>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:anna.yamshanova@outlook.de"
                className="hover:text-accent transition-colors"
              >
                anna.yamshanova@outlook.de
              </a>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              VERANTWORTLICH FÜR DEN INHALT NACH § 18 ABS. 2 MSTV
            </p>
            <p className="mt-2">
              Anna Yamshanova, Klosterstraße 20, 40211 Düsseldorf
            </p>
          </div>
        </Reveal>
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
