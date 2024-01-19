import RootLayout from '../../../app/layout' // Make sure the path to Layout.tsx is correct
import Image from 'next/image';
import ProductsCenter from '@/app/search/ProductsCenter/page';
import SideBarCategoryLeft from '../ProductsCategorySideBarLeft/page'; // Zaktualizuj ś
import SideBarProductsFilterRight from '../SideBarProductsFilterRight/page'; // Zaktualizuj ścieżkę do właściwej lokalizacji
import products from '@/constants/products/products';

export default function Page() {
    const electronicsProducts = products.filter(product => product.category === 'electronics');

    return (
        <div className="flex">
            <SideBarCategoryLeft />
            <ProductsCenter products={electronicsProducts} />
            <SideBarProductsFilterRight />
        </div>
    );
    }