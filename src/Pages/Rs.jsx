import React, { useState } from 'react';

function Rs() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    standingSouhaite: 'VIP',
    reservationPeriod: { start: '', end: '' },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      reservationPeriod: { ...formData.reservationPeriod, [name]: value },
    });
  };

  const standings = ['VIP', 'Standard', 'Classic'];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
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

          <div>
            <p className="text-gray-700 font-semibold mb-2">Période de Réservation</p>
            <div className="flex space-x-2">
              <input
                type="date"
                name="start"
                value={formData.reservationPeriod.start}
                onChange={handleDateChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Du"
              />
              <input
                type="date"
                name="end"
                value={formData.reservationPeriod.end}
                onChange={handleDateChange}
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

export default Rs;
