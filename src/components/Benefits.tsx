
import { Check, Heart, Clock, Smile, Star, ChefHat } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: "Alimentação sem brigas",
      description: "Seu filho vai comer melhor sem você precisar insistir.",
      accent: <Star className="w-4 h-4 text-yellow-400" />
    },
    {
      icon: <Smile className="w-8 h-8 text-yellow-500" />,
      title: "Refeições divertidas",
      description: "Pratos coloridos e lúdicos que deixam a comida irresistível.",
      accent: <ChefHat className="w-4 h-4 text-orange-400" />
    },
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: "Legumes sem reclamação",
      description: "Seu filho come alimentos nutritivos sem perceber.",
      accent: <Heart className="w-4 h-4 text-pink-400" />
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Menos tempo, mais diversão",
      description: "Refeições rápidas e sem estresse para todos.",
      accent: <Star className="w-4 h-4 text-blue-400" />
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Pais e filhos mais felizes",
      description: "Chega de preocupação com a alimentação!",
      accent: <Smile className="w-4 h-4 text-green-400" />
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Principais Benefícios
            </h2>
            <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xl text-gray-700">
            Descubra como o Prato Feliz vai transformar as refeições na sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 relative"
            >
              <div className="absolute top-4 right-4">{benefit.accent}</div>
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Utensils className="w-6 h-6 text-orange-500" />
            <p className="text-2xl font-semibold text-gray-800">
              Transforme cada refeição em momentos de alegria!
            </p>
            <Utensils className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
