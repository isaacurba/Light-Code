import React from 'react'
import HowWorkCard from "./HowWorkCard";


const HowWorks = () => {

  const howWorkData = [
    {
        title:"1",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, repellat."
    },
    {
        title:"2",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, repellat."        
    },
    {
        title:"3",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, repellat."        
    }
  ]  

  return (
    <section className='bg-color-primary-light'>
        <div className="container py-20 text-color-white">
            <div className='text-center m-auto mb-20 md:w-1/2 '>
                <h4 className='text-color-secondary'>How it works</h4>
                <h1 className='title text-white'>Grow up your money savings</h1>
            </div>   

            <div  className='flex felx-col items-center text-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6'>

                {howWorkData.map((work, index)=>{
                {/* different background for the second card */}
                const bgcolor = index === 1 ? "bg-color-primary-secondary" : "bg-color-light";
                    return(
                    <HowWorkCard
                        key={index}
                        title={work.title}
                        content={work.content}                         
                        bgcolor={bgcolor} />

                    );
                })};
            </div>

        </div>
    </section>
  )
}

export default HowWorks
