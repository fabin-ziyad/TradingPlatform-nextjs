"use client"
import React, { useState } from 'react';
import { AiTwotoneHome, AiOutlineAreaChart, AiOutlineUser, AiFillQuestionCircle } from 'react-icons/ai';
import { GiTakeMyMoney } from 'react-icons/gi';
import { usePathname, useRouter } from 'next/navigation';

const BottomNav = () => {
  const router = useRouter();
  const pathName=usePathname()
 

  return (
    <div className="fixed bottom-0 left-0 z-50 grid w-full h-16 grid-cols-1 rounded-1/2 px-2 bg-gray-100 dark:bg-gray-0 dark:border-gray-200">
      <div className="flex items-center justify-evenly">
        <button
          data-tooltip-target="tooltip-microphone"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800`}
          onClick={() => router.push('/dashboard')}
        >
          <AiTwotoneHome size={26} />
          <span className="sr-only">Home</span>
        </button>

        <button
          data-tooltip-target="tooltip-camera"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 `}
          onClick={() => router.push('/plans')}
        >
          <AiOutlineAreaChart size={26} />
          <span className="sr-only">Trade Plans</span>
        </button>

        <button
          data-tooltip-target="tooltip-feedback"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 `}
          onClick={() => router.push('/earnings')}
        >
          <GiTakeMyMoney size={26} />
          <span className="sr-only">Earnings</span>
        </button>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 `}
          onClick={() => router.push('/profile')}
        >
          <AiOutlineUser size={26} />
          <span className="sr-only">Profile</span>
        </button>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 `}
          onClick={() => router.push('/about')}
        >
          <AiFillQuestionCircle size={26} />
          <span className="sr-only">About us</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
