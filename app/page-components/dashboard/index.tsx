import HomeHero from '@/app/components/dashboard/Hero'
import React from 'react'
import { HomeCardData } from '@/app/constants/DashboardCard'
import Card from '@/app/reusables/Card'
const DashboardPageComponents = () => {
  return (
    <div>
      <HomeHero/>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-center gap-2 my-5 py-3 px-3'>
        {HomeCardData.map((cardData)=>(<Card {...cardData}/>))}
      </div>
    </div>
  )
}

export default DashboardPageComponents
