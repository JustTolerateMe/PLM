import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle, RefreshCcw, Layout, Palette, FileText, Zap } from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const AIBriefIntake = () => {
  const { createProjectFromAI, isAIGenerating } = usePLM();
  const [inputText, setInputText] = useState('');
  const [structuredData, setStructuredData] = useState({
    season: 'SS26',
    targetCustomer: 'Gen Z / Young Professionals',
    priceBand: 'Premium ($80-$150)',
    category: 'Lounge & Life',
    fabricDirection: 'Recycled Polyester, Organic Cotton',
    colorDirection: 'Sage Green, Terracotta, Ecru',
    sustainabilityGoals: '80% Recycled content target'
  });

  const [showResults, setShowResults] = useState(false);

  // Simulate real-time "interpretation"
  useEffect(() => {
    if (inputText.length > 20) {
      // Mocking some dynamic updates based on keywords
      const newData = { ...structuredData };
      if (inputText.toLowerCase().includes('winter')) newData.season = 'FW26';
      if (inputText.toLowerCase().includes('denim')) newData.category = 'Denim & Utility';
      if (inputText.toLowerCase().includes('luxury')) newData.priceBand = 'Luxury ($200+)';
      setStructuredData(newData);
    }
  }, [inputText]);

  const handleGenerate = () => {
    if (!inputText) return;
    setShowResults(true);
  };

  const handleCreateProject = () => {
    createProjectFromAI({
      name: structuredData.category + ' ' + structuredData.season,
      ...structuredData,
      rawInput: inputText
    });
  };

  return (
    <div className="space-y-6 pb-12">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight flex items-center">
            <Sparkles className="mr-3 h-8 w-8 text-primary-600 fill-primary-100" />
            AI Collection Intake
          </h2>
          <p className="text-enterprise-gray-500 mt-1">Transform your business vision into structured collection architectures.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Input Panel */}
        <div className="bg-white rounded-2xl border border-enterprise-gray-200 shadow-xl overflow-hidden flex flex-col h-[600px]">
          <div className="p-4 bg-enterprise-gray-50 border-b border-enterprise-gray-100 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-enterprise-gray-500">Input Workspace</span>
            <span className="text-[10px] text-primary-600 font-bold bg-white px-2 py-0.5 rounded shadow-sm">AI MODEL: v4.2 ENTERPRISE</span>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <label className="block text-sm font-bold text-enterprise-gray-700 mb-2 italic underline decoration-primary-200 underline-offset-4">Describe your collection requirements</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="e.g., 'I want to build a sustainable lounge-wear capsule for Spring/Summer 2026. Target audience is urban professionals aged 25-35. Focus on recycled linen and calm neutrals. Price points should be premium but accessible...'"
              className="flex-1 w-full p-6 text-lg border-none focus:ring-0 resize-none bg-primary-50/10 text-enterprise-gray-800 placeholder-enterprise-gray-300 transition-all font-serif"
            />
          </div>
          <div className="p-6 bg-enterprise-gray-50 border-t border-enterprise-gray-100 flex justify-between items-center">
            <p className="text-xs text-enterprise-gray-400 max-w-[200px]">AI will interpret your unstructured brief into PLM data fields.</p>
            <button 
              onClick={handleGenerate}
              disabled={!inputText || isAIGenerating}
              className={cn(
                "btn-primary px-8 py-4 text-base font-bold shadow-xl shadow-primary-200 group transition-all",
                (!inputText || isAIGenerating) ? "opacity-50 grayscale" : "hover:scale-105"
              )}
            >
              {isAIGenerating ? (
                <RefreshCcw className="h-5 w-5 animate-spin mr-2" />
              ) : (
                <Zap className="h-5 w-5 mr-2 fill-current" />
              )}
              {isAIGenerating ? 'Processing...' : 'Interpret Brief'}
            </button>
          </div>
        </div>

        {/* Right: Interpretation Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-enterprise-gray-200 shadow-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <RefreshCcw className="h-32 w-32" />
            </div>
            <h3 className="text-lg font-bold text-enterprise-gray-900 mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5 text-primary-600" />
              Structured Interpretation
            </h3>
            
            <div className="space-y-4">
              {Object.entries(structuredData).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between group p-2 hover:bg-primary-50/50 rounded-lg transition-colors border-b border-enterprise-gray-50 last:border-0 pb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest leading-none mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm font-semibold text-enterprise-gray-800 italic underline decoration-enterprise-gray-200 decoration-dotted">{value}</span>
                  </div>
                  <CheckCircle className="h-4 w-4 text-green-500 opacity-60" />
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showResults && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-enterprise-gray-900 rounded-2xl shadow-2xl p-8 text-white relative border-l-4 border-primary-500"
              >
                <div className="absolute -top-3 -right-3">
                   <div className="bg-primary-600 px-3 py-1 rounded-full text-[10px] font-bold animate-pulse uppercase tracking-wider">Analysis Ready</div>
                </div>
                <h3 className="text-lg font-bold mb-6 flex items-center text-primary-300">
                  <Palette className="mr-2 h-5 w-5" />
                  AI Suggested Themes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-all cursor-crosshair">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary-400 mb-1">Theme A</h4>
                    <p className="text-sm font-medium">Urban Serenity</p>
                    <div className="flex space-x-1 mt-2">
                       <div className="h-4 w-4 rounded-full bg-[#E5E1D8]"></div>
                       <div className="h-4 w-4 rounded-full bg-[#B2B8A3]"></div>
                       <div className="h-4 w-4 rounded-full bg-[#7D8471]"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/5 hover:bg-white/20 transition-all cursor-crosshair">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary-400 mb-1">Theme B</h4>
                    <p className="text-sm font-medium">Luxe Utility</p>
                    <div className="flex space-x-1 mt-2">
                       <div className="h-4 w-4 rounded-full bg-[#2C3E50]"></div>
                       <div className="h-4 w-4 rounded-full bg-[#95A5A6]"></div>
                       <div className="h-4 w-4 rounded-full bg-[#ECF0F1]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <button 
                    onClick={handleCreateProject}
                    disabled={isAIGenerating}
                    className="w-full bg-white text-enterprise-gray-900 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-primary-50 transition-all shadow-lg active:scale-95"
                  >
                    {isAIGenerating ? (
                      <RefreshCcw className="h-6 w-6 animate-spin mr-3 text-primary-600 font-bold" />
                    ) : (
                      <Layout className="h-6 w-6 mr-3 text-primary-600" />
                    )}
                    {isAIGenerating ? 'Generating PLM Architecture...' : 'Generate Collection Plan'}
                    {!isAIGenerating && <ArrowRight className="ml-2 h-5 w-5" />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100 flex items-start space-x-6">
        <div className="bg-primary-600 p-4 rounded-lg shadow-lg">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-primary-900">Enterprise AI Engine</h4>
          <p className="text-primary-700 leading-relaxed max-w-2xl mt-2 italic font-medium">
            "We are not just generating text. We are mapping creative intent to your specific POM libraries, BOM structures, and vendor capability matrices. The generated styles will automatically inherit your brand's fit standards."
          </p>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default AIBriefIntake;
