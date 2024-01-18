// Updated categories with store-related aspects and legal information
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/search' },
  { name: 'About', path: '/about' },
  { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  { name: 'Shipping & Return Policy', path: '/shipping-and-return-policy' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Contact', path: '/contact' },

  // Add more categories as needed
];

const SideBarCategoryLeft = () => {
  const router = useRouter();

  const handleCategoryClick = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-[#171717] text-white w-64 space-y-3 p-5">
      <div className="text-lg font-bold">Information</div>
      {categories.map((category) => (
        <div
          key={category.name}
          className="transition-colors hover:text-gray-300 cursor-pointer"
          onClick={() => handleCategoryClick(category.path)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default SideBarCategoryLeft;
