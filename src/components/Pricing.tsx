
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      title: "Para quem está começando",
      name: "Kit 40 Receitas",
      originalPrice: "R$97,00",
      discount: "90%",
      price: "R$10,00",
      period: "/único",
      features: [
        "40 vídeos com receitas fáceis",
        "eBook com todas as receitas",
        "Acesso imediato ao conteúdo",
        "Acesso às novas receitas"
      ],
      buttonText: "GARANTIR AGORA MESMO",
      popular: false,
      bgColor: "bg-white"
    },
    {
      title: "Escolha das Famílias",
      name: "Super Kit – 70 Receitas 🥦",
      originalPrice: "R$127,00",
      discount: "87%",
      price: "R$17,00",
      period: "/único",
      features: [
        "70 vídeos com receitas fáceis",
        "eBook com todas as receitas",
        "Acesso imediato ao conteúdo",
        "Cardápios prontos para a semana",
        "Lista de compras inteligente",
        "10 Sobremesas Saudáveis",
        "Receba novas receitas TODA SEMANA",
        "Bônus: 10 Lanchinhos Saudáveis",
        "Bônus: Ebook APLV com 20 receitas",
        "Acesso ao Felizinho por 7 dias grátis"
      ],
      buttonText: "GARANTIR AGORA MESMO",
      popular: true,
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50"
    },
    {
      title: "Solução Completa",
      name: "Acesso Premium – Felizinho",
      originalPrice: "R$127,00",
      discount: "71%",
      price: "R$37,00",
      period: "/único",
      features: [
        "Felizinho - Assistente Virtual",
        "Tudo do Kit Básico e do Super Kit",
        "Mais de 200 receitas salgadas, doces e para crianças com APLV",
        "Acesso ao Felizinho – o assistente virtual de alimentação infantil no WhatsApp",
        "Encontra receitas com os ingredientes que você tem em casa",
        "Monta cardápios personalizados de acordo com o gosto do seu filho",
        "Sugere substituições inteligentes para qualquer ingrediente",
        "Dá ideias por horário, idade ou fase",
        "Indica lanches rápidos e criativos para a lancheira",
        "Traz novas sugestões quando seu filho enjoa das opções",
        "Acesso aos módulos especiais: APLV, Seletividade, Lancheira e outros",
        "Clube do Felizinho: você recebe 1 nova receita por semana",
        "Acesso garantido a todos os novos produtos lançados no futuro",
        "Suporte 24 horas com o Felizinho direto no WhatsApp"
      ],
      buttonText: "✨ GARANTIR ACESSO AO FELIZINHO ✨",
      popular: false,
      bgColor: "bg-white"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            SOLUÇÕES PARA TODAS AS FAMÍLIAS
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transforme a Alimentação do Seu Filho Hoje!
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Escolha o plano ideal para acabar com o drama na hora das refeições e garantir uma alimentação saudável e divertida para seu filho
          </p>
          
          <div className="bg-red-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 mb-8 font-bold text-lg">
            <Clock className="w-5 h-5" />
            <span>OFERTA EXPIRA EM: 23:59:46</span>
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
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS VENDIDO
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <p className="text-sm text-gray-500 mb-2">{plan.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{plan.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-gray-400 line-through">De {plan.originalPrice}</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{plan.discount}
                    </span>
                  </div>
                  <div className="text-5xl font-black text-gray-800 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500">por apenas</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-6 text-lg font-bold rounded-2xl transition-all duration-300 ${
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
      </div>
    </section>
  );
};
