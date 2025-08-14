import React from 'react'

const Card = ({ icon, title, content, bgcolor }) => {
  return (
    <div className={`${bgcolor} border-2 border-solid border-color-gray text-color-white text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200`}>
      <div>
        <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'> 
        <i className= {`${icon} text-4xl`}></i>
        </div>
        <h3 className='text-xl font-bold py-4'>{title}</h3>
        <p className='leading-relaxed'>{content}</p>
      </div>
    </div>
  )
}

export default Card
