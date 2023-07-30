"use client"
import Link from 'next/link';
import React, { useState } from 'react';

// TabItems
interface TabItemProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  export const TabItem: React.FC<TabItemProps> = ({ title, isActive, onClick }) => {
    return (
      <li className="mr-2">
        <Link
          href="#"
          className={`inline-flex items-center justify-center p-4 border-b-2 ${
            isActive ? 'border-blue-600 text-blue-600 text-blue-500' : 'border-transparent text-gray-500 text-gray-400'
          } rounded-t-lg  group`}
          onClick={onClick}
        >
          {title}
        </Link>
      </li>
    );
  };
  
  
// Tabs
interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className='w-full'>
      <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            title={tab.title}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </ul>
      <div className="p-4 w-full">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
