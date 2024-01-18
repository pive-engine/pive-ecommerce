import RootLayout from '../../../app/layout'
import Image from 'next/image';
import ProductsCenter from '@/app/search/ProductsCenter/page';
import SideBarCategoryLeft from '@/app/search/ProductsCategorySideBarLeft/page';
import SideBarProductsFilterRight from '../SideBarProductsFilterRight/page'; 

export default function Page() {
    return (
        <div className="flex">
            <SideBarCategoryLeft />
            <ProductsCenter />
            <SideBarProductsFilterRight />
        </div>
    );
    }