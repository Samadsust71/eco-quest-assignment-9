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
      <div className='my-6'>
        <OurGuides></OurGuides>
      </div>
      <div>
        <Awards></Awards>
      </div>
     
    </div>
  )
}

export default Home
