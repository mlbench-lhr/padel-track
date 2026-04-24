"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Session", href: "#app-experience" },
  { label: "Calories", href: "#calories" },
  { label: "Highlights", href: "#highlights" },
  { label: "Pricing", href: "#pricing" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => l.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-extrabold text-primary">
          <span className="inline-block h-3 w-3 rounded-full bg-gradient-accent" />
          PadelTrack
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className={`transition-colors ${
                activeSection === l.href.replace("#", "")
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button variant="hero" size="sm">Get started</Button>
      </div>
    </header>
  );
};
