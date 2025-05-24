
import { Mail } from "lucide-react";

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Prato Feliz</h2>
          <p className="text-xl text-purple-200">
            Transformando a alimentação infantil em momentos felizes e saudáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a 
                href="mailto:contato@pratofeliz.com"
                className="text-purple-200 hover:text-white transition-colors duration-300"
              >
                contato@pratofeliz.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8 text-center">
          <p className="text-purple-200">
            © 2025 Prato Feliz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
