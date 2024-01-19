import React from 'react';
import ProductsCenter from '@/app/search/ProductsCenter/page';
import SideBarCategoryLeft from './ProductsCategorySideBarLeft/page';
import SideBarProductsFilterRight from './SideBarProductsFilterRight/page';
import products from '@/constants/products/products';

export default function Page() {
    return (
        <div className="flex">
            <SideBarCategoryLeft />
            <ProductsCenter products={products} /> {/* Przekazujesz wszystkie produkty */}
            <SideBarProductsFilterRight />
        </div>
    );
}
