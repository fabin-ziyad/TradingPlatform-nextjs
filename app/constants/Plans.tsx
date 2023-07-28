import React from 'react';
import {LongPlans,ShortPlans} from '../components/plans/Plans';

export const PlansData = [
  {
    title: 'Short Term Plans',
    content: <ShortPlans/> ,
  },
  {
    title: 'Long Term Plans',
    content: <LongPlans/>, // Replace this with the actual content for Long Term Plans
  },
];
