import React from 'react';
import { Search, Bell, User, ChevronDown, Menu } from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const TopBar = () => {
  const { currentProject } = usePLM();

  return (
    <header className="h-16 bg-white border-b border-enterprise-gray-200 flex items-center justify-between px-8 z-10 shadow-sm">
      <div className="flex items-center flex-1">
        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-enterprise-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-enterprise-gray-200 rounded-md leading-5 bg-enterprise-gray-50 placeholder-enterprise-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all"
            placeholder="Search styles, materials, vendors..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {currentProject && (
          <div className="hidden md:flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold mr-4 border border-primary-100">
            Current: {currentProject.name}
          </div>
        )}
        
        <button className="p-2 text-enterprise-gray-400 hover:text-enterprise-gray-600 transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        
        <div className="h-8 w-px bg-enterprise-gray-200 mx-2"></div>
        
        <button className="flex items-center space-x-3 text-sm font-medium text-enterprise-gray-700 hover:text-enterprise-gray-900 transition-all p-1 rounded-lg hover:bg-enterprise-gray-50">
          <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 border border-primary-200 shadow-sm">
            <User className="h-5 w-5" />
          </div>
          <div className="hidden md:flex flex-col items-start leading-tight">
            <span className="font-bold">Alex Rivera</span>
            <span className="text-[10px] text-enterprise-gray-500">Design Director</span>
          </div>
          <ChevronDown className="h-4 w-4 text-enterprise-gray-400" />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
