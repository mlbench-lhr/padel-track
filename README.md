# PadelTrack — Next.js

Ported from a Vite + React project to **Next.js 14 (App Router) + TypeScript**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- Recharts
- lucide-react

## Notes

- All interactive components are marked with `"use client"` since they use hooks, event handlers, or Recharts.
- Design tokens live in `app/globals.css` and `tailwind.config.ts` — keep using semantic Tailwind classes.
- Path alias `@/*` is configured in `tsconfig.json`.
- Replace placeholder video URLs in `Stats.tsx`, `AppExperience.tsx`, `Dashboard.tsx`, and `Calories.tsx` with your own.
