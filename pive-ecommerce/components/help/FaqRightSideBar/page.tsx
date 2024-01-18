// SideBarHelpOptions.tsx
"use client"
const helpOptions = [
  { name: 'Customer Service', path: '/help/customer-service' },
  { name: 'Account Management', path: '/help/account-management' },
  { name: 'Size Guides', path: '/help/size-guides' },
  { name: 'Product Care', path: '/help/product-care' },
  { name: 'Payment Information', path: '/help/payment-information' },
  { name: 'Warranty Information', path: '/help/warranty-information' },
  { name: 'Community Engagement', path: '/help/community' },
  { name: 'Feedback and Suggestions', path: '/help/feedback' },
  { name: 'Loyalty Programs', path: '/help/loyalty-programs' },
  { name: 'Gift Services', path: '/help/gift-services' },
  { name: 'Safety Information', path: '/help/safety-information' },
  { name: 'Accessibility', path: '/help/accessibility' },
  { name: 'Store Locator', path: '/help/store-locator' },
  { name: 'Events and Promotions', path: '/help/events' },
  { name: 'Environmental and Ethical Practices', path: '/help/environment' },
  { name: 'Blog or Articles', path: '/blog' },
  // Add more help options as needed
];

const SideBarHelpOptions = () => {
  // Utilize a routing library like `next/router` for navigating
  const handleHelpOptionClick = (path) => {
    // Implement the routing logic to navigate to the selected help page
    // Example for Next.js: router.push(path);
  };

  return (
    <div className="bg-[#171717] text-white w-64 space-y-3 p-5">
      <div className="text-lg font-bold">Help Options</div>
      {helpOptions.map((option) => (
        <div
          key={option.name}
          className="transition-colors hover:text-gray-300 cursor-pointer"
          onClick={() => handleHelpOptionClick(option.path)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default SideBarHelpOptions;
