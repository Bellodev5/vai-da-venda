import React from 'react'
import {FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import logoVAI from '../assets/logoVAI.png'
export default function Footer(){
  return (
    <footer className="bg-footerbg text-gray-300 py-12 px-6 md:px-20 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
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

        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Vai da Venda</h2>
          <p className="text-sm text-gray-400">CNPJ:52.165.389/0001-29</p>
          <p className="text-sm text-gray-400 ">Vai da Venda © {new Date().getFullYear()}</p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Fale conosco</h2>
          <a href="mailto:scomercial@vaidavenda.com.br" className="text-sm text-gray-400 hover:text-white block mb-4">
            comercial@vaidavenda.com.br
          </a>

          <div className="flex space-x-4">
            <a href="https://wa.me/554789231650?text=Olá! Gostaria de mais informações sobre a VAI." className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaWhatsapp className="text-white" />
            </a>
            <a href="https://www.instagram.com/vaivendas/" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://www.youtube.com/@vaidavenda" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full">
              <FaYoutube className="text-white" />
            </a>
        
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Vai da Venda. Todos os direitos reservados.</p>
        
      </div>
    </footer>
  )
}
