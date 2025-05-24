
import { Shield, Check, Clock, Headphones } from "lucide-react";

export const Guarantee = () => {
  const guarantees = [
    {
      icon: <Check className="w-8 h-8 text-green-500" />,
      text: "Acesso imediato"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      text: "Pagamento seguro"
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      text: "Suporte 24h"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Satisfação garantida ou seu dinheiro de volta!
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">7 dias para testar sem compromisso</h3>
            <p className="text-lg text-gray-700">
              Experimente sem riscos! Se não ficar 100% satisfeito, devolvemos o seu investimento integralmente, sem perguntas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="mb-4">{guarantee.icon}</div>
              <p className="font-semibold text-gray-800">{guarantee.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
