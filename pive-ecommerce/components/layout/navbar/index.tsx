"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SearchBox from '@/components/layout/navbar/SearchBar'; // Assuming SearchBar is in the same directory
import TopBar from '../navbar/TopBar';
import ShoppingCartIcon from './ShoppingCartIcon';
import BottomTopCarousel from './BottomTopCarousel';
import CartModal from '../../cart/CartModal/CartModal';
import products from '@/constants/products/products';

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.length === 0) {
      setSearchResults([]);
    } else {
      const matchedProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(matchedProducts);
    }
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
            <Link href="/new-and-featured">New & Featured</Link>
            <Link href="/sale">Sale</Link>
          </div>
        </div>
        <div ref={searchRef}>
          <SearchBox onSearch={handleSearch} />
          {/* Dropdown for search results */}
          {searchResults.length > 0 && (
            <div className="search-results-dropdown absolute bg-white shadow-lg max-h-60 overflow-y-auto z-10 w-full border border-gray-500 rounded-md mt-1 text-black">
              {searchResults.map((product) => (
                <div key={product.id} className="p-2 hover:bg-gray-100">
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>
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
            <Link href="/search">All</Link>
            <Link href="/new-and-featured">New & Featured</Link>
            <Link href="/sale">Sale</Link>
          </div>
        )}
      </nav>
      <BottomTopCarousel />
      {isCartOpen && <CartModal onClose={toggleCart} />}
    </>
  );
};

export default Navbar;
