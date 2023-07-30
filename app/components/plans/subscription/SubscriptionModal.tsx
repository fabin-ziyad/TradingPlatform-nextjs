import TextInputField from '@/app/premitives/TextInputField';
import Link from 'next/link';
import React from 'react';
import { FormatDate } from '@/app/utils/Format';
import Checkbox from '@/app/premitives/CheckBox';
const SubscriptionModal = ({isOpen, onClose,plan} : any) => {
    const Today = new Date();
    const subscriptionEndDate=new Date(Today)
    subscriptionEndDate.setDate(Today.getDate() + plan.days)
    return (
        <div className={
            `${
                isOpen ? 'fixed' : 'hidden'
            } inset-0 flex items-center justify-center z-50`
        }>
            <div className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}></div>
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg z-10 w-[90%] flex flex-col items-center ">
                <div className="flex justify-between w-full">
                    <h2 className="text-2xl font-bold">Subscription Modal</h2>
                    <div className='bg-gray-200 p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer"
                            onClick={onClose}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
                <hr className="mt-6 border-b-1 border-blue-900"/>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full max-h-96 overflow-scroll ">
                    <div className='grid grid-cols-1 '>
                        <div className='px-3 py-3'>
                            <h4>Terms (Days)</h4>
                            <h4>{plan.days}</h4>
                        </div>
                        <div className='px-3 py-3'>
                            <TextInputField label='Amount you Invest'
                                value={plan.amount} disabled={true}/>
                            <p>14344 USDT available</p>
                        </div>
                        <div className='px-3 py-3'>
                            <div className="w-full bg-gray-100 text-black py-2 px-2">
                                <p className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                                    </svg>

                                    The annualized rate of return is subject to adjustment, please refer to the details here.</p>
                                <p className='flex items-center gap-4 mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-[40px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                                    </svg>
                                    Earnings are not calculated in fiat currency: the assets will be returned to the spot account after the subscription period ends.</p>
                            </div>
                        </div>
                    </div>
                    <div className='gird grid-cols-1'>
                        <div className="px-3 py-3">
                            <h3>Overview</h3>
                            <div className="flex justify-between py-5">
                                <h5>Start Date</h5>
                                <h5>{FormatDate(Today)}</h5>
                            </div>
                            <div className="flex justify-between py-5">
                                <h5>End Date</h5>
                                <h5>{FormatDate(subscriptionEndDate)}</h5>
                            </div>
                            <div className="flex justify-between py-5">
                                <h5>Estimate Return(M)</h5>
                                <h5>{plan.return}</h5>
                            </div>
                            <div>
                                <Checkbox label=' I have read and agree Cunbibao Service Agreement' checked={false} onChange={()=>""}/>
                                <button className='p-2 bg-blue-500 text-white hover:bg-blue-800 hover:text-white rounded w-full'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;
