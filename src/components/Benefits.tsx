
import { Check, Heart, Clock, Smile, Star, ChefHat, Utensils } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: "✅",
      title: "Alimentação sem brigas",
      description: "Seu filho vai comer melhor sem você precisar insistir."
    },
    {
      icon: "🎉",
      title: "Refeições divertidas",
      description: "Pratos coloridos e lúdicos que deixam a comida irresistível."
    },
    {
      icon: "🥦",
      title: "Legumes sem reclamação",
      description: "Seu filho come alimentos nutritivos sem perceber."
    },
    {
      icon: "⏳",
      title: "Menos tempo, mais diversão",
      description: "Refeições rápidas e sem estresse para todos."
    },
    {
      icon: "💖",
      title: "Pais e filhos mais felizes",
      description: "Chega de preocupação com a alimentação!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Principais Benefícios
            </h2>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600">
            Descubra como o Prato Feliz vai transformar as refeições na sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Utensils className="w-6 h-6 text-orange-500" />
            <p className="text-2xl font-bold text-gray-800">
              Transforme cada refeição em momentos de alegria!
            </p>
            <Utensils className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
