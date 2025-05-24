
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
    <footer className="py-16 px-4 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/61282aeb-d0f4-4c64-8de0-933d1afbdd0f.png" 
                alt="Prato Alegre Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-xl text-blue-200">
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
                      className="text-blue-200 hover:text-white transition-colors duration-300"
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
                  href="mailto:suporteplataformaplus@gmail.com"
                  className="text-blue-200 hover:text-white transition-colors duration-300"
                >
                  suporteplataformaplus@gmail.com 
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="border-t border-blue-700 pt-8 text-center">
            <p className="text-blue-200">
              © 2025 Prato Alegre. Todos os direitos reservados.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scripts de rastreamento Utmify */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.pixelId = "682fed3400a50185ddd5925a";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `
        }}
      />
      <script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        async
        defer
      />
    </footer>
  );
};
