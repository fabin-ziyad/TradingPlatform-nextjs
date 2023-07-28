"use client"
import React,{useState,useEffect} from 'react';
import { AiTwotoneHome, AiOutlineAreaChart, AiOutlineUser, AiFillQuestionCircle } from 'react-icons/ai';
import { GiTakeMyMoney } from 'react-icons/gi';
import {useRouter,usePathname } from 'next/navigation';

const BottomNav = () => {
  const router = useRouter();
  const pathname=usePathname()
  let [selectedPath,setSelectedPath]=useState('')
  const handleRoutes = (path:string) => {
    router.push(path);
  };
  useEffect(() => {
    if (pathname !== selectedPath) {
      setSelectedPath(pathname);
    }
  }, [pathname, selectedPath]);
  
  return (
    <>   
    <div className="fixed bottom-0 left-0 z-50 grid w-full h-16 grid-cols-1 rounded-1/2 px-2  ">
      <div className="flex items-center justify-evenly rounded-[35px] bg-black">
        <button
          data-tooltip-target="tooltip-microphone"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 ${selectedPath==='/dashboard' ? ' bg-white text-gray-800':''}` }
          
        >
          <AiTwotoneHome size={26} onClick={() =>handleRoutes('/dashboard')} />
          <span className="sr-only">Home</span>
        </button>

        <button
          data-tooltip-target="tooltip-camera"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 ${selectedPath==='/dashboard/plans' ? ' bg-white text-gray-800':''}`}
          
        >
          <AiOutlineAreaChart size={26} onClick={() => handleRoutes('/dashboard/plans')}/>
          <span className="sr-only">Trade Plans</span>
        </button>

        <button
          data-tooltip-target="tooltip-feedback"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 ${selectedPath==='/dashboard/earnings' ? ' bg-white text-gray-800':''}`}
          
        >
          <GiTakeMyMoney size={26} onClick={() => handleRoutes('/earnings')}/>
          <span className="sr-only">Earnings</span>
        </button>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 ${selectedPath==='/profile' ? '  bg-white text-gray-800':''}`}
          
        >
          <AiOutlineUser size={26} onClick={() => handleRoutes('/profile')}/>
          <span className="sr-only">Profile</span>
        </button>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className={`p-2.5 group rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 ${selectedPath==='/about' ? ' bg-white text-gray-800':''}`}
          
        >
          <AiFillQuestionCircle size={26} onClick={() => handleRoutes('/about')}/>
          <span className="sr-only">About us</span>
        </button>
      </div>
    </div>
    </>

  );
};

export default BottomNav;

