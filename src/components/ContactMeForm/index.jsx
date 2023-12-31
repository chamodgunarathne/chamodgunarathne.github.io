import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL
    const mailtoURL = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name)}`;

    // Open the default email client
    window.location.href = mailtoURL;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <label className="block mb-4">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Subject:</span>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Message:</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
