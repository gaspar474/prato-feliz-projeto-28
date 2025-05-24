
import { Button } from "@/components/ui/button";
import { MessageCircle, Smartphone, Clock, ChefHat } from "lucide-react";

export const Felizinho = () => {
  const features = [
    {
      icon: <ChefHat className="w-6 h-6 text-purple-500" />,
      text: "Monta cardápios personalizados para seu filho"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      text: "Disponível 24h por dia no WhatsApp"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      text: "Sugere receitas com o que você tem em casa"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
      text: "Dá ideias quando seu filho enjoa da comida"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
              ✨ Felizinho
            </h2>
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              O Felizinho vai revolucionar sua experiência!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/60 rounded-2xl p-4">
                {feature.icon}
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              💬 QUERO O FELIZINHO NO MEU WHATSAPP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
