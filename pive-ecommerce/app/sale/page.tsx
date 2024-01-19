import React from 'react';
import ProductsCenter from '@/app/search/ProductsCenter/page';
import SideBarCategoryLeft from '@/app/search/ProductsCategorySideBarLeft/page';
import SideBarProductsFilterRight from '@/app/search/SideBarProductsFilterRight/page';
import products from '@/constants/products/products';

export default function SalePage() {
    // Filtrowanie produktów, które są w promocji
    const saleProducts = products.filter(product => product.isSale);

    return (
        <div className="flex">
            <SideBarCategoryLeft />
            <ProductsCenter products={saleProducts} /> {/* Teraz przekazujesz tylko produkty w promocji */}
            <SideBarProductsFilterRight />
        </div>
    );
}
