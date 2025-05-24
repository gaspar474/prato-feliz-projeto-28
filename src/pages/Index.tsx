
import { Hero } from "@/components/Hero";
import { HelpBar } from "@/components/HelpBar";
import { lazy, Suspense } from "react";

// Lazy load components que não são críticos para o primeiro carregamento
const Benefits = lazy(() => import("@/components/Benefits").then(module => ({ default: module.Benefits })));
const Recipes = lazy(() => import("@/components/Recipes").then(module => ({ default: module.Recipes })));
const ForYou = lazy(() => import("@/components/ForYou").then(module => ({ default: module.ForYou })));
const WhatYouGet = lazy(() => import("@/components/WhatYouGet").then(module => ({ default: module.WhatYouGet })));
const APLVSection = lazy(() => import("@/components/APLVSection").then(module => ({ default: module.APLVSection })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(module => ({ default: module.Testimonials })));
const HowItWorks = lazy(() => import("@/components/HowItWorks").then(module => ({ default: module.HowItWorks })));
const Pricing = lazy(() => import("@/components/Pricing").then(module => ({ default: module.Pricing })));
const Felizinho = lazy(() => import("@/components/Felizinho").then(module => ({ default: module.Felizinho })));
const Guarantee = lazy(() => import("@/components/Guarantee").then(module => ({ default: module.Guarantee })));
const FAQ = lazy(() => import("@/components/FAQ").then(module => ({ default: module.FAQ })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

// Loading fallback invisível para não afetar o design
const LoadingFallback = () => <div className="w-full h-32" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HelpBar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Recipes />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ForYou />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WhatYouGet />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <APLVSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Felizinho />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Guarantee />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
