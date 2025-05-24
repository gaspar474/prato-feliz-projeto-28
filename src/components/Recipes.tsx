
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const Recipes = () => {
  const recipes = [
    {
      title: "Mini Panquecas Divertidas",
      description: "Panquecas com gotinhas de chocolate que encantam as crianças!",
      time: "7 min",
      image: "/lovable-uploads/03ac8601-6955-42b4-9e3d-8d58d2f5fbf3.png"
    },
    {
      title: "Bolinhos de Espinafre",
      description: "Petiscos nutritivos que fazem as crianças comerem legumes sem perceber",
      time: "7 min",
      image: "/lovable-uploads/284af897-71a7-45af-981c-ab6056014bdb.png"
    },
    {
      title: "Barras de Cereal Caseiras",
      description: "Nutritivas e saborosas, feitas com ingredientes naturais",
      time: "7 min",
      image: "/lovable-uploads/79ac834a-0cbc-4f1e-b1d4-7ce8b9384a96.png"
    },
    {
      title: "Pãezinhos Monstrinhos",
      description: "Pãezinhos recheados com chocolate que as crianças adoram abrir e comer",
      time: "7 min",
      image: "/lovable-uploads/8203342b-bfef-467e-ae9b-41e099343cb6.png"
    },
    {
      title: "Cookies de Aveia e Morango",
      description: "Cookies saudáveis feitos com aveia, morango e gotinhas de chocolate",
      time: "7 min",
      image: "/lovable-uploads/a2a217d8-fd36-4174-aec7-9fddbda23bec.png"
    },
    {
      title: "Copinhos de Limão com Iogurte",
      description: "Sobremesa refrescante e saudável que as crianças adoram",
      time: "7 min",
      image: "/lovable-uploads/f4e17b38-385a-4bea-b98b-7820f19e6ec1.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-peach-50 to-amber-50 relative overflow-hidden">
      {/* Elementos decorativos pastéis */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-16 w-36 h-36 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-20 w-44 h-44 bg-gradient-to-br from-peach-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-3xl rotate-45 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl blur-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              🥄 Receitas Mágicas ✨
            </h2>
            <p className="text-xl text-gray-700">
              Pratos divertidos que transformam a hora da refeição em uma experiência incrível
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <ScrollAnimation 
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden bg-orange-50">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 text-center">{recipe.title}</h3>
                <p className="text-gray-700 mb-6 text-center leading-relaxed">{recipe.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-orange-200">
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="text-lg">⭐</span>
                    <span className="text-sm font-semibold">Fácil de fazer</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-600">
                    <span className="text-lg">⏱️</span>
                    <span className="text-sm font-semibold">{recipe.time}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
