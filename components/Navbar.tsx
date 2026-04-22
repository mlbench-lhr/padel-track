"use client";

import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Videos", href: "#videos" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Calories", href: "#calories" },
  { label: "Pricing", href: "#pricing" },
];

export const Navbar = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-display text-xl font-extrabold text-primary">
        <span className="inline-block h-3 w-3 rounded-full bg-gradient-accent" />
        PadelTrack
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
        ))}
      </nav>
      <Button variant="hero" size="sm">Get started</Button>
    </div>
  </header>
);
