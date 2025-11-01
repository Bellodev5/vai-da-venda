import React from 'react'

export default function URAFeature(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold">A ferramenta da VAI traz URA, campanha de voz inteligente!</h3>
          <p className="mt-3 text-gray-600">[Subtítulo/copy a definir]</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">imagem relacionada à plataforma</span>
          </div>
        </div>
      </div>
    </section>
  )
}
