"use client";

import { Button } from "@/components/ui/button";

export const CTA = () => (
  <section className="py-24 bg-gradient-primary text-primary-foreground">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Ready for your first tracked match?</h2>
      <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
        Become an early adopter — free pilot for the first courts. Sign up today.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="secondary" size="lg">Start free pilot</Button>
        <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
          Talk to sales
        </Button>
      </div>
    </div>
    <footer className="container mt-16 pt-8 border-t border-primary-foreground/15 text-sm text-primary-foreground/70 flex flex-wrap justify-between gap-4">
      <span>© {new Date().getFullYear()} PadelTrack</span>
      <span>Made for the courts of tomorrow.</span>
    </footer>
  </section>
);
