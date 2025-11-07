import { CheckCircle } from "lucide-react"

export default function FeaturesBoard() {
  const features = [
    { name: "Automação com IA" },
    { name: "Agendamento de disparo de mensagens" },
    { name: "Sistema de cobrança por agendamento" },
    { name: "Sistema de pré-atendimento" },
    { name: "Atendimento ao cliente" },
    { name: "Sistema de vendas por IA" },
    { name: "Dashboard" },
    { name: "Fluxo de chatbot" },
    { name: "X contas de atendentes conectados" },
    { name: "Sistema integrado em: Instagram, Facebook, Telegram, WhatsApp, API Oficial do WhatsApp" },
    { name: "Conversas salvas mesmo que qualquer pessoa apague a mensagem" },
    { name: "Notas: crie notas/lembretes dentro da conversa com o cliente" },
    { name: "Espiar: visualize conversas sem entrar nelas" },
    { name: "Etiquetas: identifique facilmente seus clientes" },
    { name: "3 áreas de mensagens: bot atendendo, suporte dirigindo, conversa resolvida" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que sua operação precisa — em um só lugar
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A VAI reúne automação, atendimento, e inteligência artificial em uma plataforma completa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <CheckCircle className="text-brand w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-800 font-medium leading-relaxed">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
