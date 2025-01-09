import React from 'react'

const HomePageCard = ({title, images,link}) => {
  return (
    <div className='bg-white h-[420px]'>

        <div className='text-lg xl:text-xl font-semibold ml-4 mt-4'>
            {title}
        </div>
        <div className='h-[300px] m-4 grid  grid-cols-2 '> 
            {images.map((img) =>(
                <div><img className='object-cover' src={img} alt="" /> </div>
            ))}
        </div>
        <div className='text-xs  xl:text-sm text-blue-600 ml-4 cursor-pointer'>
            {link}
        </div>

    </div>
  )
}

export default HomePageCard
