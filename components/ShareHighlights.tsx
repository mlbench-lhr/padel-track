import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Share2, Sparkles } from "lucide-react";

const clips = [
  { title: "Backhand winner",   icon: Youtube, iconBg: "bg-red-500",  platform: "Youtube", image: "/facebook.svg", video: "https://firebasestorage.googleapis.com/v0/b/mlbench-ee7b4.firebasestorage.app/o/cropped%20video.mp4?alt=media&token=017ed36e-3fa4-4d50-a86c-472cc944e2eb" },
  { title: "Diving smash",      icon: Facebook,  iconBg: "bg-blue-600",  platform: "Facebook",  image: "/insta.svg",    video: "https://firebasestorage.googleapis.com/v0/b/mlbench-ee7b4.firebasestorage.app/o/padel%20video.mp4?alt=media&token=581af3b9-5e89-45b5-890b-c7cdb6a8eeff" },
  { title: "Cross-court rally", icon: Instagram,   iconBg: "bg-pink-500",   platform: "Instagram",   image: "/youtube.svg",  video: "https://firebasestorage.googleapis.com/v0/b/mlbench-ee7b4.firebasestorage.app/o/cropped%20video%207.mp4?alt=media&token=818b3c9e-63f6-4505-8430-522278f65a58" },
];

export const ShareHighlights = () => (
  <section id="highlights" className="relative py-28 overflow-hidden bg-background">
    {/* Decorative background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
    </div>

    <div className="container">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-wider rounded-full bg-foreground text-background mb-5">
          <Sparkles className="h-3.5 w-3.5" /> SOCIAL READY
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Share your highlights
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Auto-cut your best smashes and rallies into vertical clips. One tap to post on Insta,
          TikTok & YouTube — captions and stats baked in.
        </p>
      </div>

      {/* Phones row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {clips.map((c, i) => (
          <div
            key={c.title}
            className={`relative ${i === 1 ? "md:-translate-y-6" : ""} ${i === 2 ? "md:translate-y-4" : ""}`}
          >
            {/* Floating platform pill */}
            <div className={`absolute -top-3 ${i % 2 === 0 ? "-right-2" : "-left-2"} z-20 flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 shadow-card`}>
              <div className={`h-6 w-6 rounded-full ${c.iconBg} flex items-center justify-center`}>
                <c.icon className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-xs font-bold text-foreground pr-1">{c.platform}</span>
            </div>

            {/* Phone frame */}
            <div className="relative mx-auto w-full max-w-[280px] aspect-[9/16] rounded-[2.5rem] bg-foreground py-2.5 px-1.5 ">
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-black">

                {/* Video — plays silently behind the image */}
                <video
                  src={c.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Phone mockup image on top of video */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover z-[1]"
                />

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="hero" size="lg">
          <Share2 className="h-4 w-4" /> Share a highlight
        </Button>
      </div>
    </div>
  </section>
);