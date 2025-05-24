
import { Heart, Check, BookOpen } from "lucide-react";

export const APLVSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-lg border border-white/20">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Seu filho tem APLV (Alergia à Proteína do Leite de Vaca)?
            </h2>
            <p className="text-lg text-gray-700">
              Você não está sozinha. Sabemos como é difícil encontrar receitas seguras, saudáveis e que realmente agradem o paladar das crianças com APLV.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Pensando nisso, o Prato Feliz já conta com:</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">30 receitas naturalmente sem leite no plano básico</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Um eBook exclusivo com 20 receitas 100% APLV, organizadas com carinho para facilitar sua rotina</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-6 mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Essas receitas são pensadas para o dia a dia:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-medium text-gray-800">Fáceis de fazer</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👀</div>
                <p className="font-medium text-gray-800">Visualmente atrativas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🥛</div>
                <p className="font-medium text-gray-800">Sem leite, sem derivados</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              E o melhor? Seu filho vai comer sem brigas e com alegria!
            </p>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-blue-800">
                💡 Esse material já está disponível na área de membros para quem adquiriu o Super Kit ou o Plano Premium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
