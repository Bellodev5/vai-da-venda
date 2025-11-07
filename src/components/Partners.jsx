import React from 'react'

import ademicon from '../assets/ademicon.png'
import bwr from '../assets/bwr.png'
import c6 from '../assets/c6.png'
import claro from '../assets/claro.png'
import cogecom from '../assets/cogecom.png'
import consorcioKawasaki from '../assets/consorcioKawasaki.png'
import fg from '../assets/fg.png'
import msConnect from '../assets/msConnect.png'
import odontoCompany from '../assets/odontoCompany.png'
import odontoface from '../assets/odontoface.png'
import oi from '../assets/oi.png'
import prawer from '../assets/prawer.png'
import tim from '../assets/tim.png'
import vivaPark from '../assets/vivaPark.png'
import vivo from '../assets/vivo.png'

export default function Partners(){
  const partnerLogos = [
    { src: ademicon, name: 'Ademicon' },
    { src: bwr, name: 'BWR' },
    { src: c6, name: 'C6' },
    { src: claro, name: 'Claro' },
    { src: cogecom, name: 'Cogecom' },
    { src: consorcioKawasaki, name: 'Consorcio Kawasaki' },
    { src: fg, name: 'FG' },
    { src: msConnect, name: 'MS Connect' },
    { src: odontoCompany, name: 'Odonto Company' },
    { src: odontoface, name: 'Odonto Face' },
    { src: oi, name: 'Oi' },
    { src: prawer, name: 'Prawer' },
    { src: tim, name: 'Tim' },
    { src: vivaPark, name: 'Viva Park' },
    { src: vivo, name: 'Vivo' }
  ]

  return (
    <section className="py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center w-full">
        <h3 className="text-2xl font-bold text-gray-800">Parceiros de Confiança</h3>
        <p className='text-gray-500 mt-2 mb-12'>Empresas que usam e aprovam a plataforma da VAI</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="w-44 h-28 flex items-center justify-center opacity-65 hover:opacity-100 hover:scale-110 transition-all duration-300">
              <img 
                src={partner.src} 
                alt={`Parceiro ${partner.name}`} 
                className="max-h-20 max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
  
}