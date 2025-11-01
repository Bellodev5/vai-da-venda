import React from 'react'
import logo from '../assets/logoV.png'; 
export default function Header(){
  return (
    <header className="bg-white shadow-nav-soft sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Vai da Venda" className="w-10 h-10" />
        </div>

        <nav className="space-x-6 hidden md:flex font-semibold ">
          <a href="#vantagens" className="hover:text-brand">VANTAGENS</a>
          <a href="#planos" className="hover:text-brand">PLANOS</a>
          <a href="#plataforma" className="hover:text-brand">PLATAFORMA</a>
          <a href="#faq" className="hover:text-brand">FAQ</a>
        </nav>

      </div>
    </header>
  )
}
