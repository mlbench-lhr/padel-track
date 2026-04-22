"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border">
    {/* subtle grid background */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.35] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage:
          "radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)",
      }}
    />

    <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
      {/* Copy */}
      <div className="md:col-span-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          Now piloting in 12 clubs across Europe
        </div>

        <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.08] tracking-tight">
          Every padel match,{" "}
          <span className="relative inline-block">
            analyzed
            <svg
              aria-hidden
              viewBox="0 0 200 14"
              className="absolute left-0 -bottom-2 w-full h-3 text-accent"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9 C 50 2, 120 14, 198 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
          <br />
          Without lifting a finger.
        </h1>

        <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Two cameras. One AI. Stats, highlights and calorie tracking
          delivered straight to your phone the second you walk off court.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="hero" size="lg">
            Try it free <ArrowRight className="ml-1" />
          </Button>
          <Button variant="ghost" size="lg" className="gap-2">
            <Play className="h-4 w-4" /> Watch 90s demo
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
          <div>
            <div className="font-display text-xl font-bold text-foreground">
              12k+
            </div>
            matches tracked
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="font-display text-xl font-bold text-foreground">
              98%
            </div>
            shot accuracy
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="font-display text-xl font-bold text-foreground">
              ~30s
            </div>
            from match to clip
          </div>
        </div>
      </div>

      {/* Visual: phone mockup, slightly tilted */}
      <div className="md:col-span-5 relative">
        <div className="relative mx-auto w-[280px] sm:w-[320px] rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
          {/* floating tag */}
          <div className="absolute -top-4 -left-6 z-10 rotate-[-6deg] px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-semibold shadow-card">
            New highlight ready ✨
          </div>

          <div className="rounded-[2.2rem] border-[10px] border-foreground bg-card p-4 shadow-elegant">
            {/* notch */}
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-foreground/20" />

            <div className="rounded-xl overflow-hidden bg-court aspect-[9/14] relative">
              {/* mini court */}
              <svg viewBox="0 0 180 280" className="w-full h-full">
                <rect x="10" y="20" width="160" height="240" rx="4" fill="hsl(var(--court))" stroke="hsl(var(--court-line))" strokeWidth="1.5" />
                <line x1="10" y1="140" x2="170" y2="140" stroke="hsl(var(--court-line))" strokeWidth="1.5" />
                <line x1="90" y1="20" x2="90" y2="80" stroke="hsl(var(--court-line))" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="90" y1="200" x2="90" y2="260" stroke="hsl(var(--court-line))" strokeWidth="1" strokeDasharray="3 3" />
                {/* heatmap blobs */}
                <circle cx="55" cy="80" r="22" fill="hsl(var(--accent))" opacity="0.35" />
                <circle cx="125" cy="200" r="26" fill="hsl(var(--primary))" opacity="0.35" />
                <circle cx="60" cy="210" r="14" fill="hsl(var(--accent))" opacity="0.5" />
                {/* players */}
                <circle cx="55" cy="80" r="6" fill="hsl(var(--accent))" />
                <circle cx="125" cy="200" r="6" fill="hsl(var(--primary))" />
                {/* ball trail */}
                <path d="M55 80 Q 90 140 125 200" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.2" strokeDasharray="2 3" />
              </svg>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px]">
              <div>
                <div className="font-semibold text-foreground">Set 2 · 4-3</div>
                <div className="text-muted-foreground">Court 3 · today</div>
              </div>
              <div className="text-right">
                <div className="font-display font-bold text-secondary">844 kcal</div>
                <div className="text-muted-foreground">4.7 km</div>
              </div>
            </div>
          </div>

          {/* sticky note */}
          <div className="absolute -bottom-6 -right-4 rotate-[5deg] bg-[hsl(48_95%_85%)] text-foreground/80 text-xs p-3 rounded-md shadow-card max-w-[150px] leading-snug">
            "best forehand of the week 🔥"
            <div className="mt-1 text-[10px] text-foreground/50">— Marco, club pro</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
