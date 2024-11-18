import React from 'react'
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'
import OurGuides from '../components/OurGuides'



const Home = () => {
   
  return (
    <div>
      <section>
      <Banner></Banner>
      </section>
      <section>
      <Outlet></Outlet>
      </section>
      <div>
        <OurGuides></OurGuides>
      </div>
     
    </div>
  )
}

export default Home
