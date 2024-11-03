import React from 'react';

export default function Clients() {
  const clients = [
    {
      name: 'ARAUCO',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      testimonial: 'IPC Ensayos ha sido fundamental en nuestros procesos de control de calidad.'
    },
    {
      name: 'Ingenio Ledesma',
      logo: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      testimonial: 'Su profesionalismo y experiencia nos brindan la confianza que necesitamos.'
    },
    {
      name: 'Montes del Plata',
      logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      testimonial: 'Servicios de primera calidad con resultados consistentes y confiables.'
    }
  ];

  return (
    <div id="clientes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Clientes que Confían en Nosotros
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Empresas líderes que avalan nuestra trayectoria y profesionalismo
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  className="h-20 w-full object-contain mb-6"
                  src={client.logo}
                  alt={`${client.name} logo`}
                />
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-center italic">
                  "{client.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}