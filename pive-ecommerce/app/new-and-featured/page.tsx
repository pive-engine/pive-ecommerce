import React from 'react';
import ProductsCenter from '@/app/search/ProductsCenter/page';
import SideBarCategoryLeft from '@/app/search/ProductsCategorySideBarLeft/page';
import SideBarProductsFilterRight from '@/app/search/SideBarProductsFilterRight/page';
import products from '@/constants/products/products';

export default function NewAndFeaturedPage() {
    // Filtrowanie produktów, które są oznaczone jako nowe
    const newProducts = products.filter(product => product.newProduct);

    return (
        <div className="flex">
            <SideBarCategoryLeft />
            <ProductsCenter products={newProducts} />
            <SideBarProductsFilterRight />
        </div>
    );
}
