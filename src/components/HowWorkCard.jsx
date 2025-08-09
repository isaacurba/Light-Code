import React from 'react'

const HowWorkCard = ({title, content, bgcolor}) => {
  return (
    <div>

        <div className={`${bgcolor} relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200`}>
            <p className='text-6xl'>{title}</p>            
        </div>

        <div>
            <h3 className='text-xl font-bold py-4'>Install The App</h3>
            <p className='leading-relaxed'>{content}</p>        
      </div>
    </div>
  )
}

export default HowWorkCard
