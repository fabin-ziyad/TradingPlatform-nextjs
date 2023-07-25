import React from 'react'
import DashboardLayout from '../dashboard/Layout'
import DashboardPageComponents from '../page-components/dashboard'
import ProfilePageComponents from '../page-components/profile'

const Dashboard = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
       <DashboardLayout>
        <ProfilePageComponents/>
       </DashboardLayout>
    </div>
  )
}

export default Dashboard
