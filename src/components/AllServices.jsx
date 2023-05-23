import React from 'react'
import CarouselTwo from '../carousel-sliders/CarouselTwo'

const AllServices = () => {
    return (
        <div className='mt-9'>
            <div className='text-center bg-[#abe0f1] mx-5'>
                <h1 className='text-cyan-900 font-bold text-lg py-2 mb-4'>All Popular Service Providers</h1>
            </div>
            <div className='text-center border-b-[0.5px] border-gray-600 max-w-[300px] mx-auto text-lg font-bold text-gray-600 mb-4'>
                <h4>Construction</h4>
            </div>

            <div>
                <CarouselTwo />
            </div>
        </div>
    )
}

export default AllServices