import React from 'react'
import ConstructionCarousel from '../carousel-sliders/ConstructionCarousel.jsx'

const ConstructionProducts = () => {


    return (
        <div className='mt-9'>

            <div className='text-center border-b-[0.5px] border-gray-600 max-w-[300px] mx-auto text-lg font-bold text-gray-600 mb-4'>
                <h4>Construction</h4>
            </div>

            <div>
                <ConstructionCarousel />
            </div>
        </div>
    )
}

export default ConstructionProducts