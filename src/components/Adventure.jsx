import React from 'react'
import Heading from './Heading'
import { useLoaderData } from 'react-router-dom'
import AdventureCard from './AdventureCard'

const Adventure = () => {
    const data = useLoaderData()
    
  return (
    <div className='w-11/12 mx-auto'>
      <div>
      <Heading title={'Adventure'} subTitle={'Live a unique experience full of adventures and emotions. Come and experience with us an immersive journey in the middle of the jungle and surrounded by animals in an environment of harmony and freedom. Live life like never before.'}
      ></Heading>
      </div>
      <div className='grid md:grid-cols-3 gap-6 mt-6'>
        {
         data.map(adventure=><AdventureCard key={adventure.id} adventure={adventure}></AdventureCard>)
        }
      </div>
    </div>
  )
}

export default Adventure
