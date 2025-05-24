
import { Button } from "@/components/ui/button";
import { Play, ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Prato Feliz
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Chega de Brigas na Mesa!
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Seu filho vai amar comer saudável 🥦
          </p>
          
          <p className="text-lg text-gray-500 mb-12">
            Receitas práticas, divertidas e nutritivas que fazem qualquer criança pedir bis!
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
              <span className="text-lg font-semibold text-gray-700">Receitas do Prato Feliz</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
              <span className="text-3xl md:text-5xl">40 Receitas</span><br />
              fáceis e testadas por apenas <span className="text-green-600">R$10</span>
            </h3>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 px-12 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              🛒 QUERO AS RECEITAS AGORA!
            </Button>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-orange-500 mx-auto" />
        </div>
      </div>
    </section>
  );
};
