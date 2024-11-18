import React from 'react'
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'
import Heading from '../components/Heading'
import engFlag from "../assets/english.jpg"
import spainFlag from "../assets/espanol.jpg"
import franceFlag from "../assets/france.jpg"
import germanFlag from "../assets/germany.jpg"


const Home = () => {
   
  return (
    <div>
      <section>
      <Banner></Banner>
      </section>
      <section>
      <Outlet></Outlet>
      </section>
      <div className='my-6 space-y-4'>
        <Heading title={'No matter where you come from, our guides will be able to understand you.'} subTitle={'Our guides are able to speak in the following languages'}
        ></Heading>
        <div className='flex items-center justify-center gap-6'>
          <img src={spainFlag} className='h-12 w-12 rounded-full object-cover'  alt="" />
          <img src={engFlag} className='h-12 w-12 rounded-full object-cover' alt="" />
          <img src={franceFlag} className='h-12 w-12 rounded-full object-cover' alt="" />
          <img src={germanFlag} className='h-12 w-12 rounded-full object-cover' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
