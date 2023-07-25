import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {useRouter} from 'next/navigation'
const SettingsModal = ({isOpen, onClose} : any) => {
    const router = useRouter()
    const menuOptions = [
        {
            option: "test1",
            path: "/"
        }, {
            option: "test2",
            path: "/"
        }, {
            option: "test3",
            path: "/"
        }
    ]
    return (
        <div className={
            `${
                isOpen ? 'fixed' : 'hidden'
            } inset-0 absolute top-1 flex items-center justify-center z-50 `
        }>
            <div className="fixed inset-0 bg-black opacity-50 "
                onClick={onClose}></div>
            <div className="absolute top-[10%] bg-white p-6 rounded-lg shadow-lg z-10 w-[90%] ">
                <div className="flex items-center mb-4">
                    <img src="./avatar.jpg" alt="User Avatar" className="w-12 h-12 rounded-full mr-4"/>
                    <span className="text-xl text-gray-400 font-bold">User Name</span>
                </div>
                <ul className="mb-4 text-gray-400 ">
                    {
                    menuOptions.map((option) => (
                        <li key={
                                option.option
                            }
                            className="mb-2 p-2 cursor-pointer"
                            onClick={
                                () => router.push(option.path)
                        }>
                            {
                            option.option
                        }</li>
                    ))
                } </ul>
                <div className='flex justify-around'>

                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Logout
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={onClose}>
                        close
                    </button>
                </div>
            </div>
        </div>
    );

}

export default SettingsModal
