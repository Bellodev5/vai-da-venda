import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 97',
    accounts: '1 Conta de WhatsApp',
    features: [
      'IA Progressiva',
      'Múltiplas redes (Instagram, Facebook e WhatsApp)',
      'Disparo e agendamento de mensagens',
      'Histórico permanente e gestão de contato',
      'Atendimento 24h / 7 dias por semana'
    ],
    popular: false
  },
  {
    name: 'Avançado',
    price: 'R$ 197',
    accounts: '5 Contas de WhatsApp',
    features: [
      'IA Progressiva',
      'Múltiplas redes (Instagram, Facebook e WhatsApp)',
      'Disparo e agendamento de mensagens',
      'Histórico permanente e gestão de contato',
      'Atendimento 24h / 7 dias por semana'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'R$ 297',
    accounts: '10 Contas de WhatsApp',
    features: [
      'IA Progressiva',
      'Múltiplas redes (Instagram, Facebook e WhatsApp)',
      'Disparo e agendamento de mensagens',
      'Histórico permanente e gestão de contato',
      'Atendimento 24h / 7 dias por semana'
    ],
    popular: false
  }
]

export default function Plans() {
  const phone = '554789231650' 

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Nossos Planos</h2>
        <p className="text-gray-600 mt-3 text-lg">Escolha o plano ideal e leve suas vendas para o próximo nível.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => {
            const message = `Olá! Me interessei pelo plano ${p.name} (${p.accounts}) e gostaria de saber mais.`
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
            
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border shadow-sm transition transform hover:-translate-y-2 hover:shadow-lg ${
                  p.popular
                    ? 'border-brand bg-gradient-to-b from-brand/10 to-white scale-105 shadow-glow'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Mais Popular
                  </div>
                )}
                <h3 className="font-bold text-2xl text-gray-900">{p.name}</h3>
                <div className="mt-3 text-3xl font-extrabold text-brand">
                  {p.price}
                  <span className="text-base text-gray-500 font-medium">/mês</span>
                </div>
                <p className="mt-2 text-gray-700 font-medium">{p.accounts}</p>

                <ul className="mt-6 space-y-3 text-gray-600 text-left">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-md font-semibold text-center transition ${
                      p.popular
                        ? 'bg-brand text-white hover:brightness-110'
                        : 'border border-brand text-brand hover:bg-brand hover:text-white'
                    }`}
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      
      </div>
    </section>
  )
}
