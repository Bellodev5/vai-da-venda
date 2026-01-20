import React from 'react'
import {FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import logoVAI from '../assets/logoVAI.png'

export default function Footer(){
  const phone = '554789231650' 
  const message = `Olá! Me interessei pela VAI e gostaria de saber mais sobre a plataforma.`
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  
  return (
    <footer className="bg-footerbg text-gray-300 py-12 px-6 md:px-20 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 border-b border-gray-700 pb-10">
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Contato</h2>
          <p className="font-bold text-white mb-3">VAI DA VENDA</p>
          
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-400">
              <strong className="text-gray-300">ENDEREÇO:</strong> Rua 242, 723 - Meia Praia, Itapema - SC
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-gray-300">CEP:</strong> 88.220-000
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-gray-300">Email:</strong> comercial@vaidavenda.com.br
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-gray-300">Telefone:</strong> (47) 8923-1650
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-gray-300">CNPJ:</strong> 52.165.389/0001-29
            </p>
          </div>

          <div className="flex space-x-4">
            <a href={whatsappUrl} className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
              <FaWhatsapp className="text-white" />
            </a>
            <a href="https://www.instagram.com/vaivendas/" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://www.youtube.com/@vaidavenda" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

        <div className="md:text-left">
          <div className="mb-4">
            <img src={logoVAI} alt="Vai da Venda" className="w-16 h-8" />
          </div>
          <p className="font-semibold text-white mb-3">
            Quando o assunto é automação e vendas, nós somos especialistas.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Conte com o time da Vai da Venda para criar estratégias e automações
            que realmente geram agendamentos, visitas e vendas para o seu negócio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Vai da Venda. Todos os direitos reservados.</p>
        <p className="mt-2">
          Desenvolvido por{' '}
          <a 
            href="https://github.com/Bellodev5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Guilherme Bello
          </a>
        </p>
      </div>
    </footer>
  )
}