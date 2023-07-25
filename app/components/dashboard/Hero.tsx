import React from 'react'
import Image from 'next/image'
import {HiMiniUserPlus,HiSpeakerWave} from 'react-icons/hi2'
import {RiChatVoiceFill} from 'react-icons/ri'
import {GiClick} from 'react-icons/gi'
const HomeHero = () => {
    return (
      <>
        <div className='relative w-full'>
            <Image src={'/banner1.png'}
                width={1200}
                height={500}
                alt='banner'
                style={
                    {
                        width: "100%",
                        height: "auto"
                    }
                }/>
            <div className='absolute top-2 left-0 w-full h-full flex items-center justify-center'>
                <h3 className='text-2xl text-gray-300 font-bold'>Lets Earn Together</h3>
            </div>
        </div>
            <div className='flex items-center justify-evenly border border-b-gray-200 shadow-md '>
                <div className='py-3 my-2 text-indigo-700'>
                  <GiClick size={28} className='cursor-pointer hover:text-blue-400'/>
                  <p>Buy</p>
                </div>
                <div className='py-3 my-2 text-indigo-700'>
                  <HiMiniUserPlus size={28} className='cursor-pointer hover:text-blue-400'/>
                  <p>Invite</p>
                </div>
                <div className='py-3 my-2 text-indigo-700'>
                  <RiChatVoiceFill size={28} className='cursor-pointer hover:text-blue-400'/>
                  <p>Chat</p>
                </div>
                <div className='py-3 my-2 text-indigo-700'>
                  <HiSpeakerWave size={28} className='cursor-pointer hover:text-blue-400'/>
                  <p>Notice</p>
                </div>
            </div>
            </>
    )
}

export default HomeHero
