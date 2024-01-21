import Image from 'next/image';

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
];

const ProductCard = ({ product, className }) => {
    return (
        <div className={`group relative ${className} border-2 border-transparent hover:border-blue-500 transition-all ease-in-out duration-500 bg-black mb-5`}>
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
    return (
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="grid grid-cols-3 gap-4">
          <ProductCard key={products[0].id} product={products[0]} className="col-span-2 row-span-2" />
          {products.slice(1).map((product, index) => (
            <ProductCard key={product.id} product={product} className={`col-span-1 ${index % 2 === 0 ? 'row-span-1' : 'row-span-1'}`} />
          ))}
        </div>
      </div>
    );
};

  

export default ProductGrid;