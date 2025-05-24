
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const Footer = () => {
  const links = [
    "Benefícios",
    "Exemplos de Receitas",
    "Kits Disponíveis",
    "Depoimentos",
    "Perguntas Frequentes"
  ];

  return (
    <footer className="py-16 px-4 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🍴</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs">✨</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">Comida Alegre</h2>
            <p className="text-xl text-purple-200">
              Transformando a alimentação infantil em momentos felizes e saudáveis.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimation animation="slide-left" delay={200}>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                {links.map((link, index) => (
                  <div key={index}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-right" delay={300}>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <a 
                  href="mailto:contato@pratofeliz.com"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  contato@pratofeliz.com 
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="border-t border-purple-700 pt-8 text-center">
            <p className="text-purple-200">
              © 2025 Comida Alegre. Todos os direitos reservados.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};
