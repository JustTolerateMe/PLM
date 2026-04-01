import React from 'react';
import { Layers, Plus, Filter, Search, ChevronRight, Clock, Box, CheckCircle } from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { motion } from 'framer-motion';

const ProjectListItem = ({ project, onClick }) => (
  <div 
    onClick={() => onClick(project.id)}
    className="bg-white p-6 rounded-2xl border border-enterprise-gray-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all cursor-pointer group flex items-center justify-between"
  >
    <div className="flex items-center space-x-6">
       <div className="h-16 w-16 rounded-2xl bg-enterprise-gray-50 flex items-center justify-center text-enterprise-gray-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors border border-enterprise-gray-100">
          <Layers className="h-8 w-8" />
       </div>
       <div>
          <div className="flex items-center space-x-3 mb-1">
             <h3 className="text-xl font-bold text-enterprise-gray-900 group-hover:text-primary-700 transition-colors tracking-tight">{project.name}</h3>
             <span className="px-2 py-0.5 bg-enterprise-gray-100 text-enterprise-gray-600 rounded text-[10px] font-bold uppercase tracking-widest">{project.season}</span>
          </div>
          <div className="flex items-center space-x-4">
             <p className="text-xs text-enterprise-gray-500 font-medium">Status: <span className="text-enterprise-gray-800 font-bold">{project.status}</span></p>
             <div className="h-1 w-1 bg-enterprise-gray-300 rounded-full"></div>
             <p className="text-xs text-enterprise-gray-500 font-medium flex items-center">
                <Clock className="h-3 w-3 mr-1" /> Updated 2h ago
             </p>
          </div>
       </div>
    </div>

    <div className="flex items-center space-x-12">
       <div className="w-48">
          <div className="flex justify-between text-[10px] font-bold text-enterprise-gray-400 uppercase tracking-widest mb-2">
             <span>Completion</span>
             <span className="text-primary-600">{project.progress}%</span>
          </div>
          <div className="h-2 bg-enterprise-gray-100 rounded-full overflow-hidden">
             <div className="h-full bg-primary-600" style={{ width: `${project.progress}%` }}></div>
          </div>
       </div>
       <ChevronRight className="h-6 w-6 text-enterprise-gray-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
    </div>
  </div>
);

const Projects = () => {
  const { projects, setCurrentProjectId, setActiveModule } = usePLM();

  const handleProjectClick = (id) => {
    setCurrentProjectId(id);
    setActiveModule('trend');
  };

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Portfolios & Seasons</h2>
          <p className="text-enterprise-gray-500 mt-1">Manage and track your end-to-end collection lifecycles.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-enterprise-gray-200 rounded-lg text-sm font-semibold text-enterprise-gray-600 hover:bg-white transition-all shadow-sm">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </button>
          <button 
             onClick={() => setActiveModule('intake')}
             className="btn-primary space-x-2 px-6"
          >
            <Plus className="h-4 w-4" />
            <span>New Collection</span>
          </button>
        </div>
      </header>

      <div className="space-y-4">
         {projects.map(project => (
           <ProjectListItem key={project.id} project={project} onClick={handleProjectClick} />
         ))}
      </div>

      <div className="mt-12 bg-primary-50 rounded-2xl p-8 border border-primary-100 flex items-center justify-between">
         <div className="flex items-center space-x-6">
            <div className="bg-primary-600 p-4 rounded-xl shadow-lg">
               <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div>
               <h4 className="text-xl font-bold text-primary-900 leading-tight">Master Calendar Alignment</h4>
               <p className="text-sm text-primary-700 leading-relaxed max-w-xl mt-1 italic">
                 "All active portfolios are currently aligned with the Corporate Master Calendar. 0 conflicts detected."
               </p>
            </div>
         </div>
         <button className="text-primary-700 text-sm font-bold flex items-center hover:bg-white px-4 py-2 rounded-lg transition-all border border-transparent hover:border-primary-200 uppercase tracking-widest italic leading-none">
            Open Master Timeline <ChevronRight className="h-4 w-4 ml-2" />
         </button>
      </div>
    </div>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Projects;
