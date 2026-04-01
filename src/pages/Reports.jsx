import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Target, 
  Download, 
  ArrowRight,
  Layers,
  Activity,
  Globe,
  Sparkles
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const Reports = () => {
  const { currentProject } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <BarChart3 className="h-3 w-3" />
             <span>Business Intelligence & Product Analytics</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Executive Performance Reports</h2>
          <p className="text-enterprise-gray-500 mt-1">Cross-collection analytical summaries and portfolio health checks.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-6 py-3 bg-enterprise-gray-900 text-white rounded-xl text-sm font-bold hover:bg-enterprise-gray-800 transition-all shadow-lg active:scale-95 uppercase tracking-widest leading-none">
            <Download className="h-4 w-4 mr-2" /> PDF / XLS
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-2xl border border-enterprise-gray-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
               <TrendingUp className="h-32 w-32" />
            </div>
            <h3 className="text-lg font-bold text-enterprise-gray-900 mb-8 flex items-center">
               <Activity className="mr-2 h-5 w-5 text-primary-600" />
               Portfolio Pipeline Health
            </h3>
            
            <div className="space-y-8 relative z-10">
               {[
                 { label: 'Collection Planning (Phase 02)', active: 12, completed: 86, color: 'bg-primary-600' },
                 { label: 'Technical Development (Phase 03)', active: 45, completed: 32, color: 'bg-indigo-600' },
                 { label: 'Sampling & Validation (Phase 05)', active: 18, completed: 12, color: 'bg-amber-500' },
                 { label: 'Sourcing & Production (Phase 07)', active: 8, completed: 5, color: 'bg-green-600' }
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-xs font-bold text-enterprise-gray-400 uppercase tracking-widest">{item.label}</span>
                       <span className="text-sm font-bold text-enterprise-gray-900">{item.completed}% Completed</span>
                    </div>
                    <div className="h-3 bg-enterprise-gray-100 rounded-full overflow-hidden flex">
                       <div className={cn("h-full", item.color)} style={{ width: `${item.completed}%` }}></div>
                       <div className="h-full bg-enterprise-gray-200 opacity-50" style={{ width: `${item.active}%` }}></div>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-enterprise-gray-50 flex items-center justify-between">
               <div className="flex -space-x-2">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="h-8 w-8 rounded-full bg-enterprise-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-enterprise-gray-400 uppercase shadow-sm italic">U{i}</div>
                 ))}
               </div>
               <button className="text-primary-600 text-xs font-bold flex items-center hover:bg-primary-50 px-3 py-2 rounded-lg transition-all italic leading-tight">View Detailed Audit Log <ArrowRight className="h-3 w-3 ml-2" /></button>
            </div>
         </div>

         <div className="flex flex-col space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-enterprise-gray-200 shadow-sm flex-1 relative overflow-hidden">
               <h3 className="text-lg font-bold text-enterprise-gray-900 mb-8 flex items-center">
                  <PieChart className="mr-2 h-5 w-5 text-indigo-600" />
                  Cost & Margin Analysis (Season-to-Date)
               </h3>
               <div className="flex items-center justify-center h-48 relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                     <svg className="w-40 h-40" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="black" fill="none" strokeWidth="15" strokeDasharray="180 360" />
                     </svg>
                  </div>
                  <div className="text-center group">
                     <p className="text-4xl font-black text-enterprise-gray-900 group-hover:scale-110 transition-transform">64.2%</p>
                     <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest mt-1">Average Gross Margin</p>
                     <p className="text-xs text-green-600 font-bold mt-2 flex items-center justify-center italic leading-tight">
                        <TrendingUp className="h-3 w-3 mr-1" /> +2.4% vs Target
                     </p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-enterprise-gray-50">
                  <div className="text-center p-4 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100">
                     <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest leading-tight italic">Budget Utilized</p>
                     <p className="text-lg font-bold text-enterprise-gray-800">$4.2M</p>
                  </div>
                  <div className="text-center p-4 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100">
                     <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest leading-tight italic">Projected ROI</p>
                     <p className="text-lg font-bold text-enterprise-gray-800">3.8x</p>
                  </div>
               </div>
            </div>

            <div className="bg-primary-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group border-l-8 border-primary-500">
               <Sparkles className="absolute -top-4 -right-4 h-24 w-24 text-white opacity-10 group-hover:scale-150 transition-transform duration-1000" />
               <div className="relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 flex items-center italic">
                    <Globe className="h-3 w-3 mr-2" /> Global Market Context
                  </h4>
                  <p className="text-base font-bold leading-tight mb-4 text-primary-50 underline decoration-primary-500/50">Supply Chain Predictor</p>
                  <p className="text-sm text-primary-100 italic leading-relaxed mb-6">
                    "AI predicts a <span className="text-white font-black underline">12% increase</span> in sea-freight costs for June 2026. High recommendation to pull forward production booking for SS26 by 14 days."
                  </p>
                  <button className="w-full py-4 bg-white text-primary-900 rounded-xl text-xs font-bold hover:bg-primary-50 transition-all uppercase tracking-widest shadow-lg shadow-primary-900/40">Apply Strategic Pull-Forward</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Reports;
