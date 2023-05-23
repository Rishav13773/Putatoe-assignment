import React from 'react'
import { MdLocalGroceryStore, MdOutlineConstruction } from 'react-icons/md'
import { GiDiscussion } from 'react-icons/gi'

const ServiceProvide = () => {
    return (
        <div className='m-2 px-4'>
            <div className='text-center bg-[#abe0f1]'>
                <h1 className='text-cyan-900 font-bold text-lg py-2 mb-4'>Popular Service Products</h1>
            </div>

            <div className='grid grid-cols-2 gap-2 text-center md:flex md:gap-8 md:justify-center'>
                <div className='flex flex-col items-center bg-gradient-to-t from-black to-white w-44 md:w-72 p-2'>
                    <MdLocalGroceryStore className='text-6xl text-cyan-900 md:text-9xl' />
                    <p className='text-lg text-white font-bold'>Daily Needs</p>
                </div>

                <div className='flex flex-col items-center bg-gradient-to-t from-black to-white w-44 md:w-72 p-2 '>
                    <MdOutlineConstruction className='text-6xl text-cyan-900 md:text-9xl' />
                    <p className='text-lg text-white font-bold'>Construction</p>
                </div>

                <div className='flex flex-col items-center bg-gradient-to-t from-black to-white w-44 md:w-72 p-2'>
                    <GiDiscussion className='text-6xl text-cyan-900 md:text-9xl' />
                    <p className='text-lg text-white font-bold'>Consultancy</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceProvide