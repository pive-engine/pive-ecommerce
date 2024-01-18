"use client"
import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaFacebookF, FaTiktok, FaTelegramPlane } from 'react-icons/fa';

const companyInfo = {
  name: "ACME Inc.",
  vatId: "VAT ID: 123456789",
  regon: "REGON: 987654321",
  address: "123 Business Ave, Metropolis, CA 12345",
  phone: "+1 (123) 456-7890",
  email: "contact@acme.inc",
};

const Contact: React.FC = () => {
  // Define a function to handle phone link
  const handlePhoneClick = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  // Define a function to handle email link
  const handleEmailClick = () => {
    window.location.href = `mailto:${companyInfo.email}`;
  };

  return (
    <div className="contact-container grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      
      {/* Company Info and Contact */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold">{companyInfo.name}</h2>
        <p>{companyInfo.vatId}</p>
        <p>{companyInfo.regon}</p>
        <p>{companyInfo.address}</p>

        {/* Phone and Email */}
        <div className="flex items-center space-x-2">
          <FaPhone onClick={handlePhoneClick} />
          <span onClick={handlePhoneClick} className="cursor-pointer">{companyInfo.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope onClick={handleEmailClick} />
          <span onClick={handleEmailClick} className="cursor-pointer">{companyInfo.email}</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <FaInstagram className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
          <FaTelegramPlane className="cursor-pointer" />
        </div>
      </div>

      {/* Contact Form */}
      <form noValidate className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">Full name</label>
          <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea id="message" rows={3} className="w-full p-3 rounded dark:bg-gray-800"></textarea>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
