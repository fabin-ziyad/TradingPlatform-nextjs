import React from 'react'
import BottomNav from '../components/Navbars/BottomNav'
import TopNav from '../components/Navbars/TopNav'
import DesktopComponent from '../utils/DesktopFooter'
import Footer from '../components/Footer/Footer'


const DashboardLayout = ({children} : {
    children: React.ReactNode
}) => {
    
    return (
        <>
            <div className="min-h-[95vh] relative bg-white">
                <TopNav/>
                <section className='bg-white mt-5'>{children}</section>
                <Footer/>
                <BottomNav/>
            </div>
        </>
    )
}
export default DashboardLayout
