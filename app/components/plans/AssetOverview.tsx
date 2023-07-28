import React from 'react'

const AssetOverview = () => {
    return (
        <div className='relative'>
            <img src='/Plans.png' className='w-full h-[300px] '/>
            <div className=' absolute top-0 left-0 right-0 bottom-0 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1  items-center px-3 py-3'>
                <div className='text-center'>
                    <h2 className='sm:text-2xl font-extrabold  lg:text-5xl'>Deposit treasure service</h2>
                    <p className='sm:text-medium  lg:text-xl mt-2'>Flexible allocation of funds, enjoy daily income</p>
                </div>
                <div className="bg-white text-blue-900 lg:text-2xl font-bold border border-blue-400 shadow-lg rounded-lg p-6 mx-auto w-full lg:w-5/6">
                    <div className='flex justify-between px-3'>
                        <h6>Holding Assets</h6>
                        <h6>Income</h6>
                    </div>
                    <div className='flex justify-between px-2 my-2'>
                        <h4>≈ 1200USDT</h4>
                        <h4>≈ 670USDT</h4>
                    </div>
                    <div className='flex justify-between px-2 mt-4'>
                        <h4>This Week</h4>
                        <h4 className='text-blue-400 cursor-pointer border-b border-blue-700 '>Account</h4>
                    </div>
                    <div className='flex justify-between px-2 my-2'>
                        <h4>≈ 120USDT</h4>
                        <h4 className='text-blue-400 cursor-pointer border-b border-blue-700  '>History</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetOverview
