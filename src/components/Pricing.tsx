
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      title: "🍎 Kit Básico",
      name: "40 Receitas Testadas",
      originalPrice: "R$97",
      discount: "90%",
      price: "R$10",
      period: "pagamento único",
      features: [
        "40 receitas em vídeo passo a passo",
        "eBook com todas as receitas organizadas",
        "Acesso imediato após a compra",
        "Ingredientes fáceis de encontrar",
        "Receitas testadas por crianças exigentes",
        "Suporte por email"
      ],
      buttonText: "🛒 QUERO O KIT BÁSICO",
      popular: false,
      bgColor: "bg-white"
    },
    {
      title: "⭐ MAIS VENDIDO",
      name: "Super Kit Completo",
      originalPrice: "R$147",
      discount: "89%",
      price: "R$17",
      period: "pagamento único",
      features: [
        "Tudo do Kit Básico +",
        "70 receitas em vídeo (30 extras)",
        "20 receitas para crianças com APLV",
        "15 sobremesas saudáveis",
        "10 lanches para a escola",
        "Cardápios semanais prontos",
        "Lista de compras inteligente",
        "Acesso a todas as atualizações",
        "Grupo VIP no Telegram",
        "Suporte prioritário"
      ],
      buttonText: "⭐ QUERO O SUPER KIT",
      popular: true,
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50"
    },
    {
      title: "🤖 Premium",
      name: "Com Assistente IA",
      originalPrice: "R$197",
      discount: "81%",
      price: "R$37",
      period: "pagamento único",
      features: [
        "Tudo do Super Kit +",
        "Felizinho - Assistente de IA no WhatsApp",
        "Receitas personalizadas em tempo real",
        "Sugestões com ingredientes da sua casa",
        "Cardápios adaptados ao gosto do seu filho",
        "Substituições inteligentes de ingredientes",
        "Suporte 24h pelo WhatsApp",
        "Novas receitas toda semana",
        "Acesso vitalício a todas as atualizações"
      ],
      buttonText: "🤖 QUERO O PREMIUM",
      popular: false,
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Escolha Seu Kit
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mais de 10.000 famílias já transformaram a alimentação dos seus filhos
          </p>
          
          <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-3 mb-8 font-bold">
            <Clock className="w-5 h-5" />
            <span>⚡ OFERTA POR TEMPO LIMITADO</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-orange-400 transform scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MAIS VENDIDO
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <p className="text-sm font-bold text-orange-600 mb-2">{plan.title}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-6">{plan.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-gray-400 line-through">De {plan.originalPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{plan.discount}
                    </span>
                  </div>
                  <div className="text-4xl font-black text-gray-800 mb-1">
                    {plan.price}
                  </div>
                  <p className="text-sm text-gray-500">{plan.period}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' 
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ✅ <strong>Garantia de 7 dias:</strong> Não gostou? Devolvemos 100% do seu dinheiro
          </p>
          <p className="text-gray-600">
            🔒 <strong>Pagamento seguro</strong> via cartão, PIX ou boleto
          </p>
        </div>
      </div>
    </section>
  );
};
