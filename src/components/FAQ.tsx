
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como eu vou receber o material?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso à área de membros. O acesso é imediato e você pode começar a usar as receitas na mesma hora!"
    },
    {
      question: "Preciso ter habilidades na cozinha?",
      answer: "Não! Nossas receitas são pensadas para serem super fáceis e práticas. Mesmo quem não tem experiência na cozinha consegue fazer os pratos seguindo nossos vídeos passo a passo."
    },
    {
      question: "Posso assistir os vídeos no celular?",
      answer: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em celulares, tablets e computadores. Você pode acessar de qualquer lugar."
    },
    {
      question: "Os ingredientes são fáceis de encontrar?",
      answer: "Sim! Todas as receitas são feitas com ingredientes simples que você encontra em qualquer supermercado. Nada de ingredientes exóticos ou difíceis de achar."
    },
    {
      question: "E se meu filho não gostar das receitas?",
      answer: "Nossas receitas foram testadas e aprovadas por centenas de crianças exigentes. Mas se mesmo assim seu filho não gostar, você tem 7 dias de garantia para pedir seu dinheiro de volta."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-700">
            Tire suas dúvidas sobre o Prato Feliz
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="text-left font-semibold text-gray-800 px-6 py-4 hover:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
