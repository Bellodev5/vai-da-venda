import React from 'react';
import URAimg from '../assets/URAimagem.jpg';
import { CheckCircle } from "lucide-react"

export default function URAFeature() {

  const check = <CheckCircle className="text-brand w-6 h-6 flex-shrink-0 mt-1" />
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Texto */}
        <div className="md:w-1/2 space-y-5">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
            A ferramenta da <span className="text-brand">VAI</span> traz URA, <br />
            <span className="text-brand">campanha de voz inteligente!</span>
          </h3>

          <p className="text-gray-600 text-lg">
            Chega de perder tempo com chamadas manuais!
            Com a URA Inteligente da VAI, cada ligação vira uma oportunidade real de venda.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-brand font-bold">{check}</span>
              Atendimento automático e humanizado — sua marca fala com o cliente 24h por dia.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand font-bold">{check}</span>
              Integração total com o WhatsApp — quem liga pode migrar direto para o chat com um clique.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand font-bold">{check}</span>
              Campanhas de voz persuasivas — áudios curtos com ótima notícia + oferta + ação imediata.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand font-bold">{check}</span>
              Relatórios e performance em tempo real — saiba quem ouviu, clicou e converteu.
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[320px] md:w-[480px] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
            <img 
              src={URAimg} 
              alt="URA Inteligente da VAI" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
