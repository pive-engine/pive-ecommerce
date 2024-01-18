// SideBarProductsFilterRight.tsx
const categories = [
    'Relevance', 'Trending', 'Latest arrivals', 'Price: Low to high', 'Price: High to low'
  ];
  
  const SideBarCategoryLeft = () => {
    return (
      <div className="bg-[171717] text-white w-64 space-y-3 p-5">
      <div className="text-lg font-bold">Sort by</div>
      {categories.map((category) => (
      <div key={category} className="transition-colors hover:text-gray-300 cursor-pointer">
      {category}
      </div>
      ))}
      </div>
      );
      };
      
      export default SideBarCategoryLeft;
  
  