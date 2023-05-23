/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'better-react-carousel'

const CarouselTwo = () => {
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
            <Carousel cols={3} rows={1} gap={10} loop mobileBreakpoint={responsive}>
                <Carousel.Item>
                    <div className='bg-white p-4 rounded-md'>
                        <div className='flex justify-center items-center bg-blue-500 w-[6rem] h-[6rem] m-1 md:w-[20rem] md:h-[20rem]'>
                            <p className='text-5xl text-white md:text-9xl mt-1'>G</p>
                        </div>
                        <p className='text-sm font-semibold md:text-lg mt-1'>Gangotri Building Material</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <div className='bg-white p-1 rounded-md'>
                            <div className='flex justify-center items-center bg-red-500 w-[6rem] h-[6rem] m-1 md:w-[20rem] md:h-[20rem]'>
                                <p className='text-5xl text-white md:text-9xl mt-1'>G</p>
                            </div>
                            <p className='text-sm font-semibold md:text-lg mt-1'>Gangotri Devi Construction</p>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <div className='bg-white p-1 rounded-md'>
                            <div className='flex justify-center items-center bg-green-600 w-[6rem] h-[6rem] m-1 md:w-[20rem] md:h-[20rem]'>
                                <p className='text-5xl text-white md:text-9xl mt-1'>P</p>
                            </div>
                            <p className='text-sm font-semibold md:text-lg mt-1'>Pulak Shops</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <div className='bg-white p-1 rounded-md'>
                            <div className='flex justify-center items-center bg-blue-500 w-[6rem] h-[6rem] m-1 md:w-[20rem] md:h-[20rem]'>
                                <p className='text-5xl text-white md:text-9xl mt-1'>S</p>
                            </div>
                            <p className='text-sm font-semibold md:text-lg mt-1'>Singh Building Materials</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-4 rounded-md'>
                        <div className='flex justify-center items-center bg-purple-400 w-[6rem] h-[6rem] m-1 md:w-[20rem] md:h-[20rem]'>
                            <p className='text-5xl text-white md:text-9xl mt-1'>U</p>
                        </div>
                        <p className='text-sm font-semibold md:text-lg mt-1'>Modular Kitchen Gorakhpur</p>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default CarouselTwo