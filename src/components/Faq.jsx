import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: "Como a VAI funciona na prática?",
      answer: "A plataforma VAI funciona como um sistema de gerenciamento completo de várias contas de WhatsApp. Ela permite aos usuários acessar e interagir com suas contas de WhatsApp em um único local, realizar atendimentos, organizar conversas e categorizá-las com tags. A plataforma facilita o controle e a gestão eficiente de múltiplas contas de WhatsApp."
    },
    {
      question: "O que eu preciso de estrutura??",
      answer: "A estrutura necessária para utilizar a plataforma da VAI geralmente envolve: Um dispositivo (computador ou tablet) com acesso à internet. Contas de WhatsApp ativas que você deseja gerenciar na plataforma. Acesso da plataforma VAI por meio de uma conta de usuário, com as permissões necessárias"
    },

    {
      question: "Funciona em qual versão do WhatsApp?",
      answer: "Funciona perfeitamente no WhatsApp Business e WhatsApp normal, tanto no celular quanto no computador. A integração é simples e segura."
    },
    {
      question: "Posso testar antes de comprar?",
      answer: "Sim! Oferecemos 7 dias gratuitos para você testar todas as funcionalidades e ver os resultados na prática."
    },
    {
      question: "A VAI substitui o atendimento humano?",
      answer: "Não, ela complementa! A VAI cupla das perguntas frequentes e qualificação inicial, liberando sua equipe para focar nas vendas mais complexas e no relacionamento."
    },
    {
      question: "É seguro usar a VAI no meu WhatsApp?",
      answer: "Totalmente seguro! Não acessamos suas conversas pessoais e seguimos todas as normas de proteção de dados. Usamos API oficial do WhatsApp Business."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre como a VAI pode transformar suas vendas
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
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

        <div className="text-center mt-12 p-4 bg-gradient-to-r from-brand to-brand-dark rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
          <p className="text-white/90 mb-6">Fale diretamente com nosso time de especialistas</p>
          <a 
            href="#contato" 
            className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}