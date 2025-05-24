
import { Clock, Star } from "lucide-react";

export const Recipes = () => {
  const recipes = [
    {
      title: "Mini Panquecas Divertidas",
      description: "Panquecas com gotinhas de chocolate que encantam as crianças!",
      time: "7 min",
      image: "🥞"
    },
    {
      title: "Bolinhos de Espinafre",
      description: "Petiscos nutritivos que fazem as crianças comerem legumes sem perceber",
      time: "7 min",
      image: "🧆"
    },
    {
      title: "Barras de Cereal Caseiras",
      description: "Nutritivas e saborosas, feitas com ingredientes naturais",
      time: "7 min",
      image: "🍪"
    },
    {
      title: "Pãezinhos Monstrinhos",
      description: "Pãezinhos recheados com chocolate que as crianças adoram abrir e comer",
      time: "7 min",
      image: "🍞"
    },
    {
      title: "Cookies de Aveia e Morango",
      description: "Cookies saudáveis feitos com aveia, morango e gotinhas de chocolate",
      time: "7 min",
      image: "🍓"
    },
    {
      title: "Copinhos de Limão com Iogurte",
      description: "Sobremesa refrescante e saudável que as crianças adoram",
      time: "7 min",
      image: "🍋"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
            🥄 Receitas Mágicas ✨
          </h2>
          <p className="text-xl text-gray-700">
            Pratos divertidos que transformam a hora da refeição em uma experiência incrível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {recipe.image}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-600">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Fácil de fazer</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
