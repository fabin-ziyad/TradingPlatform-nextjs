import React from 'react';
import {LongPlans,ShortPlans} from '../components/plans/Plans';


export const ShortPlansData=[
  {title:"Beginner",days:180,return:"10 - 16 %",amount:70},
  {title:"Intermediate",days:240,return:"16 - 20 %",amount:215},
  {title:"Advanced",days:320,return:"20 - 25 %",amount:270}
]

export const LongPlansData=[
  {title:"Beginner",days:320,return:"10 - 16 %",amount:70},
  {title:"Intermediate",days:540,return:"16 - 20 %",amount:215},
  {title:"Advanced",days:750,return:"20 - 25 %",amount:270}
]
export const PlansData = [
  {
    title: 'Short Term Plans',
    content: <ShortPlans shortplans={ShortPlansData}/> ,
  },
  {
    title: 'Long Term Plans',
    content: <LongPlans longplans={LongPlansData}/>, // Replace this with the actual content for Long Term Plans
  },
];
