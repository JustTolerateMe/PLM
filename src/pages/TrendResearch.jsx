import React from 'react';
import { Search, Palette, Box, MessageSquare, Plus, Download, Share2, Sparkles } from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { motion } from 'framer-motion';

const TrendCard = ({ title, description, image, tags }) => (
  <div className="card group cursor-pointer hover:ring-2 hover:ring-primary-400 transition-all">
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary-700 shadow-sm">
        AI GENERATED
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-enterprise-gray-900 mb-1">{title}</h4>
      <p className="text-xs text-enterprise-gray-500 line-clamp-2 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-enterprise-gray-100 text-enterprise-gray-600 px-2 py-0.5 rounded font-medium">#{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const ColorSwatch = ({ name, hex }) => (
  <div className="flex flex-col items-center group">
    <div 
      className="h-16 w-16 rounded-xl shadow-inner border border-enterprise-gray-200 mb-2 group-hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: hex }}
    ></div>
    <span className="text-[10px] font-bold text-enterprise-gray-700 uppercase tracking-tighter">{name}</span>
    <span className="text-[9px] text-enterprise-gray-400 font-mono">{hex}</span>
  </div>
);

const TrendResearch = () => {
  const { currentProject } = usePLM();

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">
             <Search className="h-3 w-3" />
             <span>Phase 01: Research & Insights</span>
          </div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Trend Research & Moodboarding</h2>
          <p className="text-enterprise-gray-500 mt-1">Curate visual directions and market insights for <span className="font-bold text-enterprise-gray-700">{currentProject?.name}</span>.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-enterprise-gray-200 rounded-lg text-sm font-semibold text-enterprise-gray-600 hover:bg-white transition-all shadow-sm">
            <Download className="h-4 w-4 mr-2" /> Export
          </button>
          <button className="btn-primary space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Asset</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Moodboard & Inspiration */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-enterprise-gray-900">Visual Inspiration</h3>
            <div className="flex bg-enterprise-gray-100 p-1 rounded-lg">
              <button className="px-3 py-1 bg-white rounded-md text-xs font-bold shadow-sm">Grid</button>
              <button className="px-3 py-1 text-xs font-bold text-enterprise-gray-500">List</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrendCard 
              title="Urban Serenity"
              description="A focus on calming, organic textures and relaxed silhouettes for the modern urban dweller."
              image="/assets/moodboard_1.png"
              tags={['Sustainable', 'Minimal', 'SS26']}
            />
            <TrendCard 
              title="Modern Essentials"
              description="Functional utility meets high-end tailoring. Emphasis on versatility and durable materials."
              image="/assets/moodboard_2.png"
              tags={['Utility', 'Tech-Luxe', 'Modular']}
            />
          </div>

          <div className="bg-white p-8 rounded-2xl border border-enterprise-gray-200 shadow-sm">
             <div className="flex items-start justify-between mb-6">
                <div>
                   <h3 className="text-lg font-bold text-enterprise-gray-900">Color Direction</h3>
                   <p className="text-sm text-enterprise-gray-500 italic">Primary palette derived from AI semantic analysis of consumer sentiment.</p>
                </div>
                <button className="text-primary-600 text-xs font-bold flex items-center hover:bg-primary-50 px-3 py-1.5 rounded-lg transition-colors">
                  <Palette className="h-4 w-4 mr-2" /> Modify Palette
                </button>
             </div>
             <div className="flex flex-wrap gap-8 justify-between px-4">
                <ColorSwatch name="Sage Leaf" hex="#B2B8A3" />
                <ColorSwatch name="Earthy Clay" hex="#7D8471" />
                <ColorSwatch name="Oat Milk" hex="#E5E1D8" />
                <ColorSwatch name="Burned Sienna" hex="#A6705D" />
                <ColorSwatch name="Deep Navy" hex="#1B263B" />
                <ColorSwatch name="Arctic White" hex="#F8F9FA" />
             </div>
          </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-enterprise-gray-900 to-enterprise-gray-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
             <Sparkles className="absolute -top-6 -right-6 h-24 w-24 text-primary-500 opacity-20" />
             <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center text-primary-400">
                  <Sparkles className="mr-2 h-5 w-5" />
                  AI Market Insights
                </h3>
                <div className="space-y-4">
                   <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <p className="text-xs font-bold text-primary-300 uppercase tracking-widest mb-1">Forecast Confidence</p>
                      <div className="flex items-center space-x-2">
                         <span className="text-2xl font-bold">94%</span>
                         <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-500 w-[94%]"></div>
                         </div>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <p className="text-xs text-enterprise-gray-300 leading-relaxed font-medium">
                        "SS26 is seeing a shift towards <span className="text-white font-bold italic underline border-primary-500 decoration-primary-500">Biophilic Design</span>. Consumers are demanding high-performance recycled fibers that don't sacrifice tactile comfort."
                      </p>
                      <ul className="text-xs space-y-2">
                        <li className="flex items-start">
                           <span className="text-primary-400 mr-2">●</span>
                           <span>Rise in 'Quiet Utility' searches (+42%)</span>
                        </li>
                        <li className="flex items-start">
                           <span className="text-primary-400 mr-2">●</span>
                           <span>Preference for gender-neutral silhouettes in Lounge category.</span>
                        </li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm">
             <h3 className="text-base font-bold text-enterprise-gray-900 mb-4 flex items-center">
                <MessageSquare className="mr-2 h-4 w-4 text-enterprise-gray-400" />
                Team Comments
             </h3>
             <div className="space-y-6">
                <div className="flex space-x-3">
                   <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">ER</div>
                   <div>
                      <p className="text-xs font-bold text-enterprise-gray-800">Elena Rossi <span className="font-normal text-enterprise-gray-400 ml-1">2h ago</span></p>
                      <p className="text-xs text-enterprise-gray-600 mt-1">The Sage palette looks incredible. Can we confirm the recycled linen supplier lead times?</p>
                   </div>
                </div>
                <div className="flex space-x-3">
                   <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">JM</div>
                   <div>
                      <p className="text-xs font-bold text-enterprise-gray-800">James Miller <span className="font-normal text-enterprise-gray-400 ml-1">45m ago</span></p>
                      <p className="text-xs text-enterprise-gray-600 mt-1">AI suggestions are spot on. Let's move these into the Range Plan for the merchandising review.</p>
                   </div>
                </div>
             </div>
             <div className="mt-6 flex items-center bg-enterprise-gray-50 rounded-lg p-2 border border-enterprise-gray-100">
                <input type="text" placeholder="Add a comment..." className="flex-1 bg-transparent border-none text-xs focus:ring-0" />
                <button className="text-primary-600 text-xs font-bold px-2">Post</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendResearch;
