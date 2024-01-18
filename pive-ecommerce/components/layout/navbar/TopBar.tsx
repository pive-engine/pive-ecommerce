// TopBar.tsx
import Link from 'next/link';

const TopBar: React.FC = () => {
  return (
    <div className="bg-black text-white text-sm h-8 flex justify-between items-center px-4">

<span className="hover:underline cursor-pointer text-blue-600 font-semibold">
  Have a great shopping experience! 🛍️
</span>
    <div className="flex items-center space-x-4">

      <Link href="/find-store">
        <span className="hover:underline cursor-pointer">Find Store</span>
      </Link>
      <Link href="/help">
        <span className="hover:underline cursor-pointer">Help</span>
      </Link>
      <Link href="/contact">
        <span className="hover:underline cursor-pointer">Contact</span>
      </Link>
      <Link href="/login">
        <span className="hover:underline cursor-pointer">Log in</span>
      </Link>
    </div>
    </div>
  );
};

export default TopBar;
