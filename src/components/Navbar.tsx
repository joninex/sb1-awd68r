import React from 'react';
import { Menu, X, Activity } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md fixed w-full z-50 border-b border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-white">IPC ENSAYOS SRL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-orange-500 transition duration-300">Inicio</a>
            <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition duration-300">Servicios</a>
            <a href="#clientes" className="text-gray-300 hover:text-orange-500 transition duration-300">Clientes</a>
            <a href="#contacto" className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition duration-300">
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition duration-300">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition duration-300">Servicios</a>
            <a href="#clientes" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition duration-300">Clientes</a>
            <a href="#contacto" className="block px-3 py-2 text-orange-500 font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}