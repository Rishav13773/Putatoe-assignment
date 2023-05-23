import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosNotifications } from 'react-icons/io'
import { FaCartPlus } from 'react-icons/fa'

const LocationTop = () => {
    return (
        <div className='bg-cyan-500 h-10 md:hidden'>
            <div className='flex justify-center items-center gap-1 p-2'>
                <HiLocationMarker className='text-white text-xl' />
                <input type='text' name="location" placeholder='Harhwa Fatak Nirala Nagar, Gorakhpur, Nirala' className='w-full rounded-lg placeholder:px-4 bg-transparent border-[0.5px] placeholder:text-white' />
                <IoIosNotifications className='text-white text-xl' />
                <FaCartPlus className='text-white text-xl' />
            </div>
        </div>
    )
}

export default LocationTop