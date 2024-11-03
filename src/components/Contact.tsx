import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctenos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Estamos aquí para responder sus consultas
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg industrial-shadow p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8 bg-white rounded-lg industrial-shadow p-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Phone className="h-6 w-6 text-orange-500 mr-2" />
                Teléfono
              </h3>
              <p className="mt-2 text-gray-600">+54 9 11 3762-3694</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Mail className="h-6 w-6 text-orange-500 mr-2" />
                Email
              </h3>
              <p className="mt-2 text-gray-600">info@ipcensayos.com.ar</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                Ubicación
              </h3>
              <p className="mt-2 text-gray-600">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}