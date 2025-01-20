import { Button } from "../components";


import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, such as sending data to a server or performing client-side validation
    console.log('Form submitted:', { email, message });
    // Clear the form fields after submission
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact-us" className="max-container flex flex-col lg:flex-row justify-between items-center gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Contact Us
      </h3>
      <form onSubmit={handleSubmit} className="lg:max-w-[40%] w-full flex flex-col gap-5 p-6 bg-gray-100 rounded-lg">
        <label className="text-lg font-semibold" htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="input py-3 px-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-lg font-semibold" htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="Your Message" 
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        />
        <button type="submit" className="button bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-3 px-5 rounded-lg">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
