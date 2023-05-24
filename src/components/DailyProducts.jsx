import React from 'react'
import DailyCarousel from '../carousel-sliders/DailyCarousel'

const DailyProducts = () => {
    return (
        <div className='mt-9'>

            <div className='text-center border-b-[0.5px] border-gray-600 max-w-[300px] mx-auto text-lg font-bold text-gray-600 mb-4'>
                <h4>Daily Needs</h4>
            </div>

            <div>
                <DailyCarousel />
            </div>
        </div>
    )
}

export default DailyProducts