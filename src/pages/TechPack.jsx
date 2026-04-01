import React, { useState } from 'react';
import { 
  FileText, 
  Ruler, 
  Hammer, 
  Compass, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ChevronRight,
  Printer,
  Share2
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const TechPack = () => {
  const { currentProject } = usePLM();
  const [activeTab, setActiveTab] = useState('overview');

  const style = currentProject?.styles[0] || { name: 'Sample Style', id: 'STY-000', category: 'Tops' };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'measurements', label: 'Measurements (POM)', icon: Ruler },
    { id: 'construction', label: 'Construction', icon: Hammer },
    { id: 'bom', label: 'BOM', icon: Compass },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-enterprise-gray-50 rounded-xl p-8 flex items-center justify-center border border-enterprise-gray-100 min-h-[400px] relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                       <path d="M50 10 Q70 10 70 30 L65 80 L35 80 L30 30 Q30 10 50 10" stroke="black" fill="none" strokeWidth="1" />
                       <path d="M30 30 Q50 35 70 30" stroke="black" fill="none" strokeWidth="0.5" />
                    </svg>
                 </div>
                 <div className="relative text-center">
                    <p className="text-xl font-serif text-enterprise-gray-400 italic">Technical Flat Illustration</p>
                    <p className="text-xs text-enterprise-gray-300 mt-2 uppercase tracking-widest font-bold">FRONT & BACK VIEWS</p>
                 </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-enterprise-gray-400 uppercase tracking-widest mb-3">Style Description</h4>
                  <p className="text-enterprise-gray-700 leading-relaxed font-serif text-lg">
                    Oversized button-down shirt featuring dropped shoulders, wide cuffs, and a curved hemline. 
                    Constructed from premium organic heavy linen with contrast stitching details.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-enterprise-gray-100 rounded-lg">
                    <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase">Season</p>
                    <p className="text-sm font-bold text-enterprise-gray-800">{currentProject?.season}</p>
                  </div>
                  <div className="p-4 bg-white border border-enterprise-gray-100 rounded-lg">
                    <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase">Category</p>
                    <p className="text-sm font-bold text-enterprise-gray-800">{style.category}</p>
                  </div>
                  <div className="p-4 bg-white border border-enterprise-gray-100 rounded-lg">
                    <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase">Brand</p>
                    <p className="text-sm font-bold text-enterprise-gray-800">APEX LUXE</p>
                  </div>
                  <div className="p-4 bg-white border border-enterprise-gray-100 rounded-lg">
                    <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase">Fit Type</p>
                    <p className="text-sm font-bold text-enterprise-gray-800">RELAXED / OVERSIZE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'measurements':
        return (
          <div className="bg-white rounded-xl border border-enterprise-gray-200 overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-enterprise-gray-100">
              <thead className="bg-enterprise-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">POM #</th>
                  <th className="px-6 py-3 text-left text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Point of Measure</th>
                  <th className="px-6 py-3 text-center text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest italic">Tol (+/-)</th>
                  <th className="px-6 py-3 text-center bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-widest">Base (M)</th>
                  <th className="px-6 py-3 text-center text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Large</th>
                  <th className="px-6 py-3 text-center text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">X-Large</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-enterprise-gray-50">
                {[
                  ['01', 'Body Length (HPS)', '3/8"', '28 1/2"', '29 1/4"', '30"'],
                  ['02', 'Chest Circumference', '1/2"', '44"', '46"', '48 1/2"'],
                  ['03', 'Shoulder Width (Seam to Seam)', '1/4"', '18"', '18 3/4"', '19 1/2"'],
                  ['04', 'Sleeve Length (CB)', '1/4"', '34 1/2"', '35 1/4"', '36"'],
                  ['05', 'Neck Width (Edge to Edge)', '1/8"', '7 1/2"', '7 3/4"', '8"'],
                  ['06', 'Armhole Depth (Straight)', '1/4"', '10"', '10 1/2"', '11"'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-enterprise-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-enterprise-gray-400">{row[0]}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-enterprise-gray-800">{row[1]}</td>
                    <td className="px-6 py-4 text-xs text-center text-enterprise-gray-400 italic">{row[2]}</td>
                    <td className="px-6 py-4 text-xs text-center font-bold text-primary-700 bg-primary-50/30">{row[3]}</td>
                    <td className="px-6 py-4 text-xs text-center text-enterprise-gray-600">{row[4]}</td>
                    <td className="px-6 py-4 text-xs text-center text-enterprise-gray-600">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'construction':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-6">
                <h4 className="text-base font-bold text-enterprise-gray-800 border-b border-enterprise-gray-100 pb-2">Stitching Standards</h4>
                <div className="space-y-4">
                   {[
                     { label: 'Topstitching', value: '1/4" Single Needle', note: 'All main seams' },
                     { label: 'Hemming', value: '1/2" Clean Finish', note: 'Curved hem edge' },
                     { label: 'Buttonholes', value: 'Keyhole style', note: 'Contrast thread' },
                     { label: 'Labeling', value: 'Centered at CB Neck', note: 'Satin printed' }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-start group">
                        <div>
                           <p className="text-xs font-bold text-enterprise-gray-400 uppercase tracking-widest">{item.label}</p>
                           <p className="text-sm font-semibold text-enterprise-gray-800 italic underline decoration-primary-200">{item.value}</p>
                        </div>
                        <span className="text-[10px] text-enterprise-gray-400 italic bg-white px-2 py-1 border border-enterprise-gray-50 rounded group-hover:border-primary-100 transition-colors">{item.note}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-enterprise-gray-900 rounded-xl p-8 text-white flex flex-col items-center justify-center relative overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20">BUILD_ID: CONSTR_09-B</div>
                <Compass className="h-20 w-20 text-primary-400 mb-6 opacity-20" />
                <p className="text-center text-sm italic font-medium max-w-xs text-enterprise-gray-300">
                  Detailed construction diagrams showing internal seam finishes and reinforcement logic.
                </p>
                <button className="mt-8 px-6 py-3 bg-white text-enterprise-gray-900 rounded-lg text-xs font-bold hover:bg-primary-50 transition-colors shadow-lg shadow-white/5 uppercase tracking-widest">Open Detail Viewer</button>
             </div>
          </div>
        );
      case 'bom':
         return (
           <div className="bg-white rounded-xl border border-enterprise-gray-200 overflow-hidden shadow-sm">
             <table className="min-w-full divide-y divide-enterprise-gray-100">
               <thead className="bg-enterprise-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Type</th>
                   <th className="px-6 py-3 text-left text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Material / Item</th>
                   <th className="px-6 py-3 text-left text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Supplier</th>
                   <th className="px-6 py-3 text-center text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Consumption</th>
                   <th className="px-6 py-3 text-right text-[10px] font-bold text-enterprise-gray-500 uppercase tracking-widest">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-enterprise-gray-50">
                 {[
                   ['Fabric', '100% Organic Heavy Linen', 'Linen Masters Co.', '1.85 Yds', 'Confirmed'],
                   ['Trim', 'Recycled Horn Buttons (20L)', 'EcoTrims Ltd.', '7 Pcs', 'Pending'],
                   ['Thread', 'Recyclable Polyester Thread', 'A&E Threads', 'As Required', 'Confirmed'],
                   ['Label', 'Organic Cotton Printed Logo', 'Main Group Labels', '1 Pc', 'In Design'],
                   ['Packaging', 'Compostable Polybag (Large)', 'EcoPack Solutions', '1 Pc', 'Pending'],
                 ].map((row, i) => (
                   <tr key={i} className="hover:bg-enterprise-gray-50/50 transition-colors">
                     <td className="px-6 py-4 text-xs font-bold text-enterprise-gray-400 uppercase">{row[0]}</td>
                     <td className="px-6 py-4 text-xs font-bold text-enterprise-gray-800">{row[1]}</td>
                     <td className="px-6 py-4 text-xs text-enterprise-gray-600 italic underline decoration-enterprise-gray-100 underline-offset-4">{row[2]}</td>
                     <td className="px-6 py-4 text-xs text-center font-mono text-enterprise-gray-500">{row[3]}</td>
                     <td className="px-6 py-4 text-right">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest",
                          row[4] === 'Confirmed' ? "bg-green-100 text-green-700 border border-green-200" :
                          row[4] === 'In Design' ? "bg-primary-100 text-primary-700 border border-primary-200" :
                          "bg-amber-100 text-amber-700 border border-amber-200"
                        )}>
                          {row[4]}
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         );
      default: return null;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div className="flex items-center space-x-6">
           <div className="h-20 w-20 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200 italic font-serif text-3xl font-bold">L</div>
           <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
                 <FileText className="h-3 w-3" />
                 <span>Phase 03: Technical Specification</span>
              </div>
              <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">{style.name}</h2>
              <p className="text-enterprise-gray-500 mt-1 flex items-center">
                 <span className="font-bold text-enterprise-gray-800 tracking-tighter mr-2">{style.id}</span>
                 <span className="h-1 w-1 bg-enterprise-gray-300 rounded-full mx-2"></span>
                 <span>Revision: B-02</span>
                 <span className="h-1 w-1 bg-enterprise-gray-300 rounded-full mx-2"></span>
                 <span className="flex items-center text-green-600 font-bold ml-2">
                    <CheckCircle className="h-3 w-3 mr-1" /> Ready for Sampling
                 </span>
              </p>
           </div>
        </div>
        <div className="flex space-x-3">
          <button className="p-2 border border-enterprise-gray-200 rounded-lg text-enterprise-gray-400 hover:text-enterprise-gray-600 hover:bg-white shadow-sm transition-all"><Printer className="h-5 w-5" /></button>
          <button className="p-2 border border-enterprise-gray-200 rounded-lg text-enterprise-gray-400 hover:text-enterprise-gray-600 hover:bg-white shadow-sm transition-all"><Share2 className="h-5 w-5" /></button>
          <button className="btn-primary px-6">Release to Vendor</button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-enterprise-gray-200 relative">
        <nav className="flex space-x-12 px-2" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "py-6 px-1 border-b-4 text-sm font-bold flex items-center group transition-all relative top-[2px]",
                activeTab === tab.id
                  ? "border-primary-600 text-primary-700 font-black"
                  : "border-transparent text-enterprise-gray-400 hover:text-enterprise-gray-600 hover:border-enterprise-gray-300"
              )}
            >
              <tab.icon className={cn(
                "mr-3 h-5 w-5 transition-colors",
                activeTab === tab.id ? "text-primary-600" : "text-enterprise-gray-300 group-hover:text-enterprise-gray-400"
              )} />
              {tab.label}
              {tab.id === 'measurements' && <span className="ml-2 bg-enterprise-gray-100 text-enterprise-gray-500 px-2 py-0.5 rounded-full text-[10px] font-bold">UPDATED</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="pt-4 min-h-[500px]">
         {renderTabContent()}
      </div>

      <div className="bg-enterprise-gray-50 p-6 rounded-2xl border border-enterprise-gray-200 flex justify-between items-center mt-12">
         <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shadow-inner">
               <Clock className="h-5 w-5" />
            </div>
            <div>
               <p className="text-sm font-bold text-enterprise-gray-800 italic leading-tight">Version Control Analytics</p>
               <p className="text-xs text-enterprise-gray-500">AI has cross-referenced these measurements against 4,200 historic data points. Deviation is 0.2%.</p>
            </div>
         </div>
         <button className="text-primary-600 text-xs font-bold flex items-center py-2 px-4 hover:bg-white rounded-lg transition-all border border-transparent hover:border-primary-100">
            View Analytics History <ChevronRight className="h-4 w-4 ml-1" />
         </button>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default TechPack;
