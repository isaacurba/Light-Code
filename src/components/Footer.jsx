import React from 'react'

const Footer = () => {
    
  return (
    <footer>
        <section className='container py-10 text-color-white'>
            <div className="grid gap-10 md:grid-cols-3 pb-10">

                <div className='space-y-6'>
                     <h4 className="font-bold text-lg">About App</h4>
                     <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, minus at. Ratione asperiores eum facilis placeat maxime praesentium recusandae quaerat vero tempora facere.</p>
                     <div className="flex gap-5 item-center">
                        <p>Followw Us</p>
                        <i className='fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary'></i>
                        <i className='fa-brands fa-twitter cursor-pointer hover:text-color-secondary'></i>
                        <i className='fa-brands fa-youtube cursor-pointer hover:text-color-secondary'></i>
                        <i className='fa-brands fa-instagram cursor-pointer hover:text-color-secondary'></i>

                     </div>
                </div>
                <div className='flex justify-between md:justify-around'>

                    <div className="space-y-6">
                        <h4 className="font-bold text-lg">Quick links</h4>
                        <ul className='space-y-3'>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Home</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Features</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Testimonial</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Pricing</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Contact</a></li>

                        </ul>
                    </div>
                        <div className="space-y-6">
                        <h4 className="font-bold text-lg">Quick links</h4>
                        <ul className='space-y-3'>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Help</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">About us</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Parthners</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Career</a></li>
                            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Reviews</a></li>
                        </ul>
                    </div>      
                </div>
                
                <div>
                    <div className="space-y-6">

                        <h4 className="font-bold text-lg">Newsletter</h4>
                        <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, officiis.</p>    
                        <div className="flex items-center ">
                            <input type="text" className='w-3/4 text-color-gray bg-color-white p-2 lg:p-rounded-3-rounded-md focus:outline-none' placeholder='Enter Your'/>
                            <button type='submit' className='bg-color-secondary px-4 py-2 lg:px-5 lg: rounded-r-md hover:opacity-90 '><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                  </div>
                </div>
            </div>

            <div className='flex justify-center pt-10 border-t border-color-gray'>
                <p>{new Date().getFullYear()} &copy; LightCode All Rights Reserved</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer
