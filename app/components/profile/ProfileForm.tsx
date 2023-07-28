import {countries} from '@/app/constants/countryList'
import SelectInput from '@/app/premitives/SelectInput'
import TextArea from '@/app/premitives/TextArea'
import TextInputField from '@/app/premitives/TextInputField'
import React from 'react'
import Image from 'next/image'
const ProfileForm = () => {
    return (
        <div>


            <section className=" py-1 bg-blue-90">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-3">
                            <div className="text-center items-center flex justify-between">
                                <div className="flex items-center">
                                    <Image src="/avatar.jpg"
                                        width={50}
                                        height={50}
                                        alt="User Avatar"
                                        className="rounded-full mr-4"/>
                                    <span className="text-xl text-blue-900 font-bold">User Name</span>
                                </div>
                                <div>
                                    <button className='bg-blue-700 text-white font-bold p-2 hover:bg-white hover:text-blue-700 border border-blue-700 rounded'>Save</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blue-900 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'User Name'}
                                                placeholder='Your username'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'Email'}
                                                placeholder='Your Mail Address'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'First Name'}
                                                placeholder='Your First Name'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'Last Name'}
                                                placeholder='Your Last Name'/>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blue-900"/>

                                <h6 className="text-blue-900 text-sm mt-3 mb-6 font-bold uppercase">
                                    Contact Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'Address'}
                                                placeholder='Your Address'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'City'}
                                                placeholder='Your City'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <SelectInput label='County'
                                                options={countries}/>

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label='Postal Code' placeholder='Your ZipCode'/>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blue-900"/>

                                <h6 className="text-blue-900 text-sm mt-3 mb-6 font-bold uppercase">
                                    Important Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'Wallet Address'}
                                                placeholder='Only TRC-20 USDT wallet address accepted'
                                                required={true}/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <SelectInput label='Id Type'
                                                options={
                                                    ["Driving License", "Passport", "PAN card", "Government Id"]
                                                }/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-8/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'Identity Proof Number'}
                                                placeholder='Enter ID Proof Number'/>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProfileForm
