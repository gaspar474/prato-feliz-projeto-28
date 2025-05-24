
import { Button } from "@/components/ui/button";
import { Play, ArrowDown, Utensils, Heart, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Prato Feliz
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
            Chega de brigas na refeição!
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Seu filho vai amar comer saudável sem reclamações 🥦
          </p>
        </div>

        <div className="mb-12 animate-scale-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Play className="w-8 h-8 text-pink-500" />
              <span className="text-lg font-medium text-gray-800">Prato Feliz - Alimentação Divertida</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              40 Receitas fáceis e divertidas por apenas R$10
            </h3>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ver Kits disponíveis
            </Button>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-8 animate-fade-in">
          Transforme a alimentação do seu filho em um momento divertido e sem estresse!
        </p>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-purple-500 mx-auto" />
        </div>
      </div>
    </section>
  );
};
