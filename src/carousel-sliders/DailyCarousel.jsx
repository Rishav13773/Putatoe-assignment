/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'better-react-carousel'

const DailyCarousel = () => {
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
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://images-cdn.ubuy.co.in/63a9293f7d6b9335e60eed98-almond-breeze-blue-diamond-almond-milk.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Almont Milk</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://www.bigbasket.com/media/uploads/p/l/1203082-2_3-real-fruit-power-litchi.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Juice -Litchi</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://m.media-amazon.com/images/I/51YQKECm8kL._SY450_.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Amla Juice</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://m.media-amazon.com/images/I/71d+kz806ZL._SY550_.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Aloo Bhujia</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://m.media-amazon.com/images/I/81rNHmKK-rL._SL1500_.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Bikaneri Bhujia</p>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default DailyCarousel