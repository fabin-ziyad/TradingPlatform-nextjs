import React from 'react'
import {GiPayMoney, GiReceiveMoney} from 'react-icons/gi'
import {BiSolidBadgeDollar} from 'react-icons/bi'
import {formatAmount} from '../utils/amountFormater';
import { IconType } from 'react-icons';
interface CardProps {
    plan: string;
    boughtCount: string;
    profitMade: number;
    investmentMade: number;
    color:string;
    percentage:number;
    direction:IconType;
}

const Card: React.FC < CardProps > = (props) => {
    return (
        <div className="w-full mx-auto overflow-hidden rounded-lg shadow-lg border border-yellow-400">
            <div className="px-3 py-2">
                <div className='flex justify-between gap-6'>
                    <div className={` flex items-center font-bold text-lg ${props.color} mb-2`}>
                        {props.plan}
                        <BiSolidBadgeDollar size={26} className={`ml-3 ${props.color}`}/>
                        </div>
                    <div className={`flex items-center font-bold text-md ${props.color} mb-2`}>
                        {
                        props.percentage
                    } % 
                    <span>{<props.direction/>}</span>
                    </div>
                </div>
                <p className={`p-1 my-2 text-center font-medium ${props.color}`}>Plan Overall Stats</p>
                <div className=" flex  items-center justify-around  font-bold text-blue-700 text-base">
                    <div className='flex items-center'>Total Boughts
                        <span className='ml-3'>:</span>
                    </div>
                    {props.boughtCount}
                    </div>
                <div className=" flex items-center justify-around font-bold text-blue-700 text-base">
                    <div className='flex items-center'>Investments
                        <span className='ml-3'>:</span>
                    </div>
                    {
                    formatAmount(props.investmentMade)
                }</div>
                <div className=" flex  items-center justify-around  font-bold text-blue-700 text-base">
                    <div className='flex items-center'>Profits Made
                        <span className='ml-3'>:</span>
                    </div>
                    {
                    formatAmount(props.profitMade)
                }</div>
                
            </div>
        </div>
    );
};

export default Card
