import React from 'react'
import ConsultCarousel from '../carousel-sliders/ConsultCarousel'

const ConsultProducts = () => {
    return (
        <div className='mt-9'>

            <div className='text-center border-b-[0.5px] border-gray-600 max-w-[300px] mx-auto text-lg font-bold text-gray-600 mb-4'>
                <h4>Consultancy</h4>
            </div>

            <div>
                <ConsultCarousel />
            </div>
        </div>
    )
}

export default ConsultProducts