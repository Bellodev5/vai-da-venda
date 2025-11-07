import React from 'react'

const reviews = [
  { name:'Ademicon', company:'Consórcios', avatar:'src/assets/ademicon.png', text:`"Minhas vendas subiram muito após a automação. A Vai da Venda cuidou de tudo e acompanhou os resultados. Agora respondo leads em segundos e não perco mais oportunidades"` },
  { name:'FG Empreendimentos', company:'Imobiliária', avatar:'src/assets/fg.png', text:`"A automação otimizou nosso funil. Agora nossa equipe fecha mais sem precisar trabalhar horas extras. O melhor investimento que fizemos este ano!"` },
  { name:'OI', company:'Telecom', avatar:'src/assets/oi.png', text:`"Operamos com mais eficiência e conquistamos clientes que antes desistiam por falta de resposta rápida. A Vai da Venda revolucionou nosso atendimento!"` }
]

export default function Testimonials(){
  const phone = "554789231650";
  const message = `Olá! Gostaria de vender mais agora com a ajuda da VAI!`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Resultados de quem confia e recomenda</h2>
        <p className="text-gray-500 mt-2">Empresas de diferentes setores já aumentaram vendas e produtividade com a Vai da Venda</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-card text-left">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden border-2 border-brand bg-white">
                  <img src={r.avatar} alt={r.name} className="w-14 h-14 object-contain" />
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-brand">{r.company}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-500 italic border-l-4 border-gray-100 pl-4">{r.text}</blockquote>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href={whatsappUrl} className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-full shadow-card hover:shadow-glow transition">
            Quero vender mais agora
          </a>
        </div>
      </div>
    </section>
  )
}
