import React, { useState } from 'react';
import axios from 'axios';
import contactBg from '../assets/contact_coffee.png'; // Asegúrate de que la ruta sea correcta

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/contact/', formData);
      console.log('Form submitted successfully', response.data);
      // Resetear el formulario o mostrar mensaje de éxito
    } catch (error) {
      console.error('Failed to submit form', error);
      // Manejar errores o mostrar mensaje de error
    }
  };

  return (
    <div className="banner-style" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-white mb-8">
            Contact us for more information or any inquiries.
          </p>
        </div>
        <div className="flex-1">
          <form className="bg-white/10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg opacity-90" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" rows="3" placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-[#6b4e3d] hover:bg-[#533927] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
