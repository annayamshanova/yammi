"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/type";
import { LanguageSwitcher } from "./LanguageSwitcher";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-3 w-3 border-ink/40 ${className}`}
    />
  );
}

export function HomeHero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <main className="tech-grid relative flex h-dvh flex-col overflow-hidden px-5 sm:px-8">
      <Corner className="left-4 top-4 border-l border-t sm:left-7 sm:top-6" />
      <Corner className="right-4 top-4 border-r border-t sm:right-7 sm:top-6" />
      <Corner className="bottom-4 left-4 border-b border-l sm:bottom-6 sm:left-7" />
      <Corner className="bottom-4 right-4 border-b border-r sm:bottom-6 sm:right-7" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between pt-6 sm:pt-8"
      >
        <span className="font-mono text-sm font-medium tracking-[0.2em]">
          YAMMI<span className="text-accent">.</span>
        </span>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6">
          <Link
            href={`/${locale}/about`}
            className="font-mono text-xs tracking-widest hover:text-accent transition-colors"
          >
            {dict.nav.about.toUpperCase()}
          </Link>
          <Link
            href={`/${locale}/works`}
            className="font-mono text-xs tracking-widest hover:text-accent transition-colors"
          >
            {dict.nav.works.toUpperCase()}
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-1 flex-col justify-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs tracking-[0.3em] text-ink-soft"
        >
          {dict.home.kicker}
          <span className="cursor-blink text-accent">_</span>
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-[7.5vw] lg:text-[6vw]"
        >
          {dict.home.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 max-w-xl text-lg font-medium text-ink-soft sm:text-xl"
        >
          {dict.home.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-md text-sm text-ink-soft sm:text-base"
        >
          {dict.home.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href={`/${locale}/works`}
            className="group inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-xs tracking-widest transition-colors hover:bg-ink hover:text-paper"
          >
            [ {dict.home.ctaWorks.toUpperCase()} ]
          </Link>
          <a
            href="mailto:anna.yamshanova@outlook.de"
            className="inline-flex items-center gap-2 px-1 py-3 font-mono text-xs tracking-widest text-ink-soft hover:text-accent transition-colors"
          >
            {dict.home.ctaContact.toUpperCase()} →
          </a>
          <a
            href="https://www.linkedin.com/in/anna-yamshanova-2a8788219/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-1 py-3 font-mono text-xs tracking-widest text-ink-soft hover:text-accent transition-colors"
          >
            LINKEDIN ↗
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-3 pb-6 font-mono text-[11px] tracking-widest text-ink-soft sm:pb-8"
      >
        <div className="flex items-center gap-4">
          <span>{dict.home.location}</span>
          <Link
            href={`/${locale}/impressum`}
            className="opacity-60 hover:opacity-100 hover:text-accent transition-opacity"
          >
            Impressum
          </Link>
        </div>
        <div className="hidden flex-wrap gap-x-4 gap-y-1 sm:flex">
          {dict.home.tags.map((tag) => (
            <span key={tag} className="opacity-60">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
