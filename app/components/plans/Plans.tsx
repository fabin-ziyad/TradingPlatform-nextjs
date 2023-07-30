"use client"
import { useState } from "react";
import SubscriptionModal from "./subscription/SubscriptionModal";

export const ShortPlans = ({ shortplans }: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null); 
  
    const openModal = (plan: any) => {
      setSelectedPlan(plan);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedPlan(null); 
      setIsModalOpen(false);
    };
  
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 ">
        {shortplans.map((plan: any,index:any) => (
          <div
            className="bg-white text-blue-900 lg:text-lg border border-blue-400 font-bold shadow-lg rounded-lg p-6 mx-auto w-full lg:w-5/6"
            key={index} 
          >
            <div className="flex justify-between px-3">
              <h6>{plan.title}</h6>
              <h6>Days</h6>
            </div>
            <div className="flex justify-between px-2 my-2">
              <h4>{plan.amount}USDT</h4>
              <h4>{plan.days}</h4>
            </div>
            <div className="flex justify-between px-2 mt-4">
              <h4>Returns(Monthly)</h4>
            </div>
            <div className="flex justify-between px-2 my-2">
              <h4>{plan.return}</h4>
              <h4
                className="text-blue-400 cursor-pointer border-b border-blue-700"
                onClick={() => openModal(plan)} 
              >
                History
              </h4>
            </div>
            {isModalOpen && selectedPlan && (
              <SubscriptionModal
                isOpen={isModalOpen}
                onClose={closeModal}
                plan={selectedPlan} 
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  

export const LongPlans = ({longplans}:any) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 ">
            <div className="bg-white text-blue-900 lg:text-lg border border-red-400 font-bold shadow-lg rounded-lg p-6 mx-auto w-full lg:w-5/6">
                <div className='flex justify-between px-3'>
                    <h6>Beginner</h6>
                    <h6>Days</h6>
                </div>
                <div className='flex justify-between px-2 my-2'>
                    <h4>70 USDT</h4>
                    <h4>320</h4>
                </div>
                <div className='flex justify-between px-2 mt-4'>
                    <h4>Returns(Monthly)</h4>
                </div>
                <div className='flex justify-between px-2 my-2'>
                    <h4>10 - 16 %</h4>
                    <h4 className='text-blue-400 cursor-pointer border-b border-blue-700  '>History</h4>
                </div>
            </div>
            <div className="bg-white text-blue-900 lg:text-lg font-bold border border-red-400 shadow-lg rounded-lg p-6 mx-auto w-full lg:w-5/6">
                <div className='flex justify-between px-3'>
                    <h6>Intermediate</h6>
                    <h6>Days</h6>
                </div>
                <div className='flex justify-between px-2 my-2'>
                    <h4>215USDT</h4>
                    <h4>540</h4>
                </div>
                <div className='flex justify-between px-2 mt-4'>
                    <h4>Porfit(Monthly)</h4>
                </div>
                <div className='flex justify-between px-2 my-2'>
                    <h4>16 - 20 %</h4>
                    <h4 className='text-blue-400 cursor-pointer border-b border-blue-700  '>History</h4>
                </div>
            </div>
            <div className="bg-white text-blue-900 lg:text-lg font-bold border border-red-400 shadow-lg rounded-lg p-6 mx-auto w-full lg:w-5/6">
                <div className='flex justify-between px-3'>
                    <h6>Advanced</h6>
                    <h6>Days</h6>
                </div>
                <div className='flex justify-between px-2 my-2'>
                    <h4>240USDT</h4>
                    <h4>750</h4>
                </div>
                <div className='flex justify-between px-2 mt-4'>
                    <h4>Profit (Monthly)</h4>
                </div>
                <div className='flex justify-between px-2 my-2'>
                    <h4>20 - 25 %</h4>
                    <h4 className='text-blue-400 cursor-pointer border-b border-blue-700  '>History</h4>
                </div>
            </div>
        </div>
    )
}
