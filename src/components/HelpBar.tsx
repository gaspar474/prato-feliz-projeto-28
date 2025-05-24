
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const HelpBar = () => {
  return (
    <section className="py-3 px-4 bg-orange-400 text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-in">
          <div className="text-center">
            <p className="text-sm md:text-base font-medium">
              📞 Precisa de ajuda? Entre em contato: <a href="mailto:suporteplataformaplus@gmail.com" className="underline hover:no-underline">suporteplataformaplus@gmail.com</a>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
