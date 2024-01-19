// ProductCard.tsx
import React from 'react';

type ProductCardProps = {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  link: string;
  category: string;
  isSale: boolean;
  salePrice: string;
  newProduct: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  link,
  isSale,
  salePrice,
  newProduct,
}) => {
  // Color and size options would be dynamic in a real application
  const colorOptions = ['Black', 'White', 'Blue'];
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <div className="flex bg-black text-white">
      {/* Image section */}
      <img src={imageUrl} alt={name} className="w-1/2 h-auto object-contain bg-black" />

      {/* Details section */}
      <div className="p-8 space-y-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-xl font-semibold">{price}</p>
        <div>
          <h3 className="font-semibold">COLOR</h3>
          <div className="flex mt-2">
            {colorOptions.map((color) => (
              <button
                key={color}
                className={`border-2 border-white rounded-full w-6 h-6 focus:outline-none ${color === 'Blue' && 'bg-blue-500'}`}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold">SIZE</h3>
          <div className="flex mt-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                className="border-2 border-white rounded-md px-3 py-1 focus:outline-none"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm">60% combed ringspun cotton/40% polyester jersey tee.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
