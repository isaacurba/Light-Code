import React from 'react'
import Card from "./Card";

const Features = () => {

    const featuresCard = [
        {
            title: "Expense Tracking",
            content: "We use an application designed a testing nose to keep away."
        },
        {
            title: "Finance Snapshot",
            content: "We use an application designed a testing nose to keep away."
        },
        {
            title: "Finance Snapshot",
            content: "We use an application designed a testing nose to keep away."            
        }
    ];


  return (

    <section className='bg-color-primary-light '>
        <div className='container py-20'>
            <div className='text-center m-auto mb-20 md:w-1/2 '>
                <h4 className='text-color-secondary'>Our Features</h4>
                <h1 className='title text-white'>Easy to manage your all payment By our App</h1>
            </div>

            {/* CARDS */}

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 sm:px-6 lg-px-8'>
                {featuresCard.map((features, index)=>{
                {/* different background for the second card */}
                const bgcolor = index === 1 ? "bg-color-primary-dark" : "bg-color-light";
                    return(
                    <Card 
                        key={index} 
                        title={features.title}
                        content={features.content} 
                        bgcolor={bgcolor} />
                    );

                })};
            </div>

        </div>

    </section>

  )
}

export default Features
