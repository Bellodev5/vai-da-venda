import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoV.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-nav-soft sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Vai da Venda" className="w-10 h-10" />
        </div>

        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-brand">
            HOME
          </Link>
          <Link to="/planos" className="hover:text-brand">
            PLANOS
          </Link>
          <Link to="/faq" className="hover:text-brand">
            FAQ
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4 font-semibold">
            <Link
              to="/"
              className="hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/planos"
              className="hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              PLANOS
            </Link>
            <Link
              to="/faq"
              className="hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
