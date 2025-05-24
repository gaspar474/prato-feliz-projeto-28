
import { Check, Heart, Clock, Smile } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: "Alimentação sem brigas",
      description: "Seu filho vai comer melhor sem você precisar insistir."
    },
    {
      icon: <Smile className="w-8 h-8 text-yellow-500" />,
      title: "Refeições divertidas",
      description: "Pratos coloridos e lúdicos que deixam a comida irresistível."
    },
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      title: "Legumes sem reclamação",
      description: "Seu filho come alimentos nutritivos sem perceber."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Menos tempo, mais diversão",
      description: "Refeições rápidas e sem estresse para todos."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Pais e filhos mais felizes",
      description: "Chega de preocupação com a alimentação!"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Principais Benefícios 🌟
          </h2>
          <p className="text-xl text-gray-700">
            Descubra como o Prato Feliz vai transformar as refeições na sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">
            Transforme cada refeição em momentos de alegria! 🍽️
          </p>
        </div>
      </div>
    </section>
  );
};
