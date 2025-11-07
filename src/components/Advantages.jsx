import React from 'react'
import { MdAutoGraph, MdPublic, MdCampaign, MdDashboard, MdAccessTime, MdBolt } from 'react-icons/md'

const items = [
  { icon: <MdAutoGraph size={36} />, title: 'IA Progressiva', text: 'A cada interação, ela aprende e melhora a comunicação.' },
  { icon: <MdPublic size={36} />, title: 'Múltiplas Redes', text: 'WhatsApp, Telegram, Instagram, Facebook (API oficial).' },
  { icon: <MdCampaign size={36} />, title: 'Campanhas de Voz Inteligentes', text: 'Ligações automatizadas com vozes humanizadas.' },
  { icon: <MdDashboard size={36} />, title: 'Plataforma Completa', text: 'Gerencie atendimentos, usuários e métricas em um só lugar.' },
  { icon: <MdAccessTime size={36} />, title: '24/7', text: 'Venda enquanto dorme — IA responde, negocia e fecha.' },
  { icon: <MdBolt size={36} />, title: 'Resultados Reais', text: '+80% de eficiência no atendimento e +30% de conversões em vendas.' }
]

export default function Advantages() {
  return (
    <section id="vantagens" className="min-h-[90vh] flex items-center py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Por que escolher a <span className="text-brand">VAI</span>?
        </h2>
        <p className="text-gray-600 mt-3 text-lg md:text-xl">
          Soluções criadas para escalar suas vendas com automação e inteligência real.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-soft text-left flex gap-5 items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-brand bg-brand/10 p-4 rounded-xl flex-shrink-0">
                {it.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{it.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#planos"
            className="btn-glow text-lg px-8 py-4 font-semibold rounded-full"
          >
            Quero saber mais
          </a>
        </div>
      </div>
    </section>
  )
}
