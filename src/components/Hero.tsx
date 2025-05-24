
import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const Hero = () => {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('ofertas');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Background decorations com cores mais suaves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            {/* Logo Section - Aumentado */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/61282aeb-d0f4-4c64-8de0-933d1afbdd0f.png" 
                  alt="Prato Alegre Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
            Chega de Brigas na Mesa!
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="text-xl md:text-2xl text-blue-700 mb-4 font-medium">
            Seu filho vai amar comer saudável 🥦
          </p>
          
          <p className="text-lg text-blue-600 mb-12">
            Receitas práticas, divertidas e nutritivas que fazem qualquer criança pedir bis!
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="scale-up" delay={600}>
          <div className="mb-12">
            {/* Centralizado com margens laterais */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <span className="text-lg font-semibold text-blue-800">Receitas do Prato Alegre</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mb-8">
                <span className="text-3xl md:text-5xl">40 Receitas</span><br />
                fáceis e testadas por apenas <span className="text-green-600">R$10</span>
              </h3>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-6 px-12 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleScrollToPricing}
              >
                🛒 QUERO AS RECEITAS AGORA!
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-blue-500 mx-auto" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
