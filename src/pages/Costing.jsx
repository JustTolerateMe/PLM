import React from 'react';
import { 
  DollarSign, 
  Target, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  PieChart, 
  Calculator,
  Download,
  Share2,
  AlertCircle
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const CostRow = ({ label, target, actual, variance }) => {
  const isPositive = variance.startsWith('+');
  return (
    <div className="flex items-center justify-between p-4 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100 group hover:bg-white transition-all hover:shadow-sm">
       <div className="flex-1">
          <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest leading-none mb-1">{label}</p>
          <div className="flex items-baseline space-x-3">
             <span className="text-lg font-bold text-enterprise-gray-800">${actual}</span>
             <span className="text-xs text-enterprise-gray-400 font-medium">Target: ${target}</span>
          </div>
       </div>
       <div className="text-right">
          <p className={cn(
            "text-xs font-black italic",
            isPositive ? "text-red-500" : "text-green-600"
          )}>
            {variance}
          </p>
          <p className="text-[9px] text-enterprise-gray-400 font-bold uppercase tracking-tighter">Variance</p>
       </div>
    </div>
  );
};

const Costing = () => {
  const { currentProject } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <DollarSign className="h-3 w-3" />
             <span>Phase 06: Financial Engineering & Margin Analysis</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Product Costing Workspace</h2>
          <p className="text-enterprise-gray-500 mt-1">Manage margin targets and scenario comparisons for <span className="font-bold text-enterprise-gray-700">{currentProject?.name}</span>.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-enterprise-gray-200 rounded-lg text-sm font-semibold text-enterprise-gray-600 hover:bg-white transition-all shadow-sm">
            <Download className="h-4 w-4 mr-2" /> Export CBD
          </button>
          <button className="btn-primary space-x-2 px-6">
            <Calculator className="h-4 w-4" />
            <span>Recalculate</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-enterprise-gray-200 shadow-sm">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-enterprise-gray-900">Cost Breakdown (CBD)</h3>
                  <div className="bg-primary-50 px-3 py-1 rounded-full text-[10px] font-bold text-primary-700 uppercase tracking-widest border border-primary-100">AI ESTIMATE ACCURACY: 96%</div>
               </div>
               
               <div className="space-y-4">
                  <CostRow label="Fabrication (FOB)" target="18.50" actual="19.20" variance="+3.8%" />
                  <CostRow label="Trim & Accessories" target="2.10" actual="1.95" variance="-7.1%" />
                  <CostRow label="Labor (CMT)" target="9.50" actual="9.00" variance="-5.3%" />
                  <CostRow label="Wash & Finishing" target="1.80" actual="1.80" variance="0.0%" />
                  <CostRow label="Overhead & Duty" target="4.20" actual="4.50" variance="+7.1%" />
                  <CostRow label="Freight (LDP)" target="2.40" actual="2.25" variance="-6.2%" />
               </div>

               <div className="mt-12 pt-8 border-t-2 border-enterprise-gray-900 flex justify-between items-center bg-enterprise-gray-900 p-8 rounded-b-2xl text-white -mx-8 -mb-8">
                  <div>
                     <p className="text-[10px] font-bold text-primary-400 uppercase tracking-widest mb-1 italic">Total Item Cost (LDP)</p>
                     <p className="text-4xl font-bold">$38.70</p>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-bold text-primary-400 uppercase tracking-widest mb-1 italic">Calculated First Margin</p>
                     <p className="text-4xl font-bold text-green-400">67.5%</p>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-enterprise-gray-200 shadow-sm flex items-center justify-between">
               <div className="flex items-center space-x-6">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                     <AlertCircle className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="text-base font-bold text-enterprise-gray-900">Margin Alert!</h4>
                     <p className="text-sm text-enterprise-gray-500">Fabric costs have increased by 3.8% due to recycled linen premiums. AI recommends exploring alternate vendors in Vietnam for CMT offset.</p>
                  </div>
               </div>
               <button className="text-primary-600 text-sm font-bold flex items-center hover:bg-primary-50 px-4 py-2 rounded-lg transition-all">
                  Run Alternate Scenarios <ArrowRight className="ml-2 h-4 w-4" />
               </button>
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-900 to-indigo-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl italic pointer-events-none">$$$</div>
               <h3 className="text-lg font-bold mb-8 flex items-center text-primary-300">
                  <Target className="mr-2 h-5 w-5" />
                  Target Comparison
               </h3>
               
               <div className="space-y-8">
                  <div>
                     <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold text-primary-200">Wholesale Target</span>
                        <span className="text-lg font-bold">$54.00</span>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-400 w-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold text-primary-200">Retail MSRP</span>
                        <span className="text-lg font-bold">$120.00</span>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-400 w-[95%]"></div>
                     </div>
                  </div>
               </div>

               <div className="mt-12 space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold">
                     <span className="text-primary-300">Markup Factor</span>
                     <span>3.1x</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                     <span className="text-primary-300">Contribution</span>
                     <span>$81.30</span>
                  </div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm italic text-center">
               <PieChart className="h-12 w-12 text-enterprise-gray-100 mx-auto mb-4" />
               <h3 className="text-sm font-bold text-enterprise-gray-900 mb-2">Cost Scenario B</h3>
               <p className="text-xs text-enterprise-gray-500 mb-6">Simulation: Moving production to India (Mumbai Cluster) for 20% tariff reduction.</p>
               <button className="w-full py-3 bg-enterprise-gray-900 text-white rounded-xl text-xs font-bold hover:bg-enterprise-gray-800 transition-all uppercase tracking-widest shadow-lg">Apply Scenario</button>
            </div>
         </div>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Costing;
