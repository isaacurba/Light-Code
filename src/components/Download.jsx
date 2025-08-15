import React from 'react'

const Download = () => {
  return (

    <section className='bg-color-primary-light text-color-white'>
        <div className="container h-[80vh] grid place-items-center">
            <div className="text-center md:w-2/3 m-auto">
                <h1 className="title">Download App now and save your money</h1>
                <p className='leading-relaxed pt-5'>Serving An interesting list of long-term moneyy with experience in multiple industries</p>

                <div className="flex flex-col  md:flex-row items-center justify-center gap-5 pt-10">
                    <a href="#" className="bg-color-white h-16 w-44 grid place-items-center ronded-lg hover:opacity-70 ">
                        <img src="./img/ios-store-dark.png" alt="" />
                    </a>
                    <a href="#" className="bg-color-white h-16 w-44 grid place-items-center ronded-lg hover:opacity-70 ">
                        <img src="./img/g-play-dark.png" alt="" />
                    </a>

                </div>
            </div>
        </div>
    </section>

  )
}

export default Download
