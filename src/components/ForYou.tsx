
import { X, Check } from "lucide-react";

export const ForYou = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            O Prato Feliz é para você que:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-400">
            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Está cansada de:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Seu filho rejeitar qualquer comida saudável</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Brigas constantes na hora das refeições</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Não saber mais o que preparar para ele comer</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Se preocupar se ele está se alimentando bem</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              E quer:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">Ver seu filho comendo legumes sem reclamar</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">Refeições em família cheias de alegria</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">Ter receitas práticas e que funcionam de verdade</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">Tranquilidade sobre a alimentação do seu filho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
