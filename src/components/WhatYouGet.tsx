
import { Smartphone, BookOpen, Clock, Users } from "lucide-react";

export const WhatYouGet = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: "40 receitas criativas em vídeo",
      description: "Vídeos curtos e práticos para facilitar o preparo de pratos incríveis"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-green-500" />,
      title: "eBook completo com receitas",
      description: "Todas as receitas organizadas e ilustradas em um eBook exclusivo"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Pratos fáceis e rápidos",
      description: "Prepare refeições deliciosas em menos de 20 minutos"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Alimentação sem brigas",
      description: "Técnicas para tornar o momento da refeição mais prazeroso"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            ✨ O Que Você Recebe 🎁
          </h2>
          <p className="text-xl text-gray-700">
            Transforme a alimentação da sua família com nosso pacote completo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Testado e aprovado</h3>
          <p className="text-lg text-gray-700">Por centenas de mães e crianças exigentes</p>
        </div>
      </div>
    </section>
  );
};
