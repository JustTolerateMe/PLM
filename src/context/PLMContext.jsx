import React, { createContext, useContext, useState, useCallback } from 'react';

const PLMContext = createContext();

const MOCK_PROJECTS = [
  {
    id: 'pr-01',
    name: 'Modern Essentials SS26',
    season: 'SS26',
    status: 'Development',
    progress: 45,
    modules: {
      trend: 'Completed',
      planning: 'In Progress',
      techpack: 'Not Started',
      digital: 'Not Started',
    },
    styles: [
      { id: 'st-011', name: 'Oversize Linen Shirt', category: 'Tops', price: '$89', status: 'Approved' },
      { id: 'st-012', name: 'Relaxed Chino', category: 'Bottoms', price: '$120', status: 'Sampling' },
      { id: 'st-013', name: 'Cotton Utility Vest', category: 'Outerwear', price: '$150', status: 'Tech Pack' },
    ]
  },
  {
    id: 'pr-02',
    name: 'Active Flow 2026',
    season: 'FW26',
    status: 'Planning',
    progress: 15,
    modules: {
      trend: 'In Progress',
      planning: 'Not Started',
      techpack: 'Not Started',
      digital: 'Not Started',
    }
  }
];

export const PLMProvider = ({ children }) => {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [currentProjectId, setCurrentProjectId] = useState(MOCK_PROJECTS[0].id);
  const [activeModule, setActiveModule] = useState('projects');
  const [isAIGenerating, setIsAIGenerating] = useState(false);

  const currentProject = projects.find(p => p.id === currentProjectId);

  const createProjectFromAI = useCallback((aiData) => {
    setIsAIGenerating(true);
    // Simulate AI delay
    setTimeout(() => {
      const newProjectId = `pr-ai-${Date.now()}`;
      const newProject = {
        id: newProjectId,
        name: aiData.name || 'New AI Collection',
        season: aiData.season || 'SS26',
        status: 'Planning',
        progress: 5,
        modules: {
          trend: 'In Progress',
          planning: 'Not Started',
          techpack: 'Not Started',
          digital: 'Not Started',
        },
        aiMetadata: aiData,
        styles: []
      };
      
      setProjects(prev => [newProject, ...prev]);
      setCurrentProjectId(newProjectId);
      setActiveModule('trend');
      setIsAIGenerating(false);
    }, 2500);
  }, []);

  const value = {
    projects,
    currentProject,
    activeModule,
    setActiveModule,
    currentProjectId,
    setCurrentProjectId,
    createProjectFromAI,
    isAIGenerating
  };

  return <PLMContext.Provider value={value}>{children}</PLMContext.Provider>;
};

export const usePLM = () => {
  const context = useContext(PLMContext);
  if (!context) {
    throw new Error('usePLM must be used within a PLMProvider');
  }
  return context;
};
