/* eslint-disable no-lone-blocks */
import React, { useEffect, useRef, useState } from 'react'
import LocationTop from './components/LocationTop'
import SearchBar from './components/SearchBar'
import Banner from './components/Banner'
import Services from './components/Services'
import Categories from './components/Categories'
import AllServices from './components/AllServices'
import ServiceProvide from './components/ServiceProvide'
import ConstructionProducts from './components/ConstructionProducts'
import DailyProducts from './components/DailyProducts'
import ConsultProducts from './components/ConsultProducts'

const App = () => {
  const [window, setWindow] = useState(false)
  const scrollableDivRef = useRef(null);
  const [showDaily, setShowDaily] = useState(false);
  const [showConstruct, setShowConstruct] = useState(false);
  const [showConsult, setShowConsult] = useState(false);

  console.log(window)

  const handleClick = () => {
    setWindow(!window)
  }

  useEffect(() => {
    if (window) {

      document.body.style.overflow = 'hidden';
      document.getElementById('myDiv').style.opacity = '0.5';
      document.addEventListener('click', handleOutsideClick);
    } else {

      document.getElementById('myDiv').style.opacity = '1';
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [window]);


  const handleOutsideClick = (event) => {
    if (
      scrollableDivRef.current &&
      !scrollableDivRef.current.contains(event.target)
    ) {
      setWindow(false);
    }
  };

  const handleShowDaily = () => {
    setShowDaily(!showDaily)
  }

  const handleShowConstruct = () => {
    setShowConstruct(!showConstruct)
  }

  const handleShowConsult = () => {
    setShowConsult(!showConsult)
  }

  return (
    <div className='md:px-6 relative h-full'>
      <div id='myDiv'>
        <div className='fixed w-full mt-[-7rem] z-50'>
          <LocationTop />
          <SearchBar />
        </div>
        <Banner />
        <Services />
        <Categories />

        <div className='text-center bg-[#abe0f1] mx-5'>
          <h1 className='text-cyan-900 font-bold text-lg py-2 mb-4'>Popular Service Products</h1>
        </div>
        {showConstruct && <ConstructionProducts />}
        {showDaily && <DailyProducts />}
        {showConsult && <ConsultProducts />}


        <AllServices />
        <ServiceProvide />
      </div>

      {/** New window code */}

      {window && <div className='flex flex-col bg-white gap-3 items-start fixed w-[70%] top-[30%] right-[15%] p-6'>
        <div className='flex gap-3 items-center'>
          <img className='w-5' src='https://putatoe.com/img/logo.png' alt='logo'></img>
          <p className='font-bold'>Chose Any Service</p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-3'>
            <input type='checkbox'
              checked={showDaily}
              onChange={handleShowDaily}
            />
            <label className='font-semibold'>Daily Needs</label>
          </div>
          <div className='flex gap-3'>
            <input type='checkbox'
              checked={showConstruct}
              onChange={handleShowConstruct}
            />
            <label className='font-semibold'>Construction</label>
          </div>
          <div className='flex gap-3'>
            <input type='checkbox'
              checked={showConsult}
              onChange={handleShowConsult}
            />
            <label className='font-semibold'>Consultancy</label>
          </div>
        </div>

        <div className='flex gap-4 ml-[14rem] text-xs font-semibold lg:ml-[50rem]'>
          <p onClick={handleClick} className='cursor-pointer'>CANCEL</p>
          <p onClick={handleClick} className='cursor-pointer'>OK</p>
        </div>
      </div>}

      <div className='fixed right-0 bottom-0 bg-green-700 w-14 p-2 rounded-full z-50 cursor-pointer mb-6 mr-6' onClick={handleClick}>
        <img src='https://putatoe.com/img/logo.png' alt='logo'></img>
      </div>
    </div>
  )
}

export default App