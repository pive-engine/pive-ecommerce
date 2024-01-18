"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const leftArrow = '/images/left.png';
const rightArrow = '/images/right.png';

const products = [
    {
        id: 1,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        imageUrl: "/images/t-shirt-1.avif",
        link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
    },
    {
        id: 2,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        imageUrl: "/images/bag-1-dark.avif",
        link: "https://demo.vercel.store/product/acme-drawstring-bag"
    },
    {
        id: 3,
        name: "Acme Cup",
        price: "$15.00 USD",
        imageUrl: "/images/cup-black.avif",
        link: "https://demo.vercel.store/product/acme-cup"
    },
    {
        id: 4,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        imageUrl: "/images/t-shirt-1.avif",
        link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
    },
    {
        id: 5,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        imageUrl: "/images/bag-1-dark.avif",
        link: "https://demo.vercel.store/product/acme-drawstring-bag"
    },
    {
        id: 6,
        name: "Acme Cup",
        price: "$15.00 USD",
        imageUrl: "/images/cup-black.avif",
        link: "https://demo.vercel.store/product/acme-cup"
    },
    {
        id: 7,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        imageUrl: "/images/t-shirt-1.avif",
        link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
    },
    {
        id: 8,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        imageUrl: "/images/bag-1-dark.avif",
        link: "https://demo.vercel.store/product/acme-drawstring-bag"
    },
    {
        id: 9,
        name: "Acme Cup",
        price: "$15.00 USD",
        imageUrl: "/images/cup-black.avif",
        link: "https://demo.vercel.store/product/acme-cup"
    },
    {
        id: 10,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        imageUrl: "/images/t-shirt-1.avif",
        link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt"
    },
    {
        id: 11,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        imageUrl: "/images/bag-1-dark.avif",
        link: "https://demo.vercel.store/product/acme-drawstring-bag"
    },
    {
        id: 12,
        name: "Acme Cup",
        price: "$15.00 USD",
        imageUrl: "/images/cup-black.avif",
        link: "https://demo.vercel.store/product/acme-cup"
    },

];

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
          <a href={product.link} className="absolute inset-0 z-10" aria-label={`View ${product.name}`}></a>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <p className="text-sm">{product.name}</p>
              <p className="text-lg font-semibold">{product.price}</p>
          </div>
          {/* Add to Cart Button */}
          <button className="absolute bottom-0 right-0 m-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Add to Cart
          </button>
      </div>
  );
};


const ProductGrid = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = products.length;
  const slidesToShow = 4;
  const productContainerRef = useRef(null);

  const nextSlide = () => {
    if (slideIndex < totalSlides - slidesToShow) {
      setSlideIndex(slideIndex + 1);
      productContainerRef.current.scrollLeft += productContainerRef.current.firstChild.offsetWidth;
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      productContainerRef.current.scrollLeft -= productContainerRef.current.firstChild.offsetWidth;
    }
  };

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-[#171717]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-bold">Najnowsze i najlepsze</h2>
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className="disabled:opacity-50"
          >
            <Image src={leftArrow} alt="Previous" width={50} height={50} />
          </button>
          <button
            onClick={nextSlide}
            disabled={slideIndex >= totalSlides - slidesToShow}
            className="disabled:opacity-50"
          >
            <Image src={rightArrow} alt="Next" width={50} height={50} />
          </button>
        </div>
      </div>
      <div 
        ref={productContainerRef}
        className="flex overflow-x-scroll scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map((product, index) => (
          <div 
            key={product.id} 
            style={{ scrollSnapAlign: 'start' }}
            className={`flex-none ${index < totalSlides - 1 ? 'mr-4' : ''}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
