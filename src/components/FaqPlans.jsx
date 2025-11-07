import React, { useState } from 'react'

export default function FAQPlans(){
  const [openIndex, setOpenIndex] = useState(null)

  const faqItemsPlans = [
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Aceitamos cartão de crédito, PIX e boleto bancário. Pagamentos via cartão têm ativação imediata."
    },
    {
      question: "Posso alterar meu plano depois?",
      answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento diretamente pela sua conta."
    },
    {
      question: "O pagamento é recorrente?",
      answer: "Sim, os planos são cobrados mensalmente de forma automática, mas você pode cancelar quando quiser, sem taxas."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq-planos" className="py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dúvidas sobre Pagamentos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja as perguntas mais comuns sobre nossos planos e formas de pagamento
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItemsPlans.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 text-lg group-hover:text-brand transition-colors">
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-300 text-gray-400 ${openIndex === index ? 'rotate-180 text-brand' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 animate-slideDown">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}