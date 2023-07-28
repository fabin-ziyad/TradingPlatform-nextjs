import React from 'react'

const PlanCards = () => {
    return (<div>
        <div className="bg-white shadow-lg rounded-lg p-6 mx-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
            <img className="w-20 h-20 mx-auto rounded-full mb-4" src="./avatar.jpg" alt="Avatar"/>
                <h2 className="text-xl font-semibold mb-2">John Doe</h2>
                <p className="text-gray-600 mb-4">Frontend Developer</p>
                <div className="flex justify-center space-x-2 mb-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">Website</a>
                </div>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, arcu at commodo rhoncus, elit arcu viverra odio, eget facilisis sapien dolor eu elit.</p>
            </div>

        </div>
        )
        }
        
        export default PlanCards
