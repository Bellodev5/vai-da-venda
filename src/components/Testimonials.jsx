import React from 'react'

const reviews = [
  { name:'Ana Souza', company:'Souza Roupas', avatar:'/assets/ava1.jpg', text:`"Antes demorávamos mais de 10 minutos..."` },
  { name:'Carlos Silva', company:'TechSolutions', avatar:'/assets/ava2.jpg', text:`"A implementação da Vai revolucionou..."` },
  { name:'Marina Oliveira', company:'BemEstar Saúde', avatar:'/assets/ava3.jpg', text:`"Com a Vai, conseguimos escalar..."` }
]

export default function Testimonials(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Resultados de quem confia e recomenda</h2>
        <p className="text-gray-500 mt-2">Empresas de diferentes setores já aumentaram vendas e produtividade com a Vai da Venda</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-card text-left">
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border-4 border-brand object-cover" />
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
          <a href="#contato" className="inline-block bg-brand text-white font-bold py-3 px-8 rounded-full shadow-card hover:shadow-glow transition">Quero vender mais agora</a>
        </div>
      </div>
    </section>
  )
}
