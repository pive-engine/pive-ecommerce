"use client"
import React, { useState } from 'react';

type FormData = {
  emailOrPhone: string;
  subscribe: boolean;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
};

export default function Checkout() {
  const [formData, setFormData] = useState<FormData>({
    emailOrPhone: '',
    subscribe: false,
    country: 'United States',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Place your form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 p-4 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Section */}
              <div>
                <label htmlFor="emailOrPhone" className="block text-sm font-medium">
                  Email or mobile phone number
                </label>
                <input
                  type="text"
                  name="emailOrPhone"
                  id="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-600 focus:ring-blue-500 rounded"
                />
                <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-400">
                  Email me with news and offers
                </label>
              </div>

              {/* Shipping Address Section */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium">
                    Country/Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="block w-full border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    {/* Populate with actual country options */}
                    <option>United States</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name (optional)"
                    className="border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="col-span-2 border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="ZIP code"
                    className="border border-gray-600 bg-gray-800 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Continue to shipping
              </button>
            </form>
          </div>
          <div className="lg:w-2/5 p-4">
            <div className="border border-gray-600 rounded-md p-4">
              {/* Order Summary */}
              <div className="flex justify-between mb-4">
                <span className="text-lg font-medium">Acme Circles T-Shirt</span>
                <span>$30.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>$30.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t border-gray-600 pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>USD $30.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
