import RootLayout from '@/app/layout' // Make sure the path to Layout.tsx is correct
import Image from 'next/image';
import ProductsCenter from '@/app/search/ProductsCenter/page';
import SideBarCategoryLeft from '@/app/search/ProductsCategorySideBarLeft/page'; // Zaktualizuj ś
import SideBarProductsFilterRight from '@/app/search/SideBarProductsFilterRight/page'; // Zaktualizuj ścieżkę do właściwej lokalizacji

export default function Page() {
    return (
        <div className="flex">
            <SideBarCategoryLeft />
            <ProductsCenter />
            <SideBarProductsFilterRight />
        </div>
    );
    }