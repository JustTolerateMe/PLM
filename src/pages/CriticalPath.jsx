import React from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  ChevronRight,
  ArrowRight,
  Filter,
  Download
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const Milestone = ({ label, date, status, delay, isLast }) => (
  <div className="flex group min-h-[100px]">
    <div className="flex flex-col items-center mr-4">
       <div className={cn(
         "h-4 w-4 rounded-full border-2 transition-all duration-300 z-10",
         status === 'Completed' ? "bg-green-500 border-green-200" :
         status === 'At Risk' ? "bg-red-500 border-red-200 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" :
         "bg-white border-enterprise-gray-300"
       )}></div>
       {!isLast && <div className="w-0.5 flex-1 bg-enterprise-gray-100 my-1 group-hover:bg-primary-200 transition-colors"></div>}
    </div>
    <div className="flex-1 pb-8">
       <div className="flex justify-between items-start">
          <div>
             <h4 className="text-sm font-bold text-enterprise-gray-900 mb-1">{label}</h4>
             <p className="text-[10px] text-enterprise-gray-400 font-bold uppercase tracking-widest leading-none mt-1">{date}</p>
          </div>
          <div className="text-right">
             <span className={cn(
               "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border",
               status === 'Completed' ? "bg-green-50 text-green-700 border-green-100" :
               status === 'At Risk' ? "bg-red-50 text-red-700 border-red-100" :
               "bg-enterprise-gray-50 text-enterprise-gray-500 border-enterprise-gray-100"
             )}>
               {status}
             </span>
             {delay && <p className="text-[9px] text-red-500 font-bold mt-1 italic">+{delay} Days Delay</p>}
          </div>
       </div>
    </div>
  </div>
);

const CriticalPath = () => {
  const { currentProject } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Calendar className="h-3 w-3" />
             <span>Phase 08: Global Supply Chain & Milestone Tracking</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Critical Path Timeline</h2>
          <p className="text-enterprise-gray-500 mt-1">Monitor key milestones and supply chain risks for <span className="font-bold text-enterprise-gray-700">{currentProject?.name}</span>.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-enterprise-gray-200 rounded-lg text-sm font-semibold text-enterprise-gray-600 hover:bg-white transition-all shadow-sm">
            <Filter className="h-4 w-4 mr-2" /> Filter Tasks
          </button>
          <button className="btn-primary space-x-2 px-6">
            <Download className="h-4 w-4" />
            <span>Generate Status Report</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         <div className="lg:col-span-3 bg-white p-10 rounded-2xl border border-enterprise-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
               <Clock className="h-40 w-40" />
            </div>
            <h3 className="text-xl font-bold text-enterprise-gray-900 mb-10 flex items-center">
               <ArrowRight className="mr-3 h-5 w-5 text-primary-600" />
               Current Lifecycle Roadmap
            </h3>
            
            <div className="max-w-2xl">
               <Milestone label="Trend Brief & AI Intake" date="Mar 05, 2026" status="Completed" />
               <Milestone label="Range Plan Approval" date="Mar 12, 2026" status="Completed" />
               <Milestone label="Tech Pack Release to Vendor" date="Mar 20, 2026" status="Completed" />
               <Milestone label="Proto Sample Review" date="Mar 28, 2026" status="Completed" />
               <Milestone label="Fit Sample Approval (Gated)" date="Apr 15, 2026" status="At Risk" delay="4" />
               <Milestone label="Bulk Fabric Booking" date="Apr 30, 2026" status="Pending" />
               <Milestone label="PP Sample Submission" date="May 15, 2026" status="Pending" />
               <Milestone label="Production In-House" date="Jun 20, 2026" status="Pending" isLast={true} />
            </div>
         </div>

         <div className="space-y-6">
            <div className="bg-enterprise-gray-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute -top-4 -right-4 h-24 w-24 bg-white/5 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
               <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400 mb-6 flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Risk Mitigation
               </h3>
               <p className="text-sm text-enterprise-gray-300 leading-relaxed italic mb-8">
                  "The 'Fit Sample Approval' is at risk due to fabric drape discrepancies. AI recommends shifting the Bulk Fabric Booking by 3 days to accommodate the re-sampling."
               </p>
               <button className="w-full py-4 bg-primary-600 rounded-xl text-xs font-bold hover:bg-primary-700 transition-all uppercase tracking-widest shadow-lg shadow-primary-900/50">Run Mitigation Logic</button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm">
               <h4 className="text-sm font-bold text-enterprise-gray-400 uppercase tracking-widest mb-4">Milestone Health</h4>
               <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                       <span>Styles On Track</span>
                       <span>82%</span>
                    </div>
                    <div className="h-1.5 bg-enterprise-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[82%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                       <span>Delayed Tasks</span>
                       <span className="text-red-500 font-black">12</span>
                    </div>
                    <div className="h-1.5 bg-enterprise-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-red-500 w-[45%]"></div>
                    </div>
                  </div>
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

export default CriticalPath;
