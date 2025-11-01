import React from 'react'

const plans = [
  { name: 'Básico', price: 'R$ 97', features: ['Até 500 mensagens/mês','1 usuário','Integração WhatsApp','Respostas automáticas','Relatórios básicos'], popular:false },
  { name: 'Profissional', price: 'R$ 197', features: ['Até 2.000 mensagens/mês','3 usuários','Integração WhatsApp','Respostas automáticas','Relatórios avançados','Atendimento humano'], popular:true },
  { name: 'Empresarial', price: 'R$ 497', features: ['Mensagens ilimitadas','10 usuários','Integração WhatsApp','Respostas automáticas','Relatórios completos','Atendimento humano','API personalizada'], popular:false }
]

export default function Plans(){
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Nossos Planos</h2>
        <p className="text-gray-500 mt-2">Encontre o plano perfeito para suas necessidades. Comece pequeno e escale conforme seu negócio cresce.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`bg-white rounded-xl p-6 border ${p.popular ? 'border-brand shadow-glow scale-100 transform' : 'border-gray-100'} hover:shadow-card transition transform hover:-translate-y-1`}>
              {p.popular && <div className="inline-block bg-brand text-white px-3 py-1 rounded-full text-xs mb-3">Mais Popular</div>}
              <h3 className="font-bold text-xl">{p.name}</h3>
              <div className="mt-4 text-3xl font-extrabold text-brand">{p.price}<span className="text-base text-gray-500 font-medium">/por mês</span></div>
              <ul className="mt-6 space-y-2 text-gray-600">
                {p.features.map((f, idx)=> <li key={idx}>• {f}</li>)}
              </ul>
              <div className="mt-6">
                <button className={`w-full py-3 rounded-md ${p.popular ? 'bg-brand text-white' : 'border border-brand text-brand'} hover:brightness-105 transition`}>
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="/planos" className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-full shadow-card hover:shadow-glow transition">EXPLORAR MAIS</a>
        </div>
      </div>
    </section>
  )
}
