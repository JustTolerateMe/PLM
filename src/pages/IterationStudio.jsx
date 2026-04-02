import React, { useState } from 'react';
import { Sparkles, Wand2, ArrowRight, Layers, Maximize2, MoveRight, Download } from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const IterationStudio = () => {
  const { selectedBestSeller, generate3DFromVariation, setActiveModule } = usePLM();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVariations, setGeneratedVariations] = useState([]);
  const [selectedVariation, setSelectedVariation] = useState(null);

  if (!selectedBestSeller) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <p className="text-enterprise-gray-500 mb-4">No Best Seller selected.</p>
        <button onClick={() => setActiveModule('best-sellers')} className="btn-primary">Return to Vault</button>
      </div>
    );
  }

  const handleGenerateVariations = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedVariations([
        { id: 'var-1', name: 'Utility Cargo - Heavy Canvas', image: '/assets/moodboard_2.png', features: ['Heavyweight Canvas', 'Oversized Pockets', 'Ankle Drawstrings'] },
        { id: 'var-2', name: 'Utility Cargo - Tech Ripstop', image: '/assets/moodboard_2.png', features: ['Recycled Ripstop', 'Water Repellent', 'Hidden Zippers'] },
        { id: 'var-3', name: 'Utility Cargo - Wide Leg Linen', image: '/assets/moodboard_2.png', features: ['Organic Linen Blend', 'Relaxed Wide Leg', 'Contrast Stitching'] }
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCreateProject = () => {
    if (selectedVariation) {
      generate3DFromVariation(selectedVariation);
    }
  };

  return (
    <div className="space-y-6 pb-12 h-full flex flex-col">
      <header className="flex justify-between items-end shrink-0">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Wand2 className="h-3 w-3" />
             <span>AI Iteration Workspace</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Iteration Studio</h2>
          <p className="text-enterprise-gray-500 mt-1">Generating modifications based on: <span className="font-bold text-enterprise-gray-700">{selectedBestSeller.name}</span>.</p>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
        {/* Left: Original Base */}
        <div className="bg-enterprise-gray-50 rounded-3xl border border-enterprise-gray-200 relative overflow-hidden flex flex-col">
           <div className="p-6 bg-white border-b border-enterprise-gray-200 flex justify-between items-center shrink-0">
              <div>
                 <p className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest">Base Control Model</p>
                 <h3 className="text-lg font-bold text-enterprise-gray-900">{selectedBestSeller.name}</h3>
              </div>
              <div className="bg-green-50 px-3 py-1 rounded-full border border-green-100 flex items-center">
                 <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                 <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Validated Geometry</span>
              </div>
           </div>
           <div className="flex-1 relative p-8 flex items-center justify-center">
              <img src={selectedBestSeller.image} alt={selectedBestSeller.name} className="max-w-[80%] max-h-[80%] object-contain rounded-xl shadow-lg ring-1 ring-enterprise-gray-200" />
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 40%, rgba(248, 250, 252, 0.8) 100%)' }}></div>
           </div>
        </div>

        {/* Right: AI Generation UI */}
        <div className="bg-white rounded-3xl border border-enterprise-gray-200 shadow-xl overflow-hidden flex flex-col">
           <div className="p-6 border-b border-enterprise-gray-100 shrink-0 bg-primary-50/30">
               <div className="relative">
                 <textarea 
                   className="w-full bg-white border border-enterprise-gray-200 rounded-xl p-4 pr-12 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none shadow-inner"
                   rows="4"
                   placeholder="Describe the desired variations. E.g., 'Update this silhouette for the FW26 season using a heavy wool blend and adding functional cargo utility details.'"
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                 ></textarea>
                 <button 
                   onClick={handleGenerateVariations}
                   disabled={isGenerating || prompt.length < 5}
                   className="absolute bottom-4 right-4 h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                 >
                   <Sparkles className={cn("h-4 w-4", isGenerating && "animate-pulse")} />
                 </button>
               </div>
           </div>

           <div className="flex-1 p-6 overflow-y-auto bg-enterprise-gray-50/30">
              {generatedVariations.length === 0 && !isGenerating && (
                 <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                    <Layers className="h-12 w-12 text-enterprise-gray-300 mb-4" />
                    <p className="text-sm font-bold text-enterprise-gray-500">Awaiting variation prompt</p>
                    <p className="text-xs text-enterprise-gray-400 mt-1 max-w-xs">Enter your design updates above to generate flat sketches.</p>
                 </div>
              )}

              {isGenerating && (
                 <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                       <div key={i} className="h-32 bg-white rounded-xl border border-enterprise-gray-200 animate-pulse flex p-4">
                          <div className="h-full w-24 bg-enterprise-gray-100 rounded-lg"></div>
                          <div className="ml-4 flex-1 space-y-3">
                             <div className="h-4 bg-enterprise-gray-100 rounded w-1/2"></div>
                             <div className="h-3 bg-enterprise-gray-50 rounded w-full"></div>
                             <div className="h-3 bg-enterprise-gray-50 rounded w-2/3"></div>
                          </div>
                       </div>
                    ))}
                 </div>
              )}

              {generatedVariations.length > 0 && !isGenerating && (
                 <div className="space-y-4">
                    <h3 className="text-xs font-bold text-enterprise-gray-500 uppercase tracking-widest mb-4">Generated 2D Flats</h3>
                    {generatedVariations.map(variation => (
                       <div 
                         key={variation.id}
                         onClick={() => setSelectedVariation(variation)}
                         className={cn(
                           "bg-white rounded-xl border-2 p-4 flex cursor-pointer transition-all hover:shadow-md",
                           selectedVariation?.id === variation.id ? "border-primary-500 ring-4 ring-primary-50 shadow-lg" : "border-enterprise-gray-100 hover:border-primary-200"
                         )}
                       >
                          <div className="h-24 w-24 rounded-lg bg-enterprise-gray-50 border border-enterprise-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden grayscale contrast-150">
                             <img src={variation.image} alt="Flat Sketch" className="opacity-70 mix-blend-multiply" />
                          </div>
                          <div className="ml-5 flex-1">
                             <h4 className="font-bold text-enterprise-gray-900 mb-2">{variation.name}</h4>
                             <ul className="space-y-1">
                                {variation.features.map((f, i) => (
                                   <li key={i} className="text-[10px] text-enterprise-gray-600 font-medium flex items-center">
                                      <span className="h-1 w-1 bg-primary-400 rounded-full mr-2"></span> {f}
                                   </li>
                                ))}
                             </ul>
                          </div>
                       </div>
                    ))}
                 </div>
              )}
           </div>

           <div className="p-6 bg-white border-t border-enterprise-gray-100 shrink-0">
               <button 
                 onClick={handleCreateProject}
                 disabled={!selectedVariation}
                 className="w-full py-4 bg-enterprise-gray-900 text-white rounded-xl text-sm font-bold flex items-center justify-center hover:bg-enterprise-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-widest shadow-xl"
               >
                 Generate 3D Block & Tech Pack <MoveRight className="ml-3 h-5 w-5" />
               </button>
           </div>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default IterationStudio;
