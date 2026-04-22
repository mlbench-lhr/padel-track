import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AppExperience } from "@/components/AppExperience";
import { Dashboard } from "@/components/Dashboard";
import { Calories } from "@/components/Calories";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AppExperience />
        <Dashboard />
        <Calories />
        <Pricing />
        <CTA />
      </main>
    </div>
  );
}
