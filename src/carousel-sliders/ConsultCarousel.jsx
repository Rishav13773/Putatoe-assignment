/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'better-react-carousel'

const ConsultCarousel = () => {
    const responsive = [
        {
            breakpoint: 400,
            cols: 4,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 1000
        }
    ]

    return (
        <div>
            <Carousel cols={4} rows={1} gap={10} loop mobileBreakpoint={responsive}>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Incorpopration of Public Company</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Incorpopration of Public Company</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Incorpopration of Public Company</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Incorpopration of Public Company</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Incorpopration of Public Company</p>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default ConsultCarousel