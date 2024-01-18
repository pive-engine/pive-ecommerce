// navbar/index.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar'; // Assuming SearchBar is in the same directory
import TopBar from '../navbar/TopBar'; 
import ShoppingCartIcon from './ShoppingCartIcon';
import BottomTopCarousel from './BottomTopCarousel';
import CartModal from '../../cart/CartModal/CartModal';

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    console.log("Cart toggle button clicked");
    setCartOpen(!isCartOpen);
  };
  

  return (
    <>
      <TopBar />
      <nav className="bg-[#171717] text-white flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <span className="hidden lg:block text-xl ml-2 cursor-pointer">ACME STORE</span>
          </Link>
          <div className="hidden md:flex space-x-4 ml-6">
            <Link href="/search">All</Link>
            <Link href="/shirts">Shirts</Link>
            <Link href="/stickers">Stickers</Link>
          </div>
        </div>
        <SearchBar />
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {/* Menu icon here */}
          </button>
          <div className="flex items-center mr-[10px]">
            <div className="ml-4 cursor-pointer" onClick={toggleCart}>
              <ShoppingCartIcon />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black p-4 md:hidden">
            <Link href="/all">All</Link>
            <Link href="/shirts">Shirts</Link>
            <Link href="/stickers">Stickers</Link>
          </div>
        )}
      </nav>
      <BottomTopCarousel />
      <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Navbar;
