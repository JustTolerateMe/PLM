import React from 'react';
import { 
  Plus, 
  Filter, 
  Download, 
  ArrowRight, 
  MoreHorizontal, 
  BarChart2, 
  Layers,
  LayoutGrid,
  List
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const StyleCard = ({ style }) => (
  <div className="bg-white border border-enterprise-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow group flex items-start space-x-4">
    <div className="h-20 w-20 bg-enterprise-gray-50 rounded-lg flex items-center justify-center border border-enterprise-gray-100 flex-shrink-0 group-hover:bg-primary-50 transition-colors overflow-hidden relative">
      <div className="text-[10px] text-enterprise-gray-300 font-bold italic rotate-12">SKETCH</div>
      {/* Simulation of a placeholder sketch */}
      <svg className="absolute inset-0 opacity-10" viewBox="0 0 100 100">
         <path d="M50 10 Q70 10 70 30 L65 80 L35 80 L30 30 Q30 10 50 10" stroke="currentColor" fill="none" strokeWidth="2" />
      </svg>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
        <h4 className="text-sm font-bold text-enterprise-gray-900 truncate">{style.name}</h4>
        <span className={cn(
          "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
          style.status === 'Approved' ? "bg-green-100 text-green-700" :
          style.status === 'Sampling' ? "bg-amber-100 text-amber-700" :
          "bg-primary-100 text-primary-700"
        )}>
          {style.status}
        </span>
      </div>
      <p className="text-[10px] text-enterprise-gray-400 font-medium uppercase tracking-widest mt-0.5">{style.category} • {style.id}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-bold text-enterprise-gray-800">{style.price}</span>
        <button className="text-enterprise-gray-400 hover:text-primary-600 transition-colors">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const CollectionPlanning = () => {
  const { currentProject } = usePLM();

  const styles = currentProject?.styles || [];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Layers className="h-3 w-3" />
             <span>Phase 02: Assortment & Range Planning</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Collection Planning</h2>
          <p className="text-enterprise-gray-500 mt-1">Manage style architecture and assortment breakdown for <span className="font-bold text-enterprise-gray-700">{currentProject?.name}</span>.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary space-x-2 px-6">
            <Plus className="h-4 w-4" />
            <span>Add Style</span>
          </button>
        </div>
      </header>

      {/* Assortment Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm col-span-3">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-bold text-enterprise-gray-900">Range Plan Overview</h3>
               <div className="flex space-x-2">
                  <div className="flex border border-enterprise-gray-200 rounded-lg overflow-hidden">
                     <button className="p-2 bg-enterprise-gray-50 text-enterprise-gray-900"><LayoutGrid className="h-4 w-4" /></button>
                     <button className="p-2 text-enterprise-gray-400 hover:bg-enterprise-gray-50"><List className="h-4 w-4" /></button>
                  </div>
                  <button className="flex items-center px-3 py-2 border border-enterprise-gray-200 rounded-lg text-xs font-bold text-enterprise-gray-600 hover:bg-enterprise-gray-50">
                    <Filter className="h-3 w-3 mr-2" /> Filter
                  </button>
                  <button className="flex items-center px-3 py-2 border border-enterprise-gray-200 rounded-lg text-xs font-bold text-enterprise-gray-600 hover:bg-enterprise-gray-50">
                    <Download className="h-3 w-3 mr-2" /> Bulk Edit
                  </button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
               {styles.length > 0 ? (
                 styles.map(style => <StyleCard key={style.id} style={style} />)
               ) : (
                 <div className="col-span-full py-20 flex flex-col items-center justify-center text-enterprise-gray-300 italic">
                    <Layers className="h-12 w-12 mb-4 opacity-20" />
                    <p>No styles created yet. Use AI Intake to generate styles.</p>
                 </div>
               )}
               {styles.length > 0 && (
                 <button className="border-2 border-dashed border-enterprise-gray-100 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 group hover:border-primary-300 transition-all hover:bg-primary-50/10">
                    <div className="h-10 w-10 rounded-full bg-enterprise-gray-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                       <Plus className="h-5 w-5 text-enterprise-gray-400 group-hover:text-primary-600" />
                    </div>
                    <span className="text-xs font-bold text-enterprise-gray-400 group-hover:text-primary-700">Add New Style</span>
                 </button>
               )}
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm">
               <h3 className="text-base font-bold text-enterprise-gray-900 mb-6 flex items-center">
                  <BarChart2 className="mr-2 h-4 w-4 text-primary-600" />
                  Assortment Metrics
               </h3>
               <div className="space-y-4">
                  <div>
                     <div className="flex justify-between text-xs font-bold text-enterprise-gray-600 mb-1">
                        <span>Tops</span>
                        <span>45%</span>
                     </div>
                     <div className="h-2 bg-enterprise-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-600 w-[45%]"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs font-bold text-enterprise-gray-600 mb-1">
                        <span>Bottoms</span>
                        <span>30%</span>
                     </div>
                     <div className="h-2 bg-enterprise-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-[30%]"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs font-bold text-enterprise-gray-600 mb-1">
                        <span>Outerwear</span>
                        <span>25%</span>
                     </div>
                     <div className="h-2 bg-enterprise-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[25%]"></div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 pt-6 border-t border-enterprise-gray-50 text-center">
                  <p className="text-[10px] text-enterprise-gray-400 font-bold uppercase tracking-widest mb-2">Target GM%</p>
                  <p className="text-2xl font-bold text-enterprise-gray-900">62.4%</p>
               </div>
            </div>

            <div className="bg-primary-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
               <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400 mb-4 italic leading-tight">Price Ladder Projection</h3>
               <div className="space-y-3">
                  <div className="flex justify-between items-end">
                     <div className="w-8 bg-primary-400 group-hover:bg-primary-300 transition-colors h-12 rounded-t-sm relative">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">$40</span>
                     </div>
                     <div className="w-8 bg-primary-500 h-24 rounded-t-sm relative">
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">$80</span>
                     </div>
                     <div className="w-8 bg-primary-600 h-32 rounded-t-sm relative shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">$120</span>
                     </div>
                     <div className="w-8 bg-primary-700 h-16 rounded-t-sm relative">
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">$200</span>
                     </div>
                  </div>
                  <div className="h-px bg-white/20 w-full"></div>
                  <p className="text-[10px] text-primary-200 italic mt-2">Volume concentrated at $120 price point (Core Essentials).</p>
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

export default CollectionPlanning;
