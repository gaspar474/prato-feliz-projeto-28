
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

export const WhatYouGet = () => {
  const features = [
    {
      icon: "📱",
      title: "40 receitas criativas em vídeo",
      description: "Vídeos curtos e práticos para facilitar o preparo de pratos incríveis",
      color: "from-pink-300 to-rose-300"
    },
    {
      icon: "📖",
      title: "eBook completo com receitas",
      description: "Todas as receitas organizadas e ilustradas em um eBook exclusivo",
      color: "from-blue-300 to-purple-300"
    },
    {
      icon: "⏰",
      title: "Pratos fáceis e rápidos",
      description: "Prepare refeições deliciosas em menos de 20 minutos",
      color: "from-green-300 to-teal-300"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Alimentação sem brigas",
      description: "Técnicas para tornar o momento da refeição mais prazeroso",
      color: "from-orange-300 to-yellow-300"
    },
    {
      icon: "🌟",
      title: "Testado e aprovado",
      description: "Por centenas de mães e crianças exigentes",
      color: "from-indigo-300 to-blue-300"
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
    <section id="o-que-voce-recebe" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Elementos decorativos pastéis */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-12 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 right-16 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/5 w-28 h-28 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-2xl rotate-12 blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl blur-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              ✨ O Que Você Recebe 🎁
            </h2>
            <p className="text-xl text-gray-700">
              Transforme a alimentação da sua família com nosso pacote completo
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scale-up" delay={300}>
          <div className="relative">
            <Carousel
              opts={{ 
                loop: true, 
                align: "center",
                skipSnaps: false
              }}
              setApi={setApi}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <div className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/30 backdrop-blur-sm h-full flex flex-col justify-between min-h-[280px]`}>
                        <div>
                          <div className="text-6xl mb-6 text-center drop-shadow-lg">{feature.icon}</div>
                          <h3 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-md">{feature.title}</h3>
                          <p className="text-white/90 text-center drop-shadow-sm leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="mt-6 text-center">
                          <div className="w-12 h-1 bg-white/40 rounded-full mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-6 mt-12">
                <CarouselPrevious 
                  variant="outline" 
                  className="static transform-none w-12 h-12 p-0 rounded-full bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                />
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === current 
                          ? 'bg-purple-600 scale-125 shadow-md' 
                          : 'bg-purple-300 hover:bg-purple-400 hover:scale-110'
                      }`}
                      aria-label={`Ir para o item ${index + 1}`}
                    />
                  ))}
                </div>

                <CarouselNext 
                  variant="outline" 
                  className="static transform-none w-12 h-12 p-0 rounded-full bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                />
              </div>
            </Carousel>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-300 to-green-300 rounded-full opacity-30 blur-xl"></div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-white/40">
              <span className="text-2xl">🎯</span>
              <p className="text-lg font-semibold text-black">
                Tudo isso por apenas <span className="text-green-600 text-xl">R$10</span>!
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
