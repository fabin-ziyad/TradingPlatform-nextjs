import { countries } from '@/app/constants/countryList'
import SelectInput from '@/app/premitives/SelectInput'
import TextArea from '@/app/premitives/TextArea'
import TextInputField from '@/app/premitives/TextInputField'
import React from 'react'

const ProfileForm = () => {
    return (
        <div>

            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>


            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    My account
                                </h6>
                                <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                    Settings
                                </button>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextInputField label={'User Name'} placeholder='Your username'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <TextInputField label={'Email'} placeholder='Your Mail Address'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <TextInputField label={'First Name'} placeholder='Your First Name'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <TextInputField label={'Last Name'} placeholder='Your Last Name'/>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Contact Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TextInputField label={'Address'} placeholder='Your Address'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <TextInputField label={'City'} placeholder='Your City'/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <SelectInput label='County' options={countries}/>

                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                        <TextInputField label='Postal Code' placeholder='Your ZipCode'/>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300"/>

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    About Me
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <TextArea rows={4} label='About me' placeholder='Type about your self'/>
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
