"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "€10",
    features: ["Post-match statistics", "Score & match history", "1 highlight/week"],
    cta: "Get Basic",
    featured: false,
  },
  {
    name: "Pro",
    price: "€20",
    features: ["All Basic features", "Unlimited highlights", "Heatmaps & calorie tracker", "Instagram export"],
    cta: "Get Pro",
    featured: true,
  },
  {
    name: "Premium",
    price: "€30",
    features: ["All Pro features", "AI coaching tips", "Progress tracking", "Priority support"],
    cta: "Get Premium",
    featured: false,
  },
];

export const Pricing = () => (
  <section id="pricing" className="py-24 bg-muted/40">
    <div className="container">
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
          Pricing
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">Choose your plan</h2>
        <p className="mt-3 text-muted-foreground">Cancel monthly. No setup fee for players.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-2xl p-8 border ${
              p.featured
                ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant scale-[1.03]"
                : "bg-card border-border shadow-card"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase">
                Most popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold">{p.price}</span>
              <span className={p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <Check className={`h-5 w-5 flex-none ${p.featured ? "text-accent" : "text-secondary"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button variant={p.featured ? "secondary" : "hero"} className="mt-8 w-full">
              {p.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-muted/50 border border-border p-8 text-center md:text-left md:flex md:items-center md:justify-between gap-6">
        <div>
          <h3 className="font-display text-xl font-bold">For court operators</h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
            We install and maintain the cameras — one-time installation fee plus a small annual charge. Players bring their own subscription.
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0 flex-none">Request as operator →</Button>
      </div>
    </div>
  </section>
);
