import React from 'react'
import DashboardLayout from '../dashboard/Layout'
import ProfileForm from '../components/profile/ProfileForm'

const Dashboard = () => {
    return (
        <div>
            <DashboardLayout>
                <ProfileForm/>
            </DashboardLayout>
        </div>
    )
}

export default Dashboard
