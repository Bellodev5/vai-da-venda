import React from 'react'

export default function HeroPlans() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f8fafd] to-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Planos que se adaptam ao seu negócio
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10">
          Escolha a solução ideal para impulsionar suas vendas e melhorar o atendimento
          ao cliente.
        </p>
        <button className="bg-[#ff5a1f] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300">
          Experimente Grátis por 14 Dias
        </button>
      </div>
    </section>
  );
}