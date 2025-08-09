import React from 'react'
import hero3 from "../assets/img/hero3.png"

const pricing = () => {
  return (
    <div>
      <section>
        <div className="container py-20 relative">
            <div className='text-color-white flex flex-col items-center justify-between z-20 md:flex-row'>
            <div className="blob1"></div>
            <div className="blob2"></div>
                <div className='mb-12'>
                    <img src={hero3}  />
                </div>

                <div className='text-center md:text-left md:1/2 md:ml-20'>
                    <p className="leading-relaxed text-color-secondary">Saving Money</p>
                    <h1 class="title ">Best financing app to save your money.</h1>
                    <p className='leading-relaxed mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias itaque odit aspernatur in animi quas, voluptatum esse expedita delectus asperiores! Pariatur porro similique consequuntur illum nam ad soluta assumenda.</p>
                    <button className="btn">Read More</button>
                </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export default pricing;
