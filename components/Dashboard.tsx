"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const kpis = [
  { v: "9", u: "Sessions", c: "text-foreground" },
  { v: "44.1", u: "km total", c: "text-secondary" },
  { v: "6,140", u: "kcal burned", c: "text-accent" },
  { v: "6/3", u: "wins/losses", c: "text-primary" },
];

const activity = [
  { week: "W1", km: 10.2, kcal: 14.1 },
  { week: "W2", km: 12.8, kcal: 16.9 },
  { week: "W3", km: 9.4, kcal: 12.7 },
  { week: "W4", km: 11.7, kcal: 15.8 },
];

const shots = [
  { s: "S1", forehand: 67, backhand: 50 },
  { s: "S2", forehand: 74, backhand: 58 },
  { s: "S3", forehand: 60, backhand: 44 },
  { s: "S4", forehand: 70, backhand: 55 },
  { s: "S5", forehand: 57, backhand: 42 },
];

const burn = [
  { d: "Mon", kcal: 0 },
  { d: "Tue", kcal: 580 },
  { d: "Wed", kcal: 0 },
  { d: "Thu", kcal: 670 },
  { d: "Fri", kcal: 0 },
  { d: "Sat", kcal: 720 },
  { d: "Sun", kcal: 0 },
];

const sessions = [
  { court: "Court 3 — Munich North", date: "Apr 9, 2026 · 14:00", km: 4.7, kcal: 682, min: 90, win: true },
  { court: "Court 1 — Munich South", date: "Apr 7, 2026 · 10:00", km: 5.3, kcal: 720, min: 95, win: true },
  { court: "Court 2 — Munich East", date: "Apr 5, 2026 · 16:00", km: 4.2, kcal: 578, min: 80, win: false },
  { court: "Court 3 — Munich North", date: "Apr 3, 2026 · 11:00", km: 4.8, kcal: 650, min: 90, win: true },
];

const tooltipStyle = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  fontSize: "12px",
};

export const Dashboard = () => (
  <section id="dashboard-overview" className="py-24 bg-muted/40">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-semibold tracking-wide uppercase">
            Your dashboard
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">
            All sessions at a glance
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">
          Every match rolls up into your personal trends — open the app for the full breakdown.
        </p>
      </div>

      {/* KPIs */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.u} className="rounded-2xl bg-card border border-border p-5 shadow-card">
            <div className={`font-display text-3xl font-bold ${k.c}`}>{k.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{k.u}</div>
          </div>
        ))}
      </div>

      {/* Session replay video */}
      <div className="mt-6 rounded-2xl bg-card border border-border p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Latest session replay</h3>
          <span className="text-xs text-muted-foreground">Court 3 · today</span>
        </div>
        <div className="rounded-xl overflow-hidden bg-foreground/90 aspect-video">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/mlbench-ee7b4.firebasestorage.app/o/fixed_output_6e2a578b-3c6b-4efa-a06f-3d96a7f320d9-u1.mp4?alt=media&token=7296f23b-f93d-43f3-8061-3e16bce893dc"
            controls
            playsInline
            autoPlay
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main chart */}
      <div className="mt-6 rounded-2xl bg-card border border-border p-6 shadow-card">
        <h3 className="font-semibold">Activity — April 2026</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activity} margin={{ left: -16, right: 4, top: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="km" name="km covered" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              <Bar dataKey="kcal" name="kcal ÷100" fill="hsl(var(--secondary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two charts */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
          <h3 className="font-semibold">Forehand vs. backhand</h3>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={shots} margin={{ left: -16, right: 4, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="s" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="forehand" name="Forehand" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="backhand" name="Backhand" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
          <h3 className="font-semibold">Weekly calorie burn</h3>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={burn} margin={{ left: -16, right: 4, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--muted))" }} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Bar dataKey="kcal" name="kcal/session" fill="hsl(262 70% 70%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent sessions */}
      <div className="mt-6 rounded-2xl bg-card border border-border p-6 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Recent sessions</h3>
          <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/5 transition-colors">
            AI analysis <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <ul className="mt-4 divide-y divide-border">
          {sessions.map((s, i) => (
            <li key={i} className="flex items-center justify-between gap-4 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className={`h-2.5 w-2.5 rounded-full flex-none ${s.win ? "bg-secondary" : "bg-destructive"}`} />
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{s.court}</div>
                  <div className="text-xs text-muted-foreground">{s.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground whitespace-nowrap">
                <span>{s.km} km · {s.kcal} kcal · {s.min} min</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${s.win ? "bg-secondary/15 text-secondary" : "bg-destructive/15 text-destructive"}`}>
                  {s.win ? "Win" : "Loss"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
