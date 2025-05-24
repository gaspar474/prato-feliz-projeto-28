
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

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
      mostSold: false,
      bgColor: "bg-white",
      checkoutLink: "https://projeto-013.pay.yampi.com.br/r/AFR0HSFH6V"
    },
    {
      title: "💡 INTELIGENTE",
      name: "Super Kit Completo",
      originalPrice: "R$127",
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
      buttonText: "💡 QUERO O SUPER KIT",
      popular: false,
      mostSold: false,
      smartChoice: true,
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      checkoutLink: "https://projeto-013.pay.yampi.com.br/r/21SILFH3YP"
    },
    {
      title: "🏆 PREMIUM",
      name: "Com Assistente IA",
      originalPrice: "R$127",
      discount: "81%",
      price: "R$27",
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
      buttonText: "🏆 QUERO O PREMIUM",
      popular: false,
      mostSold: true,
      bgColor: "bg-white",
      checkoutLink: "https://projeto-013.pay.yampi.com.br/r/N1F382WO02"
    }
  ];

  return (
    <section id="ofertas" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Escolha Seu Kit
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Mais de 10.000 famílias já transformaram a alimentação dos seus filhos
            </p>
            
            <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-3 mb-8 font-bold shadow-2xl animate-pulse">
              <span className="text-lg">⏰</span>
              <span>⚡ OFERTA POR TEMPO LIMITADO</span>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimation 
              key={index}
              animation="fade-up"
              delay={index * 200}
            >
              <div 
                className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-2xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-3xl ${
                  plan.mostSold ? 'border-purple-400 transform scale-110 shadow-purple-200/50 ring-4 ring-purple-200/30' : 
                  plan.smartChoice ? 'border-orange-400 transform scale-105 shadow-orange-200/50 ring-2 ring-orange-200/20' : 
                  'border-gray-200'
                }`}
                style={{
                  boxShadow: plan.mostSold 
                    ? '0 25px 50px -12px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
                    : plan.smartChoice
                    ? '0 25px 50px -12px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(251, 146, 60, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
                    : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Sparkle effects para mais vendido */}
                {plan.mostSold && (
                  <>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-150"></div>
                    <div className="absolute top-1/2 -right-2 w-3 h-3 bg-gold-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-1/4 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                  </>
                )}

                {/* Faixa para oferta inteligente */}
                {plan.smartChoice && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                      A OFERTA MAIS INTELIGENTE
                    </div>
                  </div>
                )}

                {/* Badge de mais vendido */}
                {plan.mostSold && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="text-yellow-300">🏆</span>
                        MAIS VENDIDO
                        <span className="text-yellow-300">🏆</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 rounded-full blur opacity-75"></div>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 mt-4">
                  <p className="text-sm font-bold text-orange-600 mb-2">{plan.title}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-lg text-gray-400 line-through">De {plan.originalPrice}</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                        -{plan.discount}
                      </span>
                    </div>
                    <div className={`text-4xl font-black text-gray-800 mb-1 relative ${plan.mostSold ? 'text-5xl' : ''}`}>
                      {plan.price}
                      {plan.mostSold && (
                        <div className="absolute -inset-6 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg blur-lg opacity-40 -z-10"></div>
                      )}
                      {plan.smartChoice && (
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-lg blur-lg opacity-30 -z-10"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{plan.period}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <span className="text-lg mt-0.5 flex-shrink-0">✅</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild
                  className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                    plan.mostSold 
                      ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white transform hover:scale-105 text-xl py-5' 
                      : plan.smartChoice
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white transform hover:scale-105' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white hover:scale-105'
                  }`}
                >
                  <a href={plan.checkoutLink} target="_blank" rel="noopener noreferrer">
                    {plan.buttonText}
                  </a>
                </Button>

                {/* Glow effect para mais vendido */}
                {plan.mostSold && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl -z-10"></div>
                )}

                {/* Glow effect para oferta inteligente */}
                {plan.smartChoice && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-xl -z-10"></div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              ✅ <strong>Garantia de 7 dias:</strong> Não gostou? Devolvemos 100% do seu dinheiro
            </p>
            <p className="text-gray-600">
              🔒 <strong>Pagamento seguro</strong> via cartão, PIX ou boleto
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
