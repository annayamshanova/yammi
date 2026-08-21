"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectTile({
  href,
  index,
  year,
  name,
  industry,
  role,
  tagline,
  pattern,
  coverImage,
  coverFit = "cover",
  viewProjectLabel,
}: {
  href: string;
  index: string;
  year: string;
  name: string;
  industry: string;
  role: string;
  tagline: string;
  pattern: 4 | 5 | 6 | 7;
  coverImage?: string;
  coverFit?: "cover" | "contain";
  viewProjectLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-line py-10 first:border-t"
    >
      <Link href={href} className="block">
        <div className="flex items-baseline justify-between font-mono text-xs text-ink-soft">
          <span>{index}</span>
          <span>{year}</span>
        </div>
        <div className="mt-5 grid gap-6 sm:grid-cols-[1fr_1.15fr] sm:items-center sm:gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
              {name}
            </h2>
            <p className="mt-2 font-mono text-xs tracking-widest text-ink-soft">
              {industry.toUpperCase()} · {role.toUpperCase()}
            </p>
            <p className="mt-4 max-w-sm text-sm text-ink-soft">{tagline}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs tracking-widest">
              {viewProjectLabel.toUpperCase()}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
          >
            {coverImage ? (
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                <Image
                  src={coverImage}
                  alt={name}
                  fill
                  className={
                    coverFit === "contain" ? "object-contain p-6" : "object-cover"
                  }
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="tech-grid pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70 animate-scan" />
              </div>
            ) : (
              <ProjectVisual pattern={pattern} className="aspect-[4/3] w-full" />
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
