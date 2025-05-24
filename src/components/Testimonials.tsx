
import { Star, MessageCircle } from "lucide-react";

export const Testimonials = () => {
  const stats = [
    { number: "1300+", label: "Depoimentos" },
    { number: "98%", label: "Satisfação" },
    { number: "4.9/5", label: "Avaliação média" },
    { number: "10k+", label: "Crianças felizes" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-700">
            Veja relatos reais de mães e pais que transformaram a alimentação de seus filhos
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
              T
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-gray-800">@tatijsilver</h4>
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-500">9 min</span>
              </div>
              <p className="text-gray-700 mb-3">
                Eu comprei. Copiei várias receitas. Minha filha ama a panquequinha de banana
              </p>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
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
