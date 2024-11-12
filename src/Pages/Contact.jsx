import React, { useState } from 'react';


const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    object: '',
    message: ''
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen">

      <div className="bg-blue-600 text-white text-center py-24">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <div className="text-center py-12">
        <h2 className="text-3xl text-blue-600 font-semibold">Join Evena</h2>
        <p className="text-lg text-gray-600 mt-4">Feel free to contact us and send your preoccupation through this form.</p>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="object" className="block text-gray-700 font-semibold">Object</label>
              <input
                type="text"
                id="object"
                name="object"
                value={formData.object}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
