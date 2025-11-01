import React, { useState, useEffect } from 'react'

export default function Hero(){
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const platforms = ['WhatsApp', 'Instagram', 'Telegram', 'Facebook']

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % platforms.length
      const fullText = platforms[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, platforms])

  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        <div className="md:w-1/2">
          {/* Texto em linhas fixas */}
          <div className="text-4xl md:text-5xl font-extrabold leading-tight">
            <div>A VAI transforma o seu</div>
            <div className="h-[1.2em] flex items-center justify-center md:justify-start">
              <span className="text-brand relative">
                {text}
                {/* Barra piscante SEMPRE visível */}
                <span className="absolute -right-1 top-0 bottom-0 w-0.5 bg-brand animate-pulse"></span>
              </span>
              {/* Espaço reservado quando vazio */}
              {text === '' && <span className="invisible">WhatsApp</span>}
            </div>
            <div>em uma máquina de vendas com IA.</div>
          </div>
          
          <p className="mt-4 text-gray-600 text-lg">Atendimento inteligente, respostas em segundos e resultados que não dormem.</p>

          <div className="mt-8">
            <a href="#planos" className="inline-block btn-glow relative overflow-hidden">
              <span className="relative z-10">Quero ver na prática</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-[320px] md:w-[420px] rounded-xl overflow-hidden shadow-card">
            <img src="/assets/hero-woman.jpg" alt="Imagem humanizada" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}