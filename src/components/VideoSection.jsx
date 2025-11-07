import React from 'react'
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaFacebookMessenger } from 'react-icons/fa'

export default function VideoSection(){
  return (
    <section id="plataforma" className="relative py-20 bg-white overflow-hidden min-h-screen flex items-center">
      {/* PARTÍCULAS COM MAIS MOVIMENTO */}
      <div className="particles" aria-hidden>
        {/* Partículas com animações mais intensas */}
        <div className="absolute top-10 left-4 w-3 h-3 bg-orange-300 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute top-32 right-8 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-60 left-10 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-90"></div>
        <div className="absolute bottom-40 right-16 w-4 h-4 orange-300 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-80 right-32 w-3 h-3 bg-orange-300 rounded-full animate-bounce opacity-90"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
        
        {/* Partículas extras com movimento customizado */}
        <div className="absolute top-16 left-1/4 w-2 h-2 bg-brand rounded-full opacity-70 animate-float"></div>
        <div className="absolute bottom-24 right-1/4 w-2 h-2 bg-brand-dark rounded-full opacity-60 animate-floatSlow"></div>
      </div>

      {/* ÍCONES FLUTUANTES*/}
      <div className="absolute left-6 top-8 animate-floatSlow">
        <div className="floating-icon bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <FaWhatsapp size={32} className="text-green-500" />
        </div>
      </div>
      <div className="absolute right-10 top-6 animate-float" style={{animationDelay: '1.5s'}}>
        <div className="floating-icon bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <FaFacebookMessenger size={32} className="text-blue-500" />
        </div>
      </div>
      <div className="absolute left-8 bottom-12 animate-floatSlow" style={{animationDelay: '2s'}}>
        <div className="floating-icon bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <FaInstagram size={32} className="text-pink-500" />
        </div>
      </div>
      <div className="absolute right-6 bottom-10 animate-float" style={{animationDelay: '0.5s'}}>
        <div className="floating-icon bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <FaTelegramPlane size={32} className="text-sky-500" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Tudo que você precisa saber</h2>

        <div className="flex justify-center">
          <div className="w-[900px] max-w-full">
            <div className="bg-black rounded-xl overflow-hidden shadow-card">
              <div className="w-full aspect-[16/9]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nwmhPX_zwmo"
                  title="Video explicativo VAI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}