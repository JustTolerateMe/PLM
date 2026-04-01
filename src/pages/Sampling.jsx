import React from 'react';
import { 
  Box, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Plus,
  MessageSquare,
  FileSearch,
  Truck,
  PackageCheck
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const SampleStage = ({ name, status, date, feedback, isActive }) => (
  <div className={cn(
    "relative flex flex-col p-6 rounded-2xl border-2 transition-all duration-500",
    isActive ? "bg-white border-primary-500 shadow-xl scale-[1.02]" : "bg-enterprise-gray-50 border-enterprise-gray-100 opacity-60"
  )}>
    <div className="flex justify-between items-start mb-4">
      <div className={cn(
        "p-2 rounded-lg",
        status === 'Approved' ? "bg-green-100" :
        status === 'Rejected' ? "bg-red-100" :
        status === 'In Progress' ? "bg-primary-100" : "bg-enterprise-gray-200"
      )}>
        {status === 'Approved' ? <CheckCircle className="h-5 w-5 text-green-600" /> :
         status === 'Rejected' ? <AlertCircle className="h-5 w-5 text-red-600" /> :
         status === 'In Progress' ? <Clock className="h-5 w-5 text-primary-600" /> :
         <PackageCheck className="h-5 w-5 text-enterprise-gray-400" />}
      </div>
      <span className={cn(
        "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest",
        status === 'Approved' ? "text-green-700" :
        status === 'Rejected' ? "text-red-700" :
        status === 'In Progress' ? "text-primary-700" : "text-enterprise-gray-500"
      )}>
        {status}
      </span>
    </div>
    <h4 className="text-base font-bold text-enterprise-gray-900 mb-1">{name}</h4>
    <p className="text-[10px] text-enterprise-gray-400 font-bold uppercase tracking-widest mb-4 italic leading-tight">{date}</p>
    
    <div className="bg-enterprise-gray-100/50 p-4 rounded-xl border border-enterprise-gray-200/50 min-h-[80px]">
       <p className="text-xs italic text-enterprise-gray-600 line-clamp-3">"{feedback}"</p>
    </div>
    
    <button className={cn(
      "mt-6 flex items-center justify-center py-2 rounded-lg text-xs font-bold transition-all",
      isActive ? "bg-primary-600 text-white shadow-lg shadow-primary-200" : "bg-enterprise-gray-200 text-enterprise-gray-500"
    )}>
      View Detail <ArrowRight className="ml-2 h-3 w-3" />
    </button>

    {!isActive && status !== 'Pending' && (
      <div className="absolute inset-0 bg-white/10 backdrop-grayscale pointer-events-none rounded-2xl"></div>
    )}
  </div>
);

const Sampling = () => {
  const { currentProject } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Truck className="h-3 w-3" />
             <span>Phase 05: Sampling & Physical Validation</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Sampling Timeline</h2>
          <p className="text-enterprise-gray-500 mt-1">Track physical sample iterations and feedback for <span className="font-bold text-enterprise-gray-700">{currentProject?.name}</span>.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary space-x-2 px-6">
            <Plus className="h-4 w-4" />
            <span>Request Sample</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
         {/* Connector Line */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-enterprise-gray-100 -translate-y-1/2 z-0 hidden lg:block"></div>

         <SampleStage 
            name="Proto Sample"
            status="Approved"
            date="Completed: Mar 15, 2026"
            feedback="Initial silhouette confirmed. Recycled linen exhibits desired hand-feel. Proceeding to fit."
            isActive={false}
         />
         <SampleStage 
            name="Fit Sample"
            status="In Progress"
            date="ETA: Apr 05, 2026"
            feedback="Adjusting armhole depth and sleeve length based on 3D simulation feedback. Master Tech updated."
            isActive={true}
         />
         <SampleStage 
            name="Pre-production (PP)"
            status="Pending"
            date="Planned: May 12, 2026"
            feedback="Awaiting fit approval. Batch fabric test results pending from vendor."
            isActive={false}
         />
         <SampleStage 
            name="Shipping Sample"
            status="Pending"
            date="Planned: Jun 10, 2026"
            feedback="Final production quality control validation."
            isActive={false}
         />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
         <div className="lg:col-span-2 bg-white rounded-2xl border border-enterprise-gray-200 shadow-sm p-8">
            <h3 className="text-lg font-bold text-enterprise-gray-900 mb-6 flex items-center">
               <FileSearch className="mr-2 h-5 w-5 text-primary-600" />
               Measurement Audit vs. Tech Pack
            </h3>
            <div className="space-y-4">
               {[
                 { pom: 'Body Length', spec: '28.5"', sample: '28.625"', dev: '+0.125"', status: 'Pass' },
                 { pom: 'Chest Circ', spec: '44.0"', sample: '44.0"', dev: '0.0"', status: 'Pass' },
                 { pom: 'Sleeve Length', spec: '34.5"', sample: '35.0"', dev: '+0.5"', status: 'Alert' },
               ].map((audit, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100 group">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest">{audit.pom}</span>
                       <span className="text-sm font-bold text-enterprise-gray-800 italic leading-tight">SPEC: {audit.spec}</span>
                    </div>
                    <div className="flex items-center space-x-12">
                       <div className="text-center">
                          <p className="text-[10px] text-enterprise-gray-400 font-bold uppercase tracking-widest italic">Sample</p>
                          <p className="text-sm font-bold text-enterprise-gray-800">{audit.sample}</p>
                       </div>
                       <div className="text-center">
                          <p className="text-[10px] text-enterprise-gray-400 font-bold uppercase tracking-widest italic">Deviation</p>
                          <p className={cn("text-sm font-black italic", audit.status === 'Alert' ? "text-red-600" : "text-green-600")}>{audit.dev}</p>
                       </div>
                       <div className={cn(
                         "h-2 w-2 rounded-full",
                         audit.status === 'Alert' ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "bg-green-500"
                       )}></div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-primary-900 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
               <h3 className="text-lg font-bold mb-4 flex items-center text-primary-400">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Fit Session Feedback
               </h3>
               <p className="text-sm text-primary-100 leading-relaxed italic mb-8">
                  "Model reported slight restriction at back-yoke during movement. Recommend relaxing the yoke width by 1/4\" in the next iteration."
               </p>
            </div>
            <div className="space-y-4">
               <button className="w-full py-4 bg-white/10 border border-white/20 rounded-xl text-sm font-bold hover:bg-white/20 transition-all uppercase tracking-widest">Upload Fit Photos</button>
               <button className="w-full py-4 bg-primary-600 rounded-xl text-sm font-bold hover:bg-primary-700 transition-all uppercase tracking-widest shadow-lg shadow-primary-900/50">Approve with Comments</button>
            </div>
         </div>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Sampling;
