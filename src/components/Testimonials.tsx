
import React from "react";
import { Instagram, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const stats = [
    { number: "10k+", label: "Famílias atendidas" },
    { number: "98%", label: "Taxa de aprovação" },
    { number: "4.9/5", label: "Nota média" },
    { number: "1300+", label: "Depoimentos positivos" }
  ];

  const testimonialsData = [
    {
      user: { username: "anapaulasilva" }, // Username without @
      text: "Minha filha de 4 anos que ODIAVA brócolis agora pede o 'bolinho verde mágico'! Não acredito que funcionou tão rápido! 🥦✨",
      instagramTime: "2h",
      pratoFelizReply: {
        text: "Que maravilha, ficamos felizes em saber que vocês estão gostando! Conte sempre conosco para refeições mágicas! ✨",
      }
    },
    {
      user: { username: "mari_costa" },
      text: "Comprei ontem e hoje já fiz 3 receitas. Meu filho comeu TUDO e ainda pediu mais! Melhor investimento que já fiz! 👏",
      instagramTime: "1d",
      pratoFelizReply: {
        text: "Ficamos super felizes em ler isso, Mariana! Transformar a hora da refeição é nosso objetivo! 😊",
      }
    },
    {
      user: { username: "tatijsilver" },
      text: "Eu comprei. Copiei várias receitas. Minha filha ama a panquequinha de banana ❤️",
      instagramTime: "9 min", // Matching reference image time for this specific one
      pratoFelizReply: {
        text: "Que maravilha, ficamos felizes em saber que vocês estão gostando ❤️",
      }
    }
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length); 
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            O que as mães estão falando
          </h2>
          <p className="text-lg text-gray-700">
            Veja relatos reais de mães que transformaram a alimentação de seus filhos
          </p>
        </div>

        <Carousel
          opts={{ loop: true, align: "center" }}
          setApi={setApi}
          className="w-full max-w-sm md:max-w-md mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl overflow-hidden mx-auto"> {/* Card */}
                  {/* Instagram Header */}
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 text-white">
                    <div className="flex items-center gap-2">
                      <Instagram size={20} className="text-white" />
                      <span className="font-semibold text-sm">Instagram</span>
                    </div>
                    <span className="text-xs">{testimonial.instagramTime}</span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="font-bold text-md mb-1 text-gray-900">{testimonial.user.username}</h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{testimonial.text}</p>
                    
                    {/* Prato Alegre Reply */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-inner">
                      <div className="flex items-center gap-2 mb-1">
                        <img 
                          src="/lovable-uploads/61282aeb-d0f4-4c64-8de0-933d1afbdd0f.png" 
                          alt="Prato Alegre Logo" 
                          className="w-6 h-6 object-contain"
                        />
                        <span className="font-semibold text-xs text-gray-800">Prato Alegre</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-snug">{testimonial.pratoFelizReply.text}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Controls: Arrows and Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious 
              variant="ghost" 
              className="static transform-none w-8 h-8 p-0 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </CarouselPrevious>
            
            <div className="flex items-center gap-1.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-pink-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para o depoimento ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext 
              variant="ghost" 
              className="static transform-none w-8 h-8 p-0 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              <ArrowRight className="w-5 h-5" />
            </CarouselNext>
          </div>
        </Carousel>

        {/* Stats Section (Kept as is) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
