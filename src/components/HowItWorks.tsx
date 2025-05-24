
import { Smartphone, Download, Shield } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            COMO FUNCIONA
          </h2>
          <p className="text-xl text-gray-700">
            Acesse Suas Receitas
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Tenha acesso imediato às receitas na área exclusiva de membros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <Smartphone className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Área de Membros Online</h3>
            <p className="text-gray-600 mb-6">
              Acesse todas as receitas em vídeo e texto diretamente no seu dispositivo.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-2">Prato Feliz - Área de Membros</div>
              <div className="text-lg font-bold text-gray-800 mb-3">Minhas Receitas</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Panquecas com Morango</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Bolinho de Brócolis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <Download className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">eBook para Download</h3>
            <p className="text-gray-600 mb-6">
              Baixe todas as receitas em PDF e tenha-as sempre à mão, mesmo sem internet.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">Acesso garantido por pelo menos 3 anos</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">PDF baixável</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">Vídeos explicativos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
