
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
      image: "/lovable-uploads/a510428f-0e80-46fd-9b3b-4088e1754966.png"
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
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🥄 Receitas Mágicas ✨
            </h2>
            <p className="text-xl text-gray-600">
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
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className={`w-full h-full ${recipe.title === "Pãezinhos Monstrinhos" ? "object-contain" : "object-cover"}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{recipe.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{recipe.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="text-lg">⭐</span>
                    <span className="text-sm font-semibold">Fácil de fazer</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
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
