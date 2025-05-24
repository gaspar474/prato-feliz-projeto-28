
import { Check, Heart, Clock, Smile, Star, ChefHat, Utensils } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Aceita legumes e verduras",
      description: "Receitas que 'escondem' ingredientes saudáveis de forma criativa e saborosa."
    },
    {
      icon: "⏰",
      title: "Pratos rápidos de fazer",
      description: "Todas as receitas levam menos de 20 minutos para ficarem prontas."
    },
    {
      icon: "💝",
      title: "Ingredientes do dia a dia",
      description: "Use somente ingredientes que você já tem em casa ou encontra facilmente."
    },
    {
      icon: "🍽️",
      title: "Alimentação sem brigas",
      description: "Transforme o momento da refeição em alegria e conexão familiar."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Para toda a família",
      description: "Receitas que agradam crianças e adultos ao mesmo tempo."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Por que o Prato Feliz Funciona?
            </h2>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-lg text-gray-600">
            Descubra os benefícios que mais de 10.000 famílias já experimentaram
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Utensils className="w-6 h-6 text-orange-500" />
            <p className="text-xl font-bold text-gray-800">
              Transforme cada refeição em momentos de alegria!
            </p>
            <Utensils className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
