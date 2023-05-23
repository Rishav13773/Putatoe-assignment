import React from 'react'
import LocationTop from './components/LocationTop'
import SearchBar from './components/SearchBar'
import Banner from './components/Banner'
import Services from './components/Services'
import Categories from './components/Categories'
import ServiceProducts from './components/ServiceProducts'
import AllServices from './components/AllServices'
import ServiceProvide from './components/ServiceProvide'

const App = () => {
  return (
    <div className='md:px-6'>
      <div className='fixed w-full mt-[-7rem] z-50'>
        <LocationTop />
        <SearchBar />
      </div>
      <Banner />
      <Services />
      <Categories />
      <ServiceProducts />
      <AllServices />
      <ServiceProvide />
    </div>
  )
}

export default App