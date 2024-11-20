import React from 'react'
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'
import OurGuides from '../components/OurGuides'
import Awards from '../components/Awards'





const Home = () => {
   
  return (
    <div>
      <section>
      <Banner></Banner>
      </section>
      <section>
      <Outlet></Outlet>
      </section>
      <div className='my-6 bg-gradient-to-b from-blue-50 via-sky-100 to-white'>
        <OurGuides></OurGuides>
      </div>
      <div className='bg-gradient-to-t from-blue-50 via-sky-100 to-white'>
        <Awards></Awards>
      </div>
     
    </div>
  )
}

export default Home
