import React from 'react'

const HomePageCard = ({title, images,link}) => {
  return (
    <div className='bg-white h-[420px] z-30 m-3'>

        <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
            {title}
        </div>
        <div className={`h-[300px] ${images.length === 1 ? 'mb-7 p-4' : 'm-4 grid grid-cols-2 gap-12'}`}> 
            {images.map((img, index) =>(
                <div className='cursor-pointer' key={index}>
                    <img className='h-full w-full object-cover' src={img} alt="" /> 
                </div>
            ))}

        </div>

        <div className='text-xs  xl:text-sm text-blue-600 ml-4 cursor-pointer'>
            {link}
        </div>
        

    </div>
  )
}

export default HomePageCard
