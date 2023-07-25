"use client"
import React,{useState} from 'react'
import {AiFillSetting} from 'react-icons/ai'
import SettingsModal from './Modal/SettingsModal'
const TopNav = () => {
    const [isModalOpen,setModalOpen]=useState(false)
    const handleModalToggle = () => {
        setModalOpen(!isModalOpen);
      };
  return (
        <div className="relative top-0 left-0 z-50 grid w-full h-10 grid-cols-1 px-3 bg-white border-t border-gray-200 ">

            <div className="flex items-center justify-between mt-2 ">
                <h4 className='font-extrabold text-xl text-gray-400'>Fabin Ziyad</h4>
                
                <button data-tooltip-target="tooltip-camera" type="button" className="p-1 bg-gray-100 group rounded-full hover:bg-gray-600 mr-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-400 dark:hover:bg-gray-800">
                    <AiFillSetting size={26} className='animate-rotate-icon' onClick={handleModalToggle}/>
                    <span className="sr-only">Settings</span>
                </button>
            </div>
            <SettingsModal isOpen={isModalOpen} onClose={handleModalToggle}/>
        </div>

    )
  
}

export default TopNav
