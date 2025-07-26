'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800'], // ExtraBold (podés probar con 700 también)
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    //Sticky en el navbar y static en el PC para que el navbar se mantenga en la parte superior de la pantalla y no se mueva cuando se hace scroll 
    <nav className="sticky top-0 z-50 bg-[#181818] shadow-lg lg:static">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 relative">
          {/* Logo + Nombre */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logoleorojo.png"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 scale-x-[-1]"
              />
              <span className={`${montserrat.className} text-white text-xl md:text-2xl font-bold tracking-wide`}>
                LUCA MORIS
              </span>

            </Link>
          </div>


          {/* Botón menú móvil - visible solo en móvil */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              // Original: className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menú escritorio - visible solo en PC */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Original: className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-blue-50 hover:scale-105" */}
            <a href="#inicio" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-red-100">Inicio</a>
            <a href="#cambios-fisicos" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-red-100">Cambios Físicos</a>
            <a href="#testimonios" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-red-100">Comentarios</a>
            {/*
            <a href="#acerca" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-red-100">Acerca de mi</a>
              */}
            <a href="#asesorias" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-red-100">Asesorias</a>
            <a href="#contacto" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-red-100">Contacto</a>
          </div>
        </div>
      </div>

      {/* Menú visible solo en móvil */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="w-full bg-white shadow-md">
          {[
            { href: '#inicio', label: 'HOME' },
            { href: '/asesorias', label: 'ASESORÍAS' },
            { href: '#contacto', label: 'CONTACTO' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveSection(item.href);
                setIsMenuOpen(false);
              }}
              className={`block w-full px-6 py-4 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 bg-[#f2f2f2] ${activeSection === item.href
                  ? 'text-red-600'
                  : 'text-black hover:text-red-600'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
