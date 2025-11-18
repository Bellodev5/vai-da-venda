import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import {FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { Menu, X } from "lucide-react";

import logo from "../assets/logoV.png";

export default function Header() {

  const phone = '554789231650' 
  const message = `Olá! Visitei o site da VAI e gostaria de saber mais sobre a empresa!.`
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (

    

    <header
      className={`
        sticky top-0 z-40 transition duration-300 shadow-md
        ${isScrolled ? "backdrop-blur-xl bg-white/70" : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <div className="flex items-center space-x-8">
          <img src={logo} alt="Vai da Venda" className="w-10 h-10" />

          <nav className="hidden md:flex space-x-6 font-semibold text-gray-700">
            <Link className="hover:text-brand transition-all hover:-translate-y-[1px]" to="/">HOME</Link>
            <Link className="hover:text-brand transition-all hover:-translate-y-[1px]" to="/planos">PLANOS</Link>
            <Link className="hover:text-brand transition-all hover:-translate-y-[1px]" to="/faq">FAQ</Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-5 text-gray-700 text-[22px]">
          <a href="https://www.instagram.com/vaivendas/" target="_blank" className="hover:text-brand transition-all hover:scale-[1.05]">
            <FaInstagram />
          </a>
          <a href={whatsappUrl} target="_blank" className="hover:text-brand transition-all hover:scale-[1.05]">
            <FaWhatsapp />
          </a>
          <a href="https://www.youtube.com/@vaidavenda" target="_blank" className="hover:text-brand transition-all hover:scale-[1.05]">
            <FaYoutube />
          </a>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t shadow-sm">
          <nav className="flex flex-col px-6 py-4 space-y-4 font-semibold text-gray-700">
            <Link onClick={() => setMenuOpen(false)} className="hover:text-brand" to="/">HOME</Link>
            <Link onClick={() => setMenuOpen(false)} className="hover:text-brand" to="/planos">PLANOS</Link>
            <Link onClick={() => setMenuOpen(false)} className="hover:text-brand" to="/faq">FAQ</Link>

            <div className="flex items-center space-x-6 pt-2 text-[24px]">
              <a href="https://instagram.com" target="_blank" className="hover:text-brand transition">
                <AiFillInstagram />
              </a>
              <a href="https://wa.me/5547999999999" target="_blank" className="hover:text-brand transition">
                <IoLogoWhatsapp />
              </a>
              <a href="https://youtube.com" target="_blank" className="hover:text-brand transition">
                <BiLogoYoutube />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
