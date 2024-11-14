import React, { useState } from 'react';

function Resa() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    numberOfPlaces: '',
    autreService: [],
    standingSouhaite: 'VIP',
    reservationPeriod: { start: '', end: '' },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    const newServices = checked
      ? [...formData.autreService, value]
      : formData.autreService.filter((service) => service !== value);
    setFormData({ ...formData, autreService: newServices });
  };

  const services = [
    'DJ Animation',
    'Location de Chaises',
    'Location de Couvert',
    'Décoration',
    'Maître de Cérémonie',
    'Service Traiteur',
  ];

  const standings = ['VIP', 'Standard', 'Classic'];

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">RESERVER</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-gray-700">Numéro de Téléphone</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Votre numéro"
            />
          </div>

          <div>
            <label className="block text-gray-700">Nombre de Places</label>
            <input
              type="number"
              name="numberOfPlaces"
              value={formData.numberOfPlaces}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nombre de places"
            />
          </div>

          <div>
            <label className="block text-gray-700">Autre Service</label>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <label key={service} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={service}
                    checked={formData.autreService.includes(service)}
                    onChange={handleServiceChange}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Standing Souhaité</label>
            <select
              name="standingSouhaite"
              value={formData.standingSouhaite}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {standings.map((standing) => (
                <option key={standing} value={standing}>
                  {standing}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 font-semibold mb-2">Période de Réservation</p>
            <div className="flex space-x-2">
              <input
                type="date"
                name="start"
                value={formData.reservationPeriod.start}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reservationPeriod: { ...formData.reservationPeriod, start: e.target.value },
                  })
                }
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Du"
              />
              <input
                type="date"
                name="end"
                value={formData.reservationPeriod.end}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reservationPeriod: { ...formData.reservationPeriod, end: e.target.value },
                  })
                }
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Au"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Réserver
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resa;
