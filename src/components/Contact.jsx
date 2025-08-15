import React from 'react'

const Contact = () => {
  return (
    <section>
        <div className="container py-20">

            <div className="text-center m-auto mb-20 md:w-1/2 text-color-white">
                <h4 className="text-color-secondary">Have a Question</h4>
                <h1 className="title capitalize">Get in touch</h1>
            </div>

            <form action="#">
                <div className='w-full m-auto text-center md:w-2/3'>
                <div className='text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2'>

                    <input type="text" className='bg-gray-50  border border-grey-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary' placeholder='Name'/>

                    <input type="email" className='bg-gray-50  border border-grey-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary' placeholder='email'/>

                    <input type="tel" className='bg-gray-50  border border-grey-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary' placeholder='phone'/>

                    <input type="text" className='bg-gray-50  border border-grey-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary' placeholder='company'/>
                </div>

                <textarea name="#" row="4" className='text-color-primary-dark bg-gray-50  border border-grey-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary' placeholder='Message'></textarea>
                <button className='btn mt-10'>Send Message</button>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact
