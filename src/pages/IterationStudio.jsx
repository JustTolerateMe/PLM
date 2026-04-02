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

  const variations = selectedBestSeller.id === 'bs-01' ? [
    { id: 'var-1', name: 'Resort Collar Short Sleeve', image: '/assets/var_photo_shirt_1.png', features: ['Relaxed Fit', 'Open Collar', 'Breathable'] },
    { id: 'var-2', name: 'Mandarin Collar Tunic', image: '/assets/var_photo_shirt_2.png', features: ['Long Sleeve', 'Banded Collar', 'Extended Length'] },
    { id: 'var-3', name: 'Utility Overshirt', image: '/assets/var_photo_shirt_3.png', features: ['Cargo Chest Pockets', 'Heavyweight', 'Outerwear Core'] },
    { id: 'var-4', name: 'Boxy Cropped Silhouette', image: '/assets/var_photo_shirt_4.png', features: ['Modern Fit', 'Wide Hem', 'Draped Shoulders'] }
  ] : [
    { id: 'var-1', name: 'Ultra Wide Leg Cargo', image: '/assets/var_photo_pant_1.png', features: ['Statement Pockets', 'Flowing Drape', 'Tech Nylon'] },
    { id: 'var-2', name: 'Technical Jogger', image: '/assets/var_photo_pant_2.png', features: ['Ribbed Cuffs', 'Waterproof Zippers', 'Tapered Fit'] },
    { id: 'var-3', name: 'Cropped Minimalist Pant', image: '/assets/var_photo_pant_3.png', features: ['Hidden Pockets', 'Ankle Length', 'Clean Lines'] },
    { id: 'var-4', name: 'Tactical Multi-Pocket', image: '/assets/var_photo_pant_4.png', features: ['Reinforced Knees', 'D-Ring Details', 'Heavy Duty'] }
  ];

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

        {/* Right: AI Inspiration UI */}
        <div className="bg-white rounded-3xl border border-enterprise-gray-200 shadow-xl overflow-hidden flex flex-col">
           <div className="p-6 border-b border-enterprise-gray-100 shrink-0 bg-primary-50/30">
               <div>
                 <h3 className="text-sm font-bold text-enterprise-gray-900 mb-1 flex items-center">
                    <Sparkles className="h-4 w-4 text-primary-600 mr-2" />
                    AI Predictive Design Inspirations
                 </h3>
                 <p className="text-xs text-enterprise-gray-500">
                    Based on market trends and customer feedback, the AI has generated these photographic references. Designers can use these exact silhouettes for drafting pattern variations.
                 </p>
               </div>
           </div>

           <div className="flex-1 p-6 overflow-y-auto bg-enterprise-gray-50/30">
                 <div className="space-y-4">
                    <h3 className="text-xs font-bold text-enterprise-gray-500 uppercase tracking-widest mb-4">Select a Reference Path</h3>
                    {variations.map(variation => (
                       <div 
                         key={variation.id}
                         onClick={() => setSelectedVariation(variation)}
                         className={cn(
                           "bg-white rounded-xl border-2 p-4 flex cursor-pointer transition-all hover:shadow-md group",
                           selectedVariation?.id === variation.id ? "border-primary-500 ring-4 ring-primary-50 shadow-lg" : "border-enterprise-gray-100 hover:border-primary-300"
                         )}
                       >
                          <div className="h-28 w-28 rounded-lg bg-enterprise-gray-50 border border-enterprise-gray-100 flex-shrink-0 overflow-hidden relative">
                             <img src={variation.image} alt="Photographic Variation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="ml-5 flex-1 flex flex-col justify-center">
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
           </div>

           <div className="p-6 bg-white border-t border-enterprise-gray-100 shrink-0">
               <button 
                 onClick={handleCreateProject}
                 disabled={!selectedVariation}
                 className="w-full py-4 bg-enterprise-gray-900 text-white rounded-xl text-sm font-bold flex items-center justify-center hover:bg-enterprise-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-widest shadow-xl group"
               >
                 Confirm Reference for Sketching & 3D <MoveRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
