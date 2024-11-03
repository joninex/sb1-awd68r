import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div id="inicio" className="hero-pattern text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=200&q=80"
              alt="Industrial Equipment"
              className="rounded-full border-4 border-orange-500 float-animation"
            />
          </div>
          <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl mb-6">
            <span className="block text-orange-500">IPC ENSAYOS SRL</span>
            <span className="block text-3xl mt-4">Innovación en Ensayos No Destructivos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl">
            Tecnología de punta al servicio de la industria argentina
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <a href="#servicios" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition duration-300">
                Explorar Servicios
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#contacto" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10 transition duration-300">
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-orange-500">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white text-center">Certificación Internacional</h3>
            <p className="mt-2 text-base text-gray-300 text-center">
              Personal altamente calificado y certificado
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-orange-500">
            <div className="flex justify-center">
              <Award className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white text-center">Excelencia Garantizada</h3>
            <p className="mt-2 text-base text-gray-300 text-center">
              Resultados precisos y confiables
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-orange-500">
            <div className="flex justify-center">
              <Clock className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white text-center">Experiencia Comprobada</h3>
            <p className="mt-2 text-base text-gray-300 text-center">
              Más de 25 años liderando la industria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}