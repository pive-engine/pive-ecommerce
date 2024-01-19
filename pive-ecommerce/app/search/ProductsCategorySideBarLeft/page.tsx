"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

// Zdefiniowanie kategorii wraz ze ścieżkami
const categories = [
  { name: 'All', path: '/search' },
  { name: 'Bags', path: '/search/bags' },
  { name: 'Drinkware', path: '/search/drinkware' },
  { name: 'Electronics', path: '/search/electronics' },
  { name: 'Footware', path: '/search/footware' },
  { name: 'Headwear', path: '/search/headwear' },
  { name: 'Hoodies', path: '/search/hoodies' },
  { name: 'Jackets', path: '/search/jackets' },
  { name: 'Kids', path: '/search/kids' },
  { name: 'Pets', path: '/search/pets' },
  { name: 'Shirts', path: '/search/shirts' },
  { name: 'Stickers', path: '/search/stickers' },
];

const SideBarCategoryLeft = () => {
  const router = useRouter();

  const handleCategoryClick = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-[#171717] text-white w-64 space-y-3 p-5">
      <div className="text-lg font-bold">Categories</div>
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