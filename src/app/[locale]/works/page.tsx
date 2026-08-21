import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getAllProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectTile } from "@/components/ProjectTile";

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const projects = getAllProjects(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} dict={dict} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
        <p className="font-mono text-xs tracking-[0.3em] text-ink-soft">
          {dict.works.kicker}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {dict.works.title}
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-soft sm:text-base">
          {dict.works.subtitle}
        </p>

        <div className="mt-10 sm:mt-14">
          {projects.map((project, i) => (
            <ProjectTile
              key={project.slug}
              href={`/${locale}/works/${project.slug}`}
              index={String(i + 1).padStart(2, "0")}
              year={project.year}
              name={project.name}
              industry={project.industry}
              role={project.role}
              tagline={project.tagline}
              pattern={project.pattern}
              coverImage={project.coverImage}
              coverFit={project.coverFit}
              viewProjectLabel={dict.works.viewProject}
            />
          ))}
        </div>
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
