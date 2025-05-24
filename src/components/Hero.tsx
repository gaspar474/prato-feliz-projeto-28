
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-white">
      {/* Background decorations with pastel colors */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            {/* Logo Section usando a nova logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/072c8216-9632-4ee5-8b21-170233750e1c.png" 
                  alt="Prato Feliz Logo" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Chega de brigas na refeição!
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Seu filho vai amar comer saudável sem reclamações 🥦
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="scale-up" delay={600}>
          <div className="mb-12">
            {/* Centralizado com margens laterais */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <span className="text-lg font-semibold text-gray-800">Receitas do Prato Feliz</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
                <span className="text-3xl md:text-5xl">40 Receitas</span><br />
                fáceis e testadas por apenas <span className="text-green-600">R$10</span>
              </h3>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 px-12 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleScrollToPricing}
              >
                🛒 QUERO AS RECEITAS AGORA!
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-orange-500 mx-auto" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
