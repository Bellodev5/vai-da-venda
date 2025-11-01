import React from 'react'
import { MdAutoGraph, MdPublic, MdCampaign, MdDashboard, MdAccessTime, MdBolt } from 'react-icons/md'

const items = [
  { icon: <MdAutoGraph size={28} />, title: 'IA Progressiva', text: 'A cada interação, ela aprende e melhora a comunicação.' },
  { icon: <MdPublic size={28} />, title: 'Múltiplas Redes', text: 'WhatsApp, Telegram, Instagram, Facebook (API oficial).' },
  { icon: <MdCampaign size={28} />, title: 'Campanhas de Voz Inteligentes', text: 'Ligações automatizadas com vozes humanizadas.' },
  { icon: <MdDashboard size={28} />, title: 'Plataforma Completa', text: 'Gerencie atendimentos, usuários e métricas em um só lugar.' },
  { icon: <MdAccessTime size={28} />, title: '24/7', text: 'Venda enquanto dorme — IA responde, negocia e fecha.' },
  { icon: <MdBolt size={28} />, title: 'Resultados Reais', text: '+80% de eficiência no atendimento e +30% de conversões em vendas ' }
]

export default function Advantages(){
  return (
    <section id="vantagens" className="min-h-screen flex items-center py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">Porque escolher a VAI?</h2>
        <p className="text-gray-500 mt-2">Soluções pensadas para escalar suas vendas com automação e inteligência.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-soft text-left flex gap-4 items-start">
              <div className="text-brand bg-brand/10 p-3 rounded-lg">{it.icon}</div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{it.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#planos" className="btn-glow">Quero ver como a VAI faz tudo isso na prática</a>
        </div>
      </div>
    </section>
  )
}
