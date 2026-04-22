"use client";

const stats = [
  { value: "4.7", unit: "km covered", color: "text-primary" },
  { value: "143", unit: "ball contacts", color: "text-secondary" },
  { value: "68", unit: "forehand shots", color: "text-accent" },
  { value: "24", unit: "km/h top speed", color: "text-destructive" },
];

export const Stats = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-semibold tracking-wide uppercase">
        What we track
      </span>
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">All the data that matters</h2>
      <p className="mt-3 text-muted-foreground">Per player, per session — fully automatic.</p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.unit} className="rounded-2xl bg-muted/40 border border-border p-6 text-left shadow-card hover:shadow-elegant transition-shadow">
            <div className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.unit}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-card bg-foreground/90 aspect-video max-w-3xl mx-auto">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/mlbench-ee7b4.firebasestorage.app/o/fixed_output_0fcb03fd-fcc2-434a-aa01-f38c3b15b4e2-e1.mp4?alt=media&token=a134057e-75df-4ede-8b88-e11160e03b60"
          controls
          playsInline
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);
