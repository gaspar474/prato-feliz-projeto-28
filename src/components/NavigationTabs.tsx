
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const NavigationTabs = () => {
  const tabs = [
    { name: "Benefícios", href: "#beneficios", emoji: "✅" },
    { name: "Receitas", href: "#receitas", emoji: "🍽️" },
    { name: "Depoimentos", href: "#depoimentos", emoji: "💬" },
    { name: "FAQ", href: "#faq", emoji: "❓" },
    { name: "Ofertas", href: "#ofertas", emoji: "🎁" }
  ];

  const handleTabClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 px-4 bg-white border-b-4 border-orange-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-in">
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-2 md:gap-6">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(tab.href)}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <span className="text-lg">{tab.emoji}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
