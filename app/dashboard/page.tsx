"use client"
import React from 'react'
import DashboardLayout from './Layout'
import HomeHero from '../components/dashboard/Hero'
import { HomeCardData } from '../constants/DashboardCard'
import Card from '../reusables/Card'
const Dashboard = () => {
  return (
    <div>
       <DashboardLayout>
       <HomeHero/>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-center gap-2 my-5 py-3 px-3'>
        {HomeCardData.map((cardData)=>(<Card {...cardData} key={cardData.plan}/>))}
      </div>
       </DashboardLayout>
    </div>
  )
}

export default Dashboard
