"use client"
import React from 'react'
import DashboardLayout from './Layout'
import DashboardPageComponents from '../page-components/dashboard'
const Dashboard = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
       <DashboardLayout>
        <DashboardPageComponents/>
       </DashboardLayout>
    </div>
  )
}

export default Dashboard
