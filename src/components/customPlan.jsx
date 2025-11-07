import React from "react";
import { MessageCircle } from "lucide-react";

export default function CustomPlanCTA() {
  const phone = "554789231650";
  const whatsappUrl = `https://wa.me/${phone}?text=Quero um plano personalizado da VAI para a minha empresa 👋`;

  return (
    <section className="relative py-24 min-h-[80vh] flex items-center bg-gradient-to-r from-brand to-brand/80 text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')] opacity-10"></div>

      <div className="relative max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight drop-shadow-sm">
          Não encontrou um plano que se encaixa no seu negócio?
        </h2>

        <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
          Temos um plano <span className="font-semibold">personalizado sob medida</span> para o seu modelo de vendas e atendimento.  
          Fale agora com um especialista e descubra como a{" "}
          <span className="font-bold">VAI</span> pode automatizar o seu sucesso!
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-brand font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
