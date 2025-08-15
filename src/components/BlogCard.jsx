import React from 'react'

const BlogCard = ({title,pic, date, time, content, more}) => {
  return (


    <div>
        <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden'>
            <img src={`${pic}`} alt="" className='h-full w-full hover:scale-125 transition duration-300'/>
        </div>
        <div>
            <div className="flex items-center gap-5 py-5 ">
                <p>{date}</p>
                <p>{time}</p>
            </div>

            <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'>{title}</a>
            <p className='leading-relaxed my-5'>{content}</p>

            <a href="#blog" className='inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out'>
                <span className="tracking-wider capitalize underline hover:no-underline">{more}</span>
            </a>
        </div>
    </div>

  )
}

export default BlogCard
