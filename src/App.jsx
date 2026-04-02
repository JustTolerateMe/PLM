import React from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import AIBriefIntake from './pages/AIBriefIntake.jsx';
import TrendResearch from './pages/TrendResearch.jsx';
import CollectionPlanning from './pages/CollectionPlanning.jsx';
import TechPack from './pages/TechPack.jsx';
import DigitalDesign from './pages/DigitalDesign.jsx';
import Sampling from './pages/Sampling.jsx';
import Costing from './pages/Costing.jsx';
import VendorManagement from './pages/VendorManagement.jsx';
import CriticalPath from './pages/CriticalPath.jsx';
import CriticalPath from './pages/CriticalPath.jsx';
import Reports from './pages/Reports.jsx';
import BestSellers from './pages/BestSellers.jsx';
import IterationStudio from './pages/IterationStudio.jsx';
import { usePLM } from './context/PLMContext.jsx';

function App() {
  const { activeModule } = usePLM();

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <Projects />;
      case 'best-sellers': return <BestSellers />;
      case 'iteration': return <IterationStudio />;
      case 'intake': return <AIBriefIntake />;
      case 'trend': return <TrendResearch />;
      case 'planning': return <CollectionPlanning />;
      case 'techpack': return <TechPack />;
      case 'digital': return <DigitalDesign />;
      case 'sampling': return <Sampling />;
      case 'costing': return <Costing />;
      case 'vendors': return <VendorManagement />;
      case 'critical-path': return <CriticalPath />;
      case 'reports': return <Reports />;
      default: return <Dashboard />;
    }
  };

  return (
    <MainLayout>
      {renderModule()}
    </MainLayout>
  );
}

export default App;
