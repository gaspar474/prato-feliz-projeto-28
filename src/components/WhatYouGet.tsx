
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const WhatYouGet = () => {
  const features = [
    {
      icon: "📱",
      title: "40 receitas criativas em vídeo",
      description: "Vídeos curtos e práticos para facilitar o preparo de pratos incríveis"
    },
    {
      icon: "📖",
      title: "eBook completo com receitas",
      description: "Todas as receitas organizadas e ilustradas em um eBook exclusivo"
    },
    {
      icon: "⏰",
      title: "Pratos fáceis e rápidos",
      description: "Prepare refeições deliciosas em menos de 20 minutos"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Alimentação sem brigas",
      description: "Técnicas para tornar o momento da refeição mais prazeroso"
    }
  ];

  return (
    <section id="o-que-voce-recebe" className="py-20 px-4 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              ✨ O Que Você Recebe 🎁
            </h2>
            <p className="text-xl text-orange-700">
              Transforme a alimentação da sua família com nosso pacote completo
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <ScrollAnimation 
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-200">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">{feature.title}</h3>
                <p className="text-orange-700">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="scale-up" delay={600}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200 text-center">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">🌟 Testado e aprovado</h3>
            <p className="text-lg text-orange-700">Por centenas de mães e crianças exigentes</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
