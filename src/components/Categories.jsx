import React from 'react'
import block from '../assets/cover block.jpg'

const Categories = () => {
    return (
        <div className='mt-4'>
            <div className='shadow-md rounded-lg bg-white m-2 p-2'>
                <h1 className='text-cyan-900 font-bold text-lg'>SHOP BY CATEGORY</h1>
            </div>
            <div className='shadow-md rounded-lg bg-white m-2 h-36'>
                <div className='text-center border-b-[0.5px] border-gray-600 max-w-[300px] mx-auto text-lg font-bold text-gray-600'>
                    <h4>Construction</h4>
                </div>
                <div className='bg-gray-200 m-2'>
                    <div className='flex flex-col border-[0.5px] border-cyan-500 w-40 text-center'>
                        <img className='w-[4rem] mx-12 p-1' src={block} alt="" />
                        <p className='text-xs font-semibold'>cover block</p>
                        <p className='text-sm font-bold'>UP TO <span className='text-red-500'>0%OFF</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories