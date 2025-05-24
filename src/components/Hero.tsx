
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Elementos gráficos decorativos pastéis */}
      <div className="absolute inset-0 opacity-30">
        {/* Formas geométricas suaves */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Elementos adicionais inspirados na alimentação infantil */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl rotate-45 blur-xl opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-xl opacity-70"></div>
        <div className="absolute top-2/3 left-1/2 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl blur-lg opacity-50"></div>
        
        {/* Ondas suaves de fundo */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-100/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-bl from-pink-100/40 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            {/* Logo Section */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/61282aeb-d0f4-4c64-8de0-933d1afbdd0f.png" 
                  alt="Prato Alegre Logo" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200}>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Chega de Brigas na Mesa!
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="text-2xl md:text-3xl text-black mb-4 font-semibold">
            Seu filho vai amar comer saudável 🥦
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Receitas práticas, divertidas e nutritivas que fazem qualquer criança pedir bis!
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="scale-up" delay={600}>
          <div className="mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <span className="text-lg font-semibold text-black">Receitas do Prato Alegre</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
                <span className="text-3xl md:text-5xl">40 Receitas</span><br />
                fáceis e testadas por apenas <span className="text-green-600">R$10</span>
              </h2>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 text-white font-bold py-6 px-12 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleScrollToPricing}
              >
                🛒 QUERO AS RECEITAS AGORA!
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-black mx-auto" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
