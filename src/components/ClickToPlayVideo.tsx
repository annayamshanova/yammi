"use client";

import { useState } from "react";
import Image from "next/image";

export function ClickToPlayVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        controls
        playsInline
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block w-full cursor-pointer ${className}`}
      aria-label={label}
    >
      <Image
        src={poster}
        alt={label}
        fill
        className="object-cover"
        sizes="(min-width: 1200px) 1152px, 100vw"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/10">
        <span className="inline-flex items-center gap-2 border border-paper bg-ink/80 px-5 py-3 font-mono text-xs tracking-widest text-paper backdrop-blur-sm transition-colors group-hover:bg-accent">
          ▶ {label.toUpperCase()}
        </span>
      </span>
    </button>
  );
}
