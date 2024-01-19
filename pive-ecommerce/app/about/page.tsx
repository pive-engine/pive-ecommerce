export default function About() {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-6">About</h1>
          <p className="mb-8">
            This website is built with <a href="https://nextjs.org" className="text-blue-600 dark:text-blue-400 hover:underline">Next.js Commerce</a>, which is an ecommerce template for creating a headless Shopify storefront.
          </p>
  
          <h2 className="text-3xl font-semibold mb-4">Support for real-world commerce features including:</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Out of stocks</li>
            <li>Order history</li>
            <li>Order status</li>
            <li>Cross variant / option availability (aka. Amazon style)</li>
            <li>Hidden products</li>
            <li>Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)</li>
            <li>Seamless and secure checkout via Shopify Checkout</li>
            <li>And more!</li>
          </ul>
  
          <h2 className="text-3xl font-semibold mb-4">This template also allows us to highlight newer Next.js features including:</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Next.js App Router</li>
            <li>Optimized for SEO using Next.js's Metadata</li>
            <li>React Server Components (RSCs) and Suspense</li>
            <li>Server Actions for mutations</li>
            <li>Edge runtime</li>
            <li>New Next.js 13 fetching and caching paradigms</li>
            <li>Dynamic OG images</li>
            <li>Styling with Tailwind CSS</li>
            <li>Automatic light/dark mode based on system settings</li>
            <li>And more!</li>
          </ul>
  
          <p className="italic">
            This document was last updated on July 18, 2023.
          </p>
        </div>
      </div>
    );
  }
  