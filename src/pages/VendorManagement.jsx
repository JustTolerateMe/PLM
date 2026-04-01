import React from 'react';
import { 
  Truck, 
  MapPin, 
  Star, 
  Clock, 
  Activity, 
  CheckCircle, 
  AlertCircle,
  FileText,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Zap
} from 'lucide-react';

const VendorCard = ({ name, location, rating, capability, status, leadTime }) => (
  <div className="bg-white rounded-2xl border border-enterprise-gray-200 shadow-sm p-6 hover:shadow-md transition-all group cursor-pointer">
    <div className="flex justify-between items-start mb-6">
       <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-xl bg-enterprise-gray-100 flex items-center justify-center text-enterprise-gray-400 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
            <Truck className="h-6 w-6" />
          </div>
          <div>
             <h4 className="font-bold text-enterprise-gray-900">{name}</h4>
             <p className="text-[10px] text-enterprise-gray-400 flex items-center uppercase tracking-widest font-bold">
                <MapPin className="h-3 w-3 mr-1" /> {location}
             </p>
          </div>
       </div>
       <div className="flex items-center space-x-1 bg-enterprise-gray-50 px-2 py-1 rounded-lg border border-enterprise-gray-100 italic">
          <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold text-enterprise-gray-800">{rating}</span>
       </div>
    </div>
    
    <div className="space-y-4 mb-6">
       <div className="flex justify-between text-xs font-bold text-enterprise-gray-600">
          <span>Capability</span>
          <span className="text-primary-600 italic underline decoration-primary-100">{capability}</span>
       </div>
       <div className="flex justify-between text-xs font-bold text-enterprise-gray-600">
          <span>Lead Time</span>
          <span className="text-enterprise-gray-800">{leadTime}</span>
       </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-enterprise-gray-50">
       <div className={cn(
         "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest",
         status === 'Active' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
       )}>
         {status}
       </div>
       <button className="text-[10px] font-bold text-primary-600 flex items-center group-hover:translate-x-1 transition-all uppercase tracking-tighter">
          Vendor Scorecard <ChevronRight className="h-3 w-3 ml-1" />
       </button>
    </div>
  </div>
);

const VendorManagement = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Truck className="h-3 w-3" />
             <span>Phase 07: Global Sourcing & Supplier Network</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Vendor Management</h2>
          <p className="text-enterprise-gray-500 mt-1">Monitor supplier performance, compliance, and production capacities.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary space-x-2 px-6">
            <Zap className="h-4 w-4" />
            <span>AI Sourcing Assistant</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <VendorCard 
            name="Linen Masters Co." 
            location="Vietnam, Ho Chi Minh" 
            rating="4.9" 
            capability="Luxury Linen & Knits" 
            status="Active" 
            leadTime="45-60 Days" 
         />
         <VendorCard 
            name="Global Tex Solutions" 
            location="China, Zhejiang" 
            rating="4.7" 
            capability="Activewear & Tech-Fibers" 
            status="Active" 
            leadTime="30-45 Days" 
         />
         <VendorCard 
            name="Mumbai Craft Hub" 
            location="India, Maharashtra" 
            rating="4.8" 
            capability="Woven Outerwear" 
            status="Active" 
            leadTime="50-70 Days" 
         />
      </div>

      <div className="bg-white rounded-2xl border border-enterprise-gray-200 shadow-sm p-8">
         <h3 className="text-lg font-bold text-enterprise-gray-900 mb-8 flex items-center">
            <Activity className="mr-2 h-5 w-5 text-primary-600" />
            Vendor Risk & Performance Matrix
         </h3>
         
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
               <div className="bg-enterprise-gray-50 p-10 rounded-2xl border border-enterprise-gray-100 min-h-[300px] flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                     <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="black" fill="none" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="black" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="black" />
                     </svg>
                  </div>
                  <div className="flex flex-col items-center">
                     <p className="text-sm font-bold text-enterprise-gray-300 italic mb-4">Live Performance Scatter Plot</p>
                     <div className="flex space-x-4">
                        <div className="bg-primary-600 p-2 rounded text-white text-[10px] font-bold shadow-lg shadow-primary-200">Linen Masters</div>
                        <div className="bg-indigo-600 p-2 rounded text-white text-[10px] font-bold shadow-lg shadow-indigo-200">Global Tex</div>
                        <div className="bg-amber-600 p-2 rounded text-white text-[10px] font-bold shadow-lg shadow-amber-200">Mumbai Craft</div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="space-y-6">
               <div className="p-6 bg-white border border-enterprise-gray-100 rounded-2xl shadow-sm">
                  <h4 className="text-sm font-bold text-enterprise-gray-400 uppercase tracking-widest mb-4">Network Status</h4>
                  <div className="space-y-4">
                     <div className="flex items-center space-x-3">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-bold text-enterprise-gray-800">Compliance: 100% Passed</span>
                     </div>
                     <div className="flex items-center space-x-3">
                        <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                        <span className="text-xs font-bold text-enterprise-gray-800">CSR Audits: On Track</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-6 bg-primary-50 border border-primary-100 rounded-2xl shadow-sm">
                  <h4 className="text-sm font-bold text-primary-900 mb-2 flex items-center">
                     <ShieldCheck className="h-4 w-4 mr-2 text-primary-600" />
                     Master Service Level
                  </h4>
                  <p className="text-xs text-primary-700 italic font-medium leading-relaxed">
                     "All tier-1 vendors are currently bound by the SS26 Master Sourcing Agreement. Quality tolerances are set at AQL 1.5."
                  </p>
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

export default VendorManagement;
