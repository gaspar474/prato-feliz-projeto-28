
import { ScrollAnimation } from "@/components/ScrollAnimation";

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
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Elementos decorativos pastéis */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-green-200 rounded-2xl rotate-12 blur-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">⭐</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Por que o Prato Feliz Funciona?
              </h2>
              <span className="text-3xl">⭐</span>
            </div>
            <p className="text-lg text-gray-700">
              Descubra os benefícios que mais de 10.000 famílias já experimentaram
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollAnimation 
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-white/40">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🍴</span>
              <p className="text-xl font-bold text-black">
                Transforme cada refeição em momentos de alegria!
              </p>
              <span className="text-2xl">🍴</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
