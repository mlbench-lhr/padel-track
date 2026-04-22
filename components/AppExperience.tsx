"use client";

const steps = [
  { n: 1, title: "Scan the QR code", desc: "Session starts automatically." },
  { n: 2, title: "Play your match", desc: "AI tracks everything in the background." },
  { n: 3, title: "View stats & highlights", desc: "Available right after the match." },
  { n: 4, title: "Share on Instagram & more", desc: "Export with one tap." },
];

const matchRows = [
  ["Distance", "4.7 km"],
  ["Ball contacts", "143"],
  ["Forehand", "68"],
  ["Backhand", "51"],
  ["Direction changes", "312"],
  ["Score", "6:4 / 7:5"],
];

export const AppExperience = () => (
  <section id="dashboard" className="py-24 bg-background">
    <div className="container grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
          App experience
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">Your match in your pocket</h2>
        <p className="mt-3 text-muted-foreground">Scan, play, done. All data and highlights available directly after your match.</p>

        <ol className="mt-8 space-y-5">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <div className="flex-none h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground font-bold flex items-center justify-center shadow-card">
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-[2rem] border-8 border-foreground/90 bg-card p-5 shadow-elegant max-w-sm mx-auto w-full">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>My match — today</span>
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
        </div>
        <div className="mt-4 rounded-xl overflow-hidden bg-foreground/90 aspect-[9/12] relative">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/mlbench-ee7b4.firebasestorage.app/o/fixed_output_28b91b0a-191c-4c8d-a66e-349f55053915-u2.mp4?alt=media&token=d66d86a4-d0bf-459b-bdbf-cca8aa878f5d"
            controls
            playsInline
            autoPlay
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 space-y-2">
          {matchRows.slice(0, 4).map(([k, v]) => (
            <div key={k} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
              <span className="text-sm text-muted-foreground">{k}</span>
              <span className="font-semibold text-foreground">{v}</span>
            </div>
          ))}
        </div>
        <button className="mt-5 w-full rounded-xl bg-gradient-primary text-primary-foreground font-semibold py-3 shadow-card">
          Open full report
        </button>
      </div>
    </div>
  </section>
);
