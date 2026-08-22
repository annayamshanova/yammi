import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  getAllProjects,
  getProjectCopy,
  projectMeta,
  projectSlugs,
  type ProjectSlug,
} from "@/lib/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { ScrollPlayVideo } from "@/components/ScrollPlayVideo";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projectSlugs.map((slug) => ({ locale, slug }))
  );
}

function isProjectSlug(value: string): value is ProjectSlug {
  return (projectSlugs as string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectSlug(slug)) return {};
  const copy = getProjectCopy(locale, slug);
  return {
    title: copy.name,
    description: copy.tagline,
    alternates: { canonical: `/${locale}/works/${slug}` },
    openGraph: { title: copy.name, description: copy.tagline },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProjectSlug(slug)) notFound();

  const dict = getDictionary(locale);
  const copy = getProjectCopy(locale, slug);
  const meta = projectMeta[slug];
  const all = getAllProjects(locale);
  const currentIndex = projectSlugs.indexOf(slug);
  const prev = all[(currentIndex - 1 + all.length) % all.length];
  const next = all[(currentIndex + 1) % all.length];

  const metaRows = [
    { label: dict.project.roleLabel, value: copy.role },
    { label: dict.project.yearLabel, value: meta.year },
    { label: dict.project.industryLabel, value: copy.industry },
    { label: dict.project.platformLabel, value: meta.platform },
    ...(meta.tools
      ? [{ label: dict.project.toolsLabel, value: meta.tools }]
      : []),
  ];

  const sections = [
    { label: dict.project.challengeLabel, text: copy.challenge },
    { label: dict.project.approachLabel, text: copy.approach },
    ...(copy.research
      ? [{ label: dict.project.researchLabel, text: copy.research }]
      : []),
    ...(copy.userFlow
      ? [{ label: dict.project.userFlowLabel, text: copy.userFlow }]
      : []),
    ...(copy.designProcess
      ? [{ label: dict.project.designLabel, text: copy.designProcess }]
      : []),
  ];

  const scopeColumns = copy.scope
    ? [
        {
          label: dict.project.scopeInLabel,
          items: copy.scope.inMvp,
          marker: "bg-accent",
        },
        {
          label: dict.project.scopeOutLabel,
          items: copy.scope.notInMvp,
          marker: "border border-ink-soft",
        },
        {
          label: dict.project.scopeFutureLabel,
          items: copy.scope.future,
          marker: "border border-line-soft",
        },
      ]
    : [];

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} dict={dict} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <Link
          href={`/${locale}/works`}
          className="font-mono text-xs tracking-widest text-ink-soft hover:text-accent transition-colors"
        >
          ← {dict.project.backToWorks.toUpperCase()}
        </Link>

        <Reveal className="mt-8">
          <p className="font-mono text-xs tracking-[0.3em] text-ink-soft">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projectSlugs.length).padStart(2, "0")}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
            {copy.name}
          </h1>
          <p className="mt-4 max-w-lg text-base text-ink-soft sm:text-lg">
            {copy.tagline}
          </p>
          {meta.liveUrl && (
            <a
              href={meta.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-xs tracking-widest transition-colors hover:bg-ink hover:text-paper"
            >
              [ {(copy.liveLinkLabel ?? dict.project.viewLive).toUpperCase()} ↗ ]
            </a>
          )}
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-6 font-mono text-xs sm:grid-cols-3"
        >
          {metaRows.map((row) => (
            <div key={row.label}>
              <p className="tracking-widest text-ink-soft">
                {row.label.toUpperCase()}
              </p>
              <p className="mt-1">{row.value}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          {meta.coverImage ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-line">
              <Image
                src={meta.coverImage}
                alt={copy.name}
                fill
                className={
                  meta.coverFit === "contain"
                    ? "object-contain p-10"
                    : "object-cover"
                }
                sizes="(min-width: 1200px) 1152px, 100vw"
                priority
              />
              <div className="tech-grid pointer-events-none absolute inset-0" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70 animate-scan" />
            </div>
          ) : (
            <ProjectVisual pattern={meta.pattern} className="aspect-[16/9] w-full" />
          )}
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-[160px_1fr] sm:gap-12">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              {dict.project.overviewLabel.toUpperCase()}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-2xl text-lg leading-relaxed">
              {copy.overview}
            </p>
          </Reveal>
        </div>

        {sections.map((section, i) => (
          <div
            key={section.label}
            className="mt-10 grid gap-4 border-t border-line pt-10 sm:grid-cols-[160px_1fr] sm:gap-12"
          >
            <Reveal delay={i * 0.05}>
              <p className="font-mono text-xs tracking-widest text-ink-soft">
                {section.label.toUpperCase()}
              </p>
            </Reveal>
            <Reveal delay={i * 0.05 + 0.05}>
              <p className="max-w-2xl leading-relaxed text-ink-soft">
                {section.text}
              </p>
            </Reveal>
          </div>
        ))}

        {copy.scope && (
          <div className="mt-10 border-t border-line pt-10">
            <Reveal>
              <div className="grid gap-8 sm:grid-cols-3">
                {scopeColumns.map((column) => (
                  <div key={column.label}>
                    <p className="font-mono text-xs tracking-widest text-ink-soft">
                      {column.label.toUpperCase()}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {column.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                        >
                          <span
                            className={`mt-[5px] h-2 w-2 shrink-0 ${column.marker}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-8 max-w-2xl font-mono text-xs italic text-ink-soft">
                {copy.scope.note}
              </p>
            </Reveal>
          </div>
        )}

        <div className="mt-10 grid gap-4 border-t border-line pt-10 sm:grid-cols-[160px_1fr] sm:gap-12">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              {dict.project.outcomeLabel.toUpperCase()}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-2xl leading-relaxed text-ink-soft">
              {copy.outcome}
            </p>
          </Reveal>
        </div>

        {copy.results && (
          <div className="mt-10 grid gap-4 border-t border-line pt-10 sm:grid-cols-[160px_1fr] sm:gap-12">
            <Reveal>
              <p className="font-mono text-xs tracking-widest text-ink-soft">
                {dict.project.resultsLabel.toUpperCase()}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="max-w-2xl space-y-3">
                {copy.results.map((result) => (
                  <li
                    key={result}
                    className="flex gap-3 leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent" />
                    {result}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        )}

        {meta.video && (
          <div className="mt-10 grid gap-8 border-t border-line pt-10 sm:grid-cols-[160px_1fr] sm:gap-12">
            <Reveal>
              <p className="font-mono text-xs tracking-widest text-ink-soft">
                {dict.project.videoLabel.toUpperCase()}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <div
                className={`relative mx-auto w-full overflow-hidden ${
                  meta.video.maxWidth ?? "max-w-xs"
                }`}
                style={{
                  aspectRatio: meta.video.aspect.replace("/", " / "),
                  borderRadius: `${meta.video.rounded}px`,
                }}
              >
                {meta.video.mode === "click" ? (
                  <ClickToPlayVideo
                    src={meta.video.src}
                    poster={meta.video.poster}
                    label={dict.project.watchPrototype}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ScrollPlayVideo
                    src={meta.video.src}
                    poster={meta.video.poster}
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="tech-grid pointer-events-none absolute inset-0" />
                <div
                  className="pointer-events-none absolute inset-0 border border-line"
                  style={{ borderRadius: `${meta.video.rounded}px` }}
                />
              </div>
            </Reveal>
          </div>
        )}

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-line pt-8">
          <Link
            href={`/${locale}/works/${prev.slug}`}
            className="group"
          >
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              ← {dict.project.prevProject.toUpperCase()}
            </p>
            <p className="mt-1 font-medium group-hover:text-accent transition-colors">
              {prev.name}
            </p>
          </Link>
          <Link
            href={`/${locale}/works/${next.slug}`}
            className="group text-right"
          >
            <p className="font-mono text-xs tracking-widest text-ink-soft">
              {dict.project.nextProject.toUpperCase()} →
            </p>
            <p className="mt-1 font-medium group-hover:text-accent transition-colors">
              {next.name}
            </p>
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
