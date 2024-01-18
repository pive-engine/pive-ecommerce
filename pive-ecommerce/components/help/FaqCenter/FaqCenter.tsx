// FaqCenter.tsx
"use client"
import React, { useState } from 'react';
import faqs from './faqs';

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Added e parameter to prevent event bubbling
    const toggleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="border p-4 my-2 rounded-md">
            <h3 className="font-semibold flex justify-between items-center" onClick={toggleOpen}>
                {faq.question}
                <span className="cursor-pointer">{isOpen ? '-' : '+'}</span>
            </h3>
            <div className={`${isOpen ? 'block' : 'hidden'} mt-2 transition-max-height duration-500 ease-in-out`}>
                <p>{faq.answer}</p>
            </div>
        </div>
    );
};

const FaqCenter = () => {
    return (
        <div className="max-w-2xl mx-auto my-10 p-4">
<h2 className="text-2xl font-bold mb-5 text-center p-3 rounded-md shadow-lg relative inline-block">
  <span className="text-orange-200">💡</span>
  <span className="bg-gradient-to-r from-orange-200 to-red-400 text-transparent bg-clip-text">
    Frequently Asked Questions
  </span>
  <span>{' '}</span>
  <span className="text-orange-200">(FAQ)</span>
</h2>


            {faqs.map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
            ))}
        </div>
    );
};

export default FaqCenter;
