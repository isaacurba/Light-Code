import React, { useState } from 'react';
import PricingCard from "./PricingCard.jsx";

const Pricing = () => {
  const [priceOpen, setPriceOpen] = useState(false);

  const togglePrice = () => setPriceOpen(!priceOpen);

  const plans = [
    {
      title: "Basic Plan",
      price: 20,
      period: "/per month",
      description: "For beginners who want to scale business globally",
      features: [
        { 
          label: "Expense Management", 
          active: true 
        },
        { 
          label: "Card Management", 
          active: true 
        },
        { label: "Instant Statistics", 
          active: false 
        },
        { label: "Bookmark Functions", 
          active: false 
        },
        { label: "Accounting System", 
          active: false 
        },
      ]
    },
    {
      title: "Pro Plan",
      price: 50,
      period: "/per month",
      description: "For professionals needing advanced features",
      features: [
        { 
          label: "Expense Management", 
          active: true 
        },
        { 
          label: "Card Management", 
          active: true 
        },
        { 
          label: "Instant Statistics", 
          active: true 
        },
        { label: "Bookmark Functions", 
          active: true 
        },
        { 
          label: "Accounting System", 
          active: false 
        },
      ]
    },
    {
      title: "Enterprise Plan",
      price: 100,
      period: "/per month",
      description: "For enterprises with large-scale needs",
      features: [
        { 
          label: "Expense Management", 
          active: true 
        },
        { 
          label: "Card Management", 
          active: true 
        },
        { 
          label: "Instant Statistics", 
          active: true 
        },
        { 
          label: "Bookmark Functions", 
          active: true 
        },
        { 
          label: "Accounting System", 
          active: true 
        },
      ]

    }

  ];

  return (
    <div className="container py-20 text-white">
      <div className="text-center m-auto mb-20 md:w-1/2">
        <h4 className="text-color-secondary">Pricing</h4>
        <h1 className="title">Get in reasonable price</h1>
      </div>

      {/* Toggle/Switch */}
      <div className={`mt-5 flex items-center justify-center gap-4`}>
        <p>Bill Monthly</p>
        <label className={`cursor-pointer relative inline-block w-20 h-8 rounded-full ${priceOpen ? 'bg-color-secondary' : 'bg-color-primary-dark'}`}>
          <input type="checkbox" className='peer opacity-0 w-0 h-0' onChange={togglePrice}/>
          <span className="absolute top-0 left-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
        </label>
        <p>Bill Annually</p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {plans.map((plan, index) => (
          <PricingCard 
          key={index} 
          priceOpen={priceOpen} 
          {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
