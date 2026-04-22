"use client";

const burnStats = [
  { v: "844", u: "kcal burned", c: "text-accent" },
  { v: "8.3", u: "km covered", c: "text-primary" },
  { v: "90", u: "min active", c: "text-secondary" },
  { v: "9", u: "kcal/min", c: "text-destructive" },
];

const macros = [
  { k: "Protein", v: "135g", w: "60%" },
  { k: "Carbohydrates", v: "295g", w: "85%" },
  { k: "Fat", v: "84g", w: "40%" },
];

export const Calories = () => (
  <section id="calories" className="py-24 bg-muted/40">
    <div className="container">
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wide uppercase">
          New: Calorie tracker
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">Energy & burn</h2>
        <p className="mt-3 text-muted-foreground">Calculate your burn live — adjusted for weight, duration and intensity.</p>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {burnStats.map((s) => (
          <div key={s.u} className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <div className={`font-display text-3xl font-bold ${s.c}`}>{s.v}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.u}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
          <h3 className="font-semibold mb-4">Live burn cam</h3>
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
          <p className="mt-3 text-xs text-muted-foreground">Tagged with calorie overlay every 10 seconds.</p>
        </div> */}

        <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
          <h3 className="font-semibold mb-4">Burn estimator</h3>
          <div className="space-y-3 text-sm">
            <Row label="Body weight" value="75 kg" />
            <Row label="Play duration" value="90 min" />
            <Row label="Intensity" value="Medium" />
          </div>
          <div className="mt-6 p-4 rounded-xl bg-gradient-accent text-accent-foreground">
            <div className="font-display text-2xl font-bold">844 kcal</div>
            <div className="text-sm opacity-90">estimated · fat burned: <strong>94g</strong></div>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
          <h3 className="font-semibold mb-4">Macros — match day</h3>
          <div className="space-y-4">
            {macros.map((m) => (
              <div key={m.k}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">{m.k}</span>
                  <span className="font-semibold">{m.v}</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-primary" style={{ width: m.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between py-2 border-b border-border last:border-0">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);
