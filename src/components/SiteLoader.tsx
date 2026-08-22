"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "yammi-loaded";

export function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;

    let raf = 0;

    const finish = () => {
      setExiting(true);
      window.setTimeout(() => {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // ignore storage errors (private mode, disabled storage, etc.)
        }
        document.documentElement.classList.add("no-preloader");
        setDone(true);
      }, 700);
    };

    const tick = (now: number, start: number) => {
      const t = Math.min((now - start) / 1000, 1);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        raf = requestAnimationFrame((n) => tick(n, start));
      } else {
        finish();
      }
    };

    // Deferred by a frame so the sessionStorage check and any resulting
    // setState happen inside a callback rather than synchronously in the
    // effect body.
    raf = requestAnimationFrame((now) => {
      let alreadyShown = false;
      try {
        alreadyShown = Boolean(sessionStorage.getItem(STORAGE_KEY));
      } catch {
        alreadyShown = false;
      }
      if (alreadyShown) {
        setDone(true);
        return;
      }
      tick(now, now);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div className="site-loader" data-exiting={exiting}>
      <p className="font-mono text-xs tracking-[0.3em] text-paper/50">
        UX/UI · AI
        <span className="cursor-blink text-accent">_</span>
      </p>
      <p className="mt-4 text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
        YAMMI<span className="text-accent">.</span>
      </p>
      <div className="mt-7 h-px w-40 overflow-hidden bg-paper/15 sm:w-56">
        <div
          className="h-full bg-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 font-mono text-[11px] tracking-widest text-paper/40">
        {String(progress).padStart(2, "0")}%
      </p>
    </div>
  );
}
