
import { X, Check } from "lucide-react";

export const ForYou = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            ✨ O Prato Feliz é para você que: 🍽️
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Problemas atuais:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Seu filho torce o nariz para qualquer coisa saudável</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Cada refeição se transforma em uma batalha desgastante</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-red-700">Você quer melhorar a alimentação, mas falta tempo e ideias</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Com o Prato Feliz você tem:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">Receitas irresistíveis que escondem ingredientes saudáveis</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">100% testado e aprovado por crianças exigentes</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-green-700">Transforme a hora da refeição em momentos de conexão e alegria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
