
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
import Autoplay from "embla-carousel-autoplay";

export const WhatYouGet = () => {
  const features = [
    {
      icon: "📱",
      title: "40 receitas criativas em vídeo",
      description: "Vídeos curtos e práticos para facilitar o preparo de pratos incríveis",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: "📖",
      title: "eBook completo com receitas",
      description: "Todas as receitas organizadas e ilustradas em um eBook exclusivo",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: "⏰",
      title: "Pratos fáceis e rápidos",
      description: "Prepare refeições deliciosas em menos de 20 minutos",
      color: "from-green-400 to-teal-400"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Alimentação sem brigas",
      description: "Técnicas para tornar o momento da refeição mais prazeroso",
      color: "from-orange-400 to-yellow-400"
    },
    {
      icon: "🌟",
      title: "Testado e aprovado",
      description: "Por centenas de mães e crianças exigentes",
      color: "from-indigo-400 to-blue-400"
    }
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

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
    <section id="o-que-voce-recebe" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-lg blur opacity-20 animate-pulse"></div>
              <h2 className="relative text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 px-4 py-2">
                ✨ O Que Você Recebe 🎁
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-2">
                Transforme a alimentação da sua família
              </p>
              <p className="text-lg text-blue-600">
                com nosso <span className="text-purple-600 font-bold">pacote completo</span> e exclusivo
              </p>
            </div>
            
            {/* Decorative elements around headline */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scale-up" delay={300}>
          <div className="relative">
            <Carousel
              plugins={[plugin.current]}
              opts={{ 
                loop: true, 
                align: "center",
                skipSnaps: false
              }}
              setApi={setApi}
              className="w-full max-w-5xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <div className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20 backdrop-blur-sm h-full flex flex-col justify-between min-h-[280px]`}>
                        <div>
                          <div className="text-6xl mb-6 text-center drop-shadow-lg">{feature.icon}</div>
                          <h3 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-md">{feature.title}</h3>
                          <p className="text-white/90 text-center drop-shadow-sm leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="mt-6 text-center">
                          <div className="w-12 h-1 bg-white/30 rounded-full mx-auto"></div>
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
                  className="static transform-none w-12 h-12 p-0 rounded-full bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                />
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === current 
                          ? 'bg-blue-600 scale-125 shadow-md' 
                          : 'bg-blue-300 hover:bg-blue-400 hover:scale-110'
                      }`}
                      aria-label={`Ir para o item ${index + 1}`}
                    />
                  ))}
                </div>

                <CarouselNext 
                  variant="outline" 
                  className="static transform-none w-12 h-12 p-0 rounded-full bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                />
              </div>
            </Carousel>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-blue-200">
              <span className="text-2xl">🎯</span>
              <p className="text-lg font-semibold text-blue-800">
                Tudo isso por apenas <span className="text-green-600 text-xl">R$10</span>!
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
