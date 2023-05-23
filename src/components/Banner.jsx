import React from 'react'
import airtelIcon from '../assets/airtel-logo-icon.svg'
import jioIcon from '../assets/jio-logo-icon.svg'
import viIcon from '../assets/vodafone-icon.svg'
import bsnlIcon from '../assets/bsnl-logo-icon.svg'
import upiIcon from '../assets/upi-pay.svg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center m-2 px-4 pt-4 mt-[7rem] pb-2 shadow-md rounded-lg bg-white md:pb-6'>
            <div className='flex flex-col justify-center gap-5'>
                <div>
                    <h1 className='font-small text-4xl font-bold text-cyan-900 md:text-5xl'>RECHARGE</h1>
                    <p className='text-sm text-cyan-600 mt-[-6px] md:text-lg'>With ease, with Putatoe</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-7 md:w-10' src={airtelIcon} alt="airtel" />
                    <img className='w-7 md:w-10' src={jioIcon} alt="jio" />
                    <img className='w-7 md:w-10' src={viIcon} alt="vi" />
                    <img className='w-7 md:w-10' src={bsnlIcon} alt="bsnl" />
                </div>
                <div className='flex items-center gap-2'>
                    <button className='text-cyan-600 border-[3px] border-cyan-700 bg-transparent  focus:ring-4 focus:outline-none rounded-3xl text-[10px] px-1 py-1 w-24 md:w-28 md:text-[12px] text-center'>Recharge Now</button>
                    <button className='text-white border-[3px] border-cyan-700 bg-cyan-700  focus:ring-4 focus:outline-none rounded-3xl text-[10px] px-1 py-1 w-24 md:w-28 md:text-[12px] text-center'>Learn More</button>
                </div>
            </div>
            <img className='w-60 md:w-80' src={upiIcon} alt="upi" />
        </div >
    )
}

export default Banner