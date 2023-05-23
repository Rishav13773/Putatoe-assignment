import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

const SearchBar = () => {
    return (
        <div className='bg-cyan-500 max-w-[768px] mx-auto md:rounded-xl '>
            <div className='flex justify-center items-center h-14 relative gap-2 p-2'>
                <AiOutlineSearch className='absolute left-0 ml-4 text-2xl text-cyan-600' />
                <input type='search' placeholder='Search for Products' className='w-full rounded-lg h-10 pl-12 pr-6' />
                <BsFillMicFill className='text-2xl text-white md:hidden' />

            </div>
        </div>
    )
}

export default SearchBar