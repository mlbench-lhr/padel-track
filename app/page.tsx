import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AppExperience } from "@/components/AppExperience";
import { Dashboard } from "@/components/Dashboard";
import { Calories } from "@/components/Calories";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { ShareHighlights } from "@/components/ShareHighlights";

export default function Page() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="stats"><Stats /></section>
        <section id="app-experience"><AppExperience /></section>
        <section id="dashboard"><Dashboard /></section>
        <section id="calories"><Calories /></section>
        <section id="highlights"><ShareHighlights /></section>
        <section id="pricing"><Pricing /></section>
        <CTA />
      </main>
    </div>
  );
}
