"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import products from './product';

const leftArrow = '/images/left.png';
const rightArrow = '/images/right.png';


const ProductCard = ({ product }) => {
  return (
      <div className="group relative border-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-500 bg-black">
          <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="h-auto w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {/* Overlay clickable area */}
          <a href={product.link} className="absolute inset-0 z-10" aria-label={`View ${product.name}`}></a>
          {/* Product Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <p className="text-sm">{product.name}</p>
              <p className="text-lg font-semibold">{product.price}</p>
          </div>
          {/* Add to Cart Button */}
          <button className="absolute bottom-0 right-0 m-4 bg-blue-500 text-white py-2 px-4 rounded">
              Add to Cart
          </button>
      </div>
  );
};

const ProductGrid = () => {
  const productsPerPage = 18;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const productsToDisplay = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const paginatedProducts = products.slice(productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-[#171717] mt-5">
      <div className="grid grid-cols-3 gap-4">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            } px-4 py-2 rounded-full mx-2 focus:outline-none`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;