// page.tsx
import RootLayout from '../app/layout' // Make sure the path to Layout.tsx is correct
import ProductGrid from '../components/product/ProductGrid';
import ProductGridTwo from '../components/product/ProductGridTwo';
import ProductGridThree from '../components/product/ProductGridThree';
import Carousel from '../components/carousel';
import ThreeProducts from '@/components/product/ThreeProducts';

export default function Page() {
  return (
    <main>
      <ThreeProducts />
      <ProductGrid />
      <ProductGridTwo />
      <ProductGridThree />
      <Carousel/>
    </main>
  )}