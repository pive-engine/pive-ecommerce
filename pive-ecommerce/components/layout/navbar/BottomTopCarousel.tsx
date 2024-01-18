// BottomTopCarousel.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const promotions = [
  { 
    text: 'Produkty na zimę', 
    subtext: 'Przygotuj się na zimne i deszczowe dni Przeglądaj', 
    link: '/winter-products'
  },
  { 
    text: 'Nowy rok, nowe produkty 🔥', 
    subtext: 'Przeglądaj', 
    link: '/new-year-products'
  },
  { 
    text: 'Rabaty do 50%', 
    subtext: 'Trwa wyprzedaż na koniec sezonu. Oferta obowiązuje do 1.02.2024 do 9:00 czasu CET. Przeglądaj',
    link: '/sale'
  },
  // ... other promotions
];

const BottomTopCarousel: React.FC = () => {
  const [activePromotion, setActivePromotion] = useState(0);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(true);
      setTimeout(() => {
        setActivePromotion((current) => (current + 1) % promotions.length);
        setSlideOut(false);
      }, 500); // Start sliding in the next promotion after 500ms
    }, 5500); // Change promotion every 5.5 seconds to account for slide out animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#171717] py-2 text-center overflow-hidden border-t border-b border-gray-600">
      <Link href={promotions[activePromotion].link} passHref>
        <div className={`cursor-pointer block transform transition-transform ${slideOut ? '-translate-x-full' : 'translate-x-0'}`}>
          <p className="font-semibold">{promotions[activePromotion].text}</p>
          <p className="text-sm">{promotions[activePromotion].subtext}</p>
        </div>
      </Link>
    </div>
  );
};

export default BottomTopCarousel;
