import React from 'react'
import { FiMonitor } from 'react-icons/fi'
import { HiCurrencyRupee } from 'react-icons/hi'
import { TbSpeakerphone } from 'react-icons/tb'
import { BsNewspaper, BsFillPeopleFill } from 'react-icons/bs'
import { FaBlogger, FaMobileAlt } from 'react-icons/fa'
import { MdOutlineFeedback, MdElectricBolt } from 'react-icons/md'
import { GoFlame } from 'react-icons/go'
import { IoIosWater, IoIosArrowDroprightCircle } from 'react-icons/io'



const Services = () => {
    return (
        <div className='shadow-md rounded-lg bg-white p-4 m-2 md:p-6'>
            <div className='grid grid-cols-4 gap-4 md:gap-8'>
                <div className='flex flex-col text-center items-center'>
                    <FaMobileAlt className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Prepaid Mobile Recharge</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <FiMonitor className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>DTH Recharge</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <HiCurrencyRupee className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Loans</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <TbSpeakerphone className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Promotion</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <BsNewspaper className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>News</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <FaBlogger className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Blog</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <BsFillPeopleFill className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Jobs</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <MdOutlineFeedback className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Anonymous Feedback</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <GoFlame className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Gas booking</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <MdElectricBolt className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Electricity bill</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <IoIosWater className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>Water Bill</p>
                </div>

                <div className='flex flex-col text-center items-center'>
                    <IoIosArrowDroprightCircle className='text-cyan-600 text-4xl md:text-6xl' />
                    <p className='text-xs text-cyan-700 md:text-base'>See More</p>
                </div>

            </div>
        </div>
    )
}

export default Services