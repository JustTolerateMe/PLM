import React from 'react';
import { 
  TrendingUp, 
  Target, 
  Package, 
  Users, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  FileText
} from 'lucide-react';
import { usePLM } from '../context/PLMContext.jsx';
import { motion } from 'framer-motion';

const KPICard = ({ title, value, change, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-enterprise-gray-200 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-enterprise-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-enterprise-gray-900">{value}</h3>
      <p className={cn(
        "text-xs font-semibold mt-2 flex items-center",
        change.startsWith('+') ? "text-green-600" : "text-red-600"
      )}>
        {change} <span className="text-enterprise-gray-400 font-normal ml-1 flex items-center">from last month</span>
      </p>
    </div>
    <div className={cn("p-3 rounded-lg", color)}>
      <Icon className="h-6 w-6 text-white" />
    </div>
  </div>
);

const WorkflowPipeline = ({ stages, currentStageIndex, onStageClick }) => (
  <div className="bg-white p-8 rounded-xl border border-enterprise-gray-200 shadow-sm mb-8">
    <h3 className="text-lg font-bold text-enterprise-gray-900 mb-6 flex items-center">
      <Clock className="mr-2 h-5 w-5 text-primary-600" />
      Product Development Pipeline
    </h3>
    <div className="relative flex justify-between items-center px-4">
      {/* Background line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-enterprise-gray-100 -translate-y-1/2 z-0 px-10"></div>
      
      {stages.map((stage, index) => {
        const isCompleted = index < currentStageIndex;
        const isActive = index === currentStageIndex;
        
        return (
          <div 
            key={stage.id} 
            className="relative z-10 flex flex-col items-center cursor-pointer group"
            onClick={() => onStageClick(stage.id)}
          >
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-300",
              isCompleted ? "bg-primary-600 border-primary-100 text-white" : 
              isActive ? "bg-white border-primary-600 text-primary-600 shadow-lg shadow-primary-100 scale-110" : 
              "bg-white border-enterprise-gray-200 text-enterprise-gray-400 group-hover:border-primary-300"
            )}>
              {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
            </div>
            <div className="mt-4 flex flex-col items-center">
              <span className={cn(
                "text-xs font-bold uppercase tracking-wider group-hover:text-primary-600 transition-colors",
                isActive ? "text-primary-700" : isCompleted ? "text-enterprise-gray-700" : "text-enterprise-gray-400"
              )}>
                {stage.label}
              </span>
              <span className="text-[10px] text-enterprise-gray-500 mt-1">
                {isCompleted ? "Completed" : isActive ? "Active Stage" : "Pending"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <div 
    onClick={() => onClick(project.id)}
    className="bg-white p-6 rounded-xl border border-enterprise-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-bold text-enterprise-gray-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{project.name}</h4>
        <p className="text-xs text-enterprise-gray-500">{project.season} • {project.status}</p>
      </div>
      <div className="bg-enterprise-gray-50 px-2 py-1 rounded text-[10px] font-bold text-enterprise-gray-600 border border-enterprise-gray-100">
        MODIFIED: 2H AGO
      </div>
    </div>
    
    <div className="mb-4">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-enterprise-gray-600">Completion</span>
        <span className="font-bold text-primary-700">{project.progress}%</span>
      </div>
      <div className="w-full bg-enterprise-gray-100 h-2 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${project.progress}%` }}
          className="bg-primary-600 h-full rounded-full"
        />
      </div>
    </div>
    
    <div className="flex items-center justify-between pt-4 border-t border-enterprise-gray-50">
      <div className="flex -space-x-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-6 w-6 rounded-full bg-enterprise-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">
            {String.fromCharCode(64 + i)}
          </div>
        ))}
      </div>
      <button className="text-primary-600 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
        View Project <ChevronRight className="h-3 w-3 ml-1" />
      </button>
    </div>
  </div>
);

const Dashboard = () => {
  const { projects, setCurrentProjectId, setActiveModule } = usePLM();

  const stages = [
    { id: 'trend', label: 'Trend Research' },
    { id: 'planning', label: 'Collection Planning' },
    { id: 'techpack', label: 'Tech Pack Prep' },
    { id: 'digital', label: 'Digital Design' },
  ];

  const handleProjectClick = (id) => {
    setCurrentProjectId(id);
    setActiveModule('trend');
  };

  return (
    <div className="space-y-8 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-enterprise-gray-900 tracking-tight">Executive Dashboard</h2>
          <p className="text-enterprise-gray-500 mt-1">Real-time pulse of your product lifecycle and portfolio performance.</p>
        </div>
        <button 
          onClick={() => setActiveModule('intake')}
          className="btn-primary space-x-2 px-6 py-3 shadow-lg shadow-primary-200"
        >
          <Sparkles className="h-4 w-4" />
          <span>New AI Intake</span>
        </button>
      </header>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Styles on Track" 
          value="84%" 
          change="+5.2%" 
          icon={TrendingUp} 
          color="bg-primary-600" 
        />
        <KPICard 
          title="Avg Cost vs Target" 
          value="-12.5%" 
          change="-2.1%" 
          icon={Target} 
          color="bg-green-600" 
        />
        <KPICard 
          title="Active Styles" 
          value="156" 
          change="+12" 
          icon={Package} 
          color="bg-indigo-600" 
        />
        <KPICard 
          title="Vendor Response" 
          value="92%" 
          change="+4.5%" 
          icon={Users} 
          color="bg-amber-500" 
        />
      </div>

      {/* Pipeline Section */}
      <WorkflowPipeline stages={stages} currentStageIndex={1} onStageClick={setActiveModule} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Projects */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-enterprise-gray-900">Active Portfolios</h3>
            <button className="text-primary-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
            ))}
          </div>
        </div>

        {/* Next Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-enterprise-gray-900">Critical Next Actions</h3>
          <div className="bg-white rounded-xl border border-enterprise-gray-200 shadow-sm divide-y divide-enterprise-gray-100 overflow-hidden">
            {[
              { label: 'Approve Tech Pack for 3 styles', priority: 'High', icon: AlertCircle, color: 'text-red-500' },
              { label: 'Review Sample Feedback - SS26', priority: 'Medium', icon: Clock, color: 'text-amber-500' },
              { label: 'Finalize Costing for Denim Line', priority: 'Medium', icon: FileText, color: 'text-blue-500' },
              { label: 'Update Vendor Scorecards', priority: 'Low', icon: CheckCircle2, color: 'text-enterprise-gray-400' },
            ].map((action, i) => (
              <div key={i} className="p-4 hover:bg-enterprise-gray-50 transition-colors flex items-center cursor-pointer group">
                <action.icon className={cn("h-5 w-5 mr-3 flex-shrink-0", action.color)} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-enterprise-gray-800">{action.label}</p>
                  <p className="text-[10px] text-enterprise-gray-400 uppercase font-bold tracking-wider mt-0.5">{action.priority} Priority</p>
                </div>
                <ChevronRight className="h-4 w-4 text-enterprise-gray-300 group-hover:text-enterprise-gray-500 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
          <div className="p-6 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-xl shadow-lg relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <h4 className="text-white font-bold opacity-90 text-sm uppercase tracking-widest mb-1 italic">Pro Tip</h4>
              <p className="text-white text-lg font-bold leading-tight">Generate a collection brief with AI to save 40h of research.</p>
              <button 
                onClick={() => setActiveModule('intake')}
                className="mt-4 bg-white text-primary-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all"
              >
                Start AI Intake
              </button>
            </div>
            <Sparkles className="absolute -bottom-4 -right-4 h-24 w-24 text-white opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for Tailwind classes
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default Dashboard;
