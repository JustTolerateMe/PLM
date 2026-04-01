import React from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  Sparkles, 
  Search, 
  ClipboardList, 
  Scissors, 
  Box, 
  Truck, 
  DollarSign, 
  Calendar, 
  BarChart3,
  Settings,
  HelpCircle,
  FileText
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SidebarItem = ({ icon: Icon, label, id, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={cn(
      "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group mb-1",
      isActive 
        ? "bg-primary-50 text-primary-700 shadow-sm ring-1 ring-primary-100" 
        : "text-enterprise-gray-500 hover:bg-enterprise-gray-100 hover:text-enterprise-gray-900"
    )}
  >
    <Icon className={cn(
      "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
      isActive ? "text-primary-600" : "text-enterprise-gray-400 group-hover:text-enterprise-gray-600"
    )} />
    <span>{label}</span>
  </button>
);

const Sidebar = () => {
  const { activeModule, setActiveModule } = usePLM();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects / Seasons', icon: Layers },
    { id: 'intake', label: 'AI Brief Intake', icon: Sparkles },
    { id: 'trend', label: 'Trend Research', icon: Search },
    { id: 'planning', label: 'Collection Planning', icon: ClipboardList },
    { id: 'techpack', label: 'Tech Packs', icon: FileText },
    { id: 'digital', label: 'Digital Design', icon: Scissors },
    { id: 'sampling', label: 'Sampling', icon: Box },
    { id: 'costing', label: 'Costing', icon: DollarSign },
    { id: 'vendors', label: 'Vendor Management', icon: Truck },
    { id: 'critical-path', label: 'Critical Path', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 bg-white border-r border-enterprise-gray-200 flex flex-col h-full z-20 shadow-sm">
      <div className="p-6 flex items-center mb-4">
        <div className="bg-primary-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-md">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-enterprise-gray-900">
          Apex<span className="text-primary-600">PLM</span>
        </h1>
      </div>
      
      <nav className="flex-1 px-4 overflow-y-auto space-y-1">
        <p className="px-3 text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest mb-2 mt-4 ml-1">Core Modules</p>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            {...item}
            isActive={activeModule === item.id}
            onClick={setActiveModule}
          />
        ))}
      </nav>
      
      <div className="p-4 border-t border-enterprise-gray-100 flex flex-col space-y-1">
        <SidebarItem icon={Settings} label="Settings" id="settings" onClick={() => {}} />
        <SidebarItem icon={HelpCircle} label="Help Center" id="help" onClick={() => {}} />
      </div>
    </aside>
  );
};

export default Sidebar;
