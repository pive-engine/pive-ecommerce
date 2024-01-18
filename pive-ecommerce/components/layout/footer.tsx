import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const currentYear = new Date().getFullYear();
const copyrightDate = `2023${currentYear > 2023 ? `-${currentYear}` : ''}`;
const companyName = "ACME, Inc.";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="flex flex-col space-y-4 lg:w-1/4">
          <h2 className="text-2xl font-bold">ACME STORE</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/home"><span className="hover:underline cursor-pointer">Home</span></Link>
            <Link href="/about"><span className="hover:underline cursor-pointer">About</span></Link>
            <Link href="/terms"><span className="hover:underline cursor-pointer">Terms & Conditions</span></Link>
            <Link href="/shipping"><span className="hover:underline cursor-pointer">Shipping & Return Policy</span></Link>
            <Link href="/privacy"><span className="hover:underline cursor-pointer">Privacy Policy</span></Link>
            <Link href="/faq"><span className="hover:underline cursor-pointer">FAQ</span></Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4 lg:w-1/4">
          <h2 className="text-2xl font-bold">ACME STORE</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/home"><span className="hover:underline cursor-pointer">Home</span></Link>
            <Link href="/about"><span className="hover:underline cursor-pointer">About</span></Link>
            <Link href="/terms"><span className="hover:underline cursor-pointer">Terms & Conditions</span></Link>
            <Link href="/shipping"><span className="hover:underline cursor-pointer">Shipping & Return Policy</span></Link>
            <Link href="/privacy"><span className="hover:underline cursor-pointer">Privacy Policy</span></Link>
            <Link href="/faq"><span className="hover:underline cursor-pointer">FAQ</span></Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4 lg:w-1/4">
          <h2 className="text-2xl font-bold">ACME STORE</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/home"><span className="hover:underline cursor-pointer">Home</span></Link>
            <Link href="/about"><span className="hover:underline cursor-pointer">About</span></Link>
            <Link href="/terms"><span className="hover:underline cursor-pointer">Terms & Conditions</span></Link>
            <Link href="/shipping"><span className="hover:underline cursor-pointer">Shipping & Return Policy</span></Link>
            <Link href="/privacy"><span className="hover:underline cursor-pointer">Privacy Policy</span></Link>
            <Link href="/faq"><span className="hover:underline cursor-pointer">FAQ</span></Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4 lg:w-1/4">
          <h2 className="text-2xl font-bold">ACME STORE</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/home"><span className="hover:underline cursor-pointer">Home</span></Link>
            <Link href="/about"><span className="hover:underline cursor-pointer">About</span></Link>
            <Link href="/terms"><span className="hover:underline cursor-pointer">Terms & Conditions</span></Link>
            <Link href="/shipping"><span className="hover:underline cursor-pointer">Shipping & Return Policy</span></Link>
            <Link href="/privacy"><span className="hover:underline cursor-pointer">Privacy Policy</span></Link>
            <Link href="/faq"><span className="hover:underline cursor-pointer">FAQ</span></Link>
          </nav>
        </div>

      {/* Social Media Icons Container */}
      <div className="flex justify-center items-center w-full border-t border-gray-600 py-3 mt-5">
        <a href="https://www.facebook.com" className="text-white hover:text-blue-500 mx-4"><FaFacebook className="text-2xl cursor-pointer" /></a>
        <a href="https://www.instagram.com" className="text-white hover:text-red-500 mx-4"><FaInstagram className="text-2xl cursor-pointer" /></a>
        <a href="https://www.tiktok.com" className="text-white hover:text-pink-500 mx-4"><FaTiktok className="text-2xl cursor-pointer" /></a>
        <a href="https://www.linkedin.com" className="text-white hover:text-blue-800 mx-4"><FaLinkedin className="text-2xl cursor-pointer" /></a>
        
      </div>

      </div>
      <div className="text-center mb-5">
        <p>&copy; {copyrightDate} {companyName}. All rights reserved. | Designed in California | Crafted by <a href="https://vercel.com" className="hover:underline">Vercel</a></p>
      </div>
    </footer>
  );
};

export default Footer;
