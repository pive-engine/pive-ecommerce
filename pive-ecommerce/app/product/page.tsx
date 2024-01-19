// page.tsx
import React from 'react';
import ProductCard from '@/components/product/ProductCard/productCard';
import RelatedProduct from '@/components/product/RelatedProduct/relatedProduct';

const product = {
  id: 1,
  name: "Acme Circles T-Shirt",
  price: "$20.00 USD",
  imageUrl: "/images/t-shirt-1.avif", // Replace with your image path
  link: "https://demo.vercel.store/product/acme-geometric-circles-tshirt",
  category: 'shirts',
  isSale: true,
  salePrice: "$10.00 USD",
  newProduct: true
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* You might want to put a container or a similar wrapper here */}
      <ProductCard {...product} />
      <RelatedProduct />
      {/* Rest of the page content */}
    </div>
  );
};

export default Page;
