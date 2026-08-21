import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export default async function AboutPage({
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
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-ink-soft">
            {dict.about.kicker}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {dict.about.title}
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-12 sm:grid-cols-[1fr_280px] sm:gap-16">
          <div className="space-y-6">
            {dict.about.intro.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-soft first:text-xl first:text-ink">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:anna.yamshanova@outlook.de"
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-xs tracking-widest transition-colors hover:bg-ink hover:text-paper"
              >
                [ {dict.about.ctaContact.toUpperCase()} ]
              </a>
              <Link
                href={`/${locale}/works`}
                className="inline-flex items-center gap-2 px-1 py-3 font-mono text-xs tracking-widest text-ink-soft hover:text-accent transition-colors"
              >
                {dict.about.ctaWorks.toUpperCase()} →
              </Link>
            </Reveal>
          </div>

          <div className="space-y-10 border-t border-line pt-8 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
            <Reveal>
              <p className="font-mono text-xs tracking-widest text-ink-soft">
                {dict.about.factsLabel}
              </p>
              <dl className="mt-4 space-y-3">
                {dict.about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-2"
                  >
                    <dt className="font-mono text-xs text-ink-soft">
                      {fact.label}
                    </dt>
                    <dd className="font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="font-mono text-xs tracking-widest text-ink-soft">
                {dict.about.skillsLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dict.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-mono text-xs tracking-widest text-ink-soft">
                {dict.about.industriesLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dict.about.industries.map((ind) => (
                  <span
                    key={ind}
                    className="border border-accent/40 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
