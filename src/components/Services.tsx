import React from 'react';
import { Search, Gauge, Thermometer } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-orange-500" />,
      title: 'Ensayos No Destructivos',
      description: 'Inspecciones de alta precisión sin afectar la integridad del material.',
      features: ['Ultrasonido', 'Radiografía Industrial', 'Líquidos Penetrantes', 'Partículas Magnéticas']
    },
    {
      icon: <Gauge className="h-12 w-12 text-orange-500" />,
      title: 'Servicios de Inspección',
      description: 'Control exhaustivo de equipos e instalaciones industriales.',
      features: ['Calderas', 'Gasoductos', 'Oleoductos', 'Tanques de Almacenamiento']
    },
    {
      icon: <Thermometer className="h-12 w-12 text-orange-500" />,
      title: 'Tratamientos Térmicos',
      description: 'Mejora de propiedades mecánicas en materiales.',
      features: ['Alivio de Tensiones', 'Temple', 'Revenido', 'Normalizado']
    }
  ];

  return (
    <div id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Soluciones integrales para la industria con los más altos estándares de calidad
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-lg industrial-shadow overflow-hidden transform transition duration-300 group-hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}