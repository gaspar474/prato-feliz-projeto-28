
import { Star, MessageCircle } from "lucide-react";

export const Testimonials = () => {
  const stats = [
    { number: "10k+", label: "Famílias atendidas" },
    { number: "98%", label: "Taxa de aprovação" },
    { number: "4.9/5", label: "Nota média" },
    { number: "1300+", label: "Depoimentos positivos" }
  ];

  const testimonials = [
    {
      name: "Ana Paula",
      username: "@anapaulasilva",
      text: "Minha filha de 4 anos que ODIAVA brócolis agora pede o 'bolinho verde mágico'! Não acredito que funcionou tão rápido! 🥦✨",
      time: "2h"
    },
    {
      name: "Mariana Costa",
      username: "@mari_costa",
      text: "Comprei ontem e hoje já fiz 3 receitas. Meu filho comeu TUDO e ainda pediu mais! Melhor investimento que já fiz! 👏",
      time: "1d"
    },
    {
      name: "Tatiana Silver",
      username: "@tatijsilver",
      text: "Eu comprei. Copiei várias receitas. Minha filha ama a panquequinha de banana ❤️",
      time: "3d"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            O que as mães estão falando
          </h2>
          <p className="text-lg text-gray-700">
            Veja relatos reais de mães que transformaram a alimentação de seus filhos
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-gray-800">{testimonial.username}</h4>
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-500">{testimonial.time}</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    {testimonial.text}
                  </p>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
