import React from 'react';
import { 
  Box, 
  Rotate3d, 
  Layers, 
  History, 
  MessageSquare, 
  Eye, 
  Download, 
  Share2,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';

const DigitalDesign = () => {
  const { currentProject } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Box className="h-3 w-3" />
             <span>Phase 04: Virtual Prototyping & 3D Design</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Digital Design Workspace</h2>
          <p className="text-enterprise-gray-500 mt-1">Review 3D simulations and version history for <span className="font-bold text-enterprise-gray-700">{currentProject?.name}</span>.</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-primary space-x-2 shadow-lg shadow-primary-200">
            <Rotate3d className="h-4 w-4" />
            <span>Open 3D Editor</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main 3D View */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-enterprise-gray-900 rounded-3xl overflow-hidden relative shadow-2xl min-h-[600px] border border-white/10 group">
             <img src="/assets/3d_preview.png" alt="3D Preview" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[10s]" />
             
             {/* 3D Overlays */}
             <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
                <div className="flex justify-between items-start">
                   <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">LIVE 3D SIMULATION ENGINES</span>
                   </div>
                   <div className="flex space-x-2">
                      <button className="p-2 bg-white/10 rounded-lg backdrop-blur-md pointer-events-auto hover:bg-white/20 transition-all"><Maximize2 className="h-5 w-5 text-white" /></button>
                      <button className="p-2 bg-white/10 rounded-lg backdrop-blur-md pointer-events-auto hover:bg-white/20 transition-all"><Download className="h-5 w-5 text-white" /></button>
                   </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                   <div className="bg-black/60 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 flex items-center space-x-8 pointer-events-auto shadow-2xl">
                      <button className="p-3 text-primary-400 hover:text-white transition-all"><Rotate3d className="h-8 w-8" /></button>
                      <div className="h-8 w-px bg-white/10"></div>
                      <button className="p-3 text-white/40 hover:text-white transition-all"><Eye className="h-8 w-8" /></button>
                      <div className="h-8 w-px bg-white/10"></div>
                      <button className="p-3 text-white/40 hover:text-white transition-all"><Layers className="h-8 w-8" /></button>
                   </div>
                </div>
             </div>
             
             {/* AI Optimization HUD */}
             <div className="absolute left-8 bottom-32 bg-primary-600/20 backdrop-blur-xl border border-primary-500/30 p-4 rounded-xl max-w-xs shadow-2xl">
                <h4 className="text-[10px] font-bold text-primary-400 uppercase tracking-widest mb-2 flex items-center">
                   <Sparkles className="h-3 w-3 mr-1" /> AI Optimization Panel
                </h4>
                <div className="space-y-2">
                   <div className="flex justify-between items-center text-[10px] text-white/80 font-bold">
                      <span>Fabric Stress</span>
                      <span className="text-green-400 font-black">STABLE</span>
                   </div>
                   <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 w-1/4"></div>
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-white/80 font-bold">
                      <span>Drape Accuracy</span>
                      <span className="text-primary-400 font-black">98.5%</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar: Details & Version History */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm">
             <h3 className="text-lg font-bold text-enterprise-gray-900 mb-6 flex items-center">
                <History className="mr-2 h-5 w-5 text-primary-600" />
                Version History
             </h3>
             <div className="space-y-4">
                {[
                  { version: 'v3.2', user: 'Alex R.', date: 'Today, 10:45 AM', active: true },
                  { version: 'v3.1', user: 'Alex R.', date: 'Yesterday, 2:30 PM', active: false },
                  { version: 'v2.0', user: 'AI Assistant', date: '2 days ago', active: false },
                  { version: 'v1.0', user: 'Initial Intake', date: '4 days ago', active: false },
                ].map((v, i) => (
                  <div key={i} className={cn(
                    "p-4 rounded-xl border flex items-center justify-between group cursor-pointer transition-all",
                    v.active ? "bg-primary-50 border-primary-200" : "bg-enterprise-gray-50 border-enterprise-gray-100 hover:border-enterprise-gray-300"
                  )}>
                    <div className="flex items-center space-x-3">
                       <div className={cn(
                         "h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-bold",
                         v.active ? "bg-primary-600 text-white" : "bg-enterprise-gray-200 text-enterprise-gray-600"
                       )}>{v.version}</div>
                       <div>
                          <p className="text-xs font-bold text-enterprise-gray-900">{v.user}</p>
                          <p className="text-[10px] text-enterprise-gray-500">{v.date}</p>
                       </div>
                    </div>
                    {v.active && <div className="h-2 w-2 rounded-full bg-primary-600"></div>}
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm">
             <h3 className="text-lg font-bold text-enterprise-gray-900 mb-6 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-enterprise-gray-400" />
                Review Comments
             </h3>
             <div className="space-y-4">
                <div className="p-4 bg-enterprise-gray-50 rounded-xl border border-enterprise-gray-100">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest italic">Fabrication Team</span>
                       <span className="text-[9px] text-enterprise-gray-400">2h ago</span>
                    </div>
                    <p className="text-xs text-enterprise-gray-700 leading-relaxed font-serif">"The drape on the sleeves in the 3D sim looks a bit too heavy for the 100% linen spec. Can we check the GSM values?"</p>
                </div>
             </div>
             <button className="w-full mt-4 py-3 border border-dashed border-enterprise-gray-200 text-xs font-bold text-enterprise-gray-400 rounded-xl hover:bg-enterprise-gray-50 transition-all uppercase tracking-widest italic leading-tight">Add Design Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default DigitalDesign;
