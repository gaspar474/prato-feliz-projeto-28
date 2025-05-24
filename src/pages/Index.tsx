
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Recipes } from "@/components/Recipes";
import { ForYou } from "@/components/ForYou";
import { WhatYouGet } from "@/components/WhatYouGet";
import { APLVSection } from "@/components/APLVSection";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Felizinho } from "@/components/Felizinho";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Recipes />
      <ForYou />
      <WhatYouGet />
      <APLVSection />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <Felizinho />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
