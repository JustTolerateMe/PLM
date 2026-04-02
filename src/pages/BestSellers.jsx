import React from 'react';
import { TrendingUp, Star, ArrowRight, Activity, Zap } from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { motion } from 'framer-motion';

const BestSellerCard = ({ item, onSelect }) => (
  <div className="bg-white rounded-2xl border border-enterprise-gray-200 shadow-sm overflow-hidden group hover:shadow-xl hover:border-primary-200 transition-all cursor-pointer">
    <div className="h-48 overflow-hidden relative">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-enterprise-gray-900 shadow-sm flex items-center">
        <Star className="h-3 w-3 text-amber-500 mr-2" /> Top 1%
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-bold text-white tracking-tight">{item.name}</h3>
        <p className="text-xs text-white/80 font-bold uppercase tracking-widest">{item.category} • Orig. {item.originalSeason}</p>
      </div>
    </div>
    
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100">
           <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest mb-1 italic flex items-center"><Activity className="h-3 w-3 mr-1" /> Sell-Through</p>
           <p className="text-lg font-black text-enterprise-gray-900">{item.sellThrough}</p>
        </div>
        <div className="p-3 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100">
           <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest mb-1 italic flex items-center"><TrendingUp className="h-3 w-3 mr-1" /> Revenue ROI</p>
           <p className="text-lg font-black text-green-600">{item.roi}</p>
        </div>
      </div>
      
      <button 
        onClick={() => onSelect(item.id)}
        className="w-full py-3 bg-primary-600 text-white rounded-xl text-sm font-bold flex items-center justify-center hover:bg-primary-700 transition-colors shadow-md shadow-primary-200 group-hover:shadow-lg active:scale-95"
      >
        <Zap className="h-4 w-4 mr-2" />
        Create Variations
      </button>
    </div>
  </div>
);

const BestSellers = () => {
  const { bestSellers, initiateVariation } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Star className="h-3 w-3" />
             <span>Historical Data & Analytics</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Best Sellers Vault</h2>
          <p className="text-enterprise-gray-500 mt-1">Identify top-performing styles to iterate and develop into new seasonal variations.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {bestSellers.map(item => (
           <BestSellerCard key={item.id} item={item} onSelect={initiateVariation} />
         ))}
      </div>
      
      <div className="mt-8 p-6 bg-enterprise-gray-50 border border-enterprise-gray-200 rounded-2xl flex items-center justify-between">
         <div className="flex items-center space-x-4">
             <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                 <Zap className="h-5 w-5 text-primary-600" />
             </div>
             <div>
                 <p className="text-sm font-bold text-enterprise-gray-900">AI Predictive Iteration</p>
                 <p className="text-xs text-enterprise-gray-500 max-w-xl">The system has identified these styles as prime candidates for re-development based on historical performance and current WS26 market trends. Click 'Create Variations' to enter the AI Iteration Studio.</p>
             </div>
         </div>
      </div>
    </div>
  );
};

export default BestSellers;
