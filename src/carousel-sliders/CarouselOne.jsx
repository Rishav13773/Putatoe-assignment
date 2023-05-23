/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'better-react-carousel'

const CarouselOne = () => {
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
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://4.imimg.com/data4/NA/LP/MY-27709597/red-brick-500x500.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Royal Brick</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://images1.livehindustan.com/uploadimage/library/2021/07/25/16_9/16_9_1/_1627210083.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Dehri Bihar</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://5.imimg.com/data5/SELLER/Default/2021/5/JF/ZS/MG/126955422/acc-hpc-long-life-cement-1000x1000.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Acc Gold</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <img className='w-[10rem] h-[7rem] md:w-[20rem] md:h-[20rem] py-2' src='https://content.jdmagicbox.com/comp/hindaun/z3/9999p7469.7469.110129175538.q1z3/catalogue/punjab-sales-hindaun-city-hindaun-cement-dealers-8yi9e18e9y.jpg' />
                        <p className='text-sm font-semibold md:text-lg mt-1'>Ultratech PPC</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='bg-white p-3 rounded-md'>
                        <div className='flex justify-center items-center bg-purple-400 w-[7rem] h-[7rem] m-1 md:w-[20rem] md:h-[20rem]'>
                            <p className='text-5xl text-white md:text-9xl mt-1'>U</p>
                        </div>
                        <p className='text-sm font-semibold md:text-lg mt-1'>Ultratech paper bag</p>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default CarouselOne;