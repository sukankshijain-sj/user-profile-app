import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileForm from './components/ProfileForm';
import ProjectCard from './components/ProjectCard';
import ProjectForm from './components/ProjectForm';
import { initialUserData, initialProjects } from './types';

const UserProfile = () => {
  const [user, setUser] = useState(initialUserData);
  const [projects, setProjects] = useState(initialProjects);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Profile Actions
  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    setIsEditingProfile(false);
  };

  const handleCancelEditProfile = () => {
    setIsEditingProfile(false);
  };

  const handleDeleteProfile = () => {
    if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
      setUser({
        ...initialUserData,
        name: 'Deleted User',
        email: 'deleted@example.com',
        bio: 'This profile has been deleted.',
        avatar: 'https://ui-avatars.com/api/?name=Deleted+User&background=999&color=fff&size=200'
      });
      setProjects([]);
      alert('Profile deleted successfully!');
    }
  };

  // Project Actions
  const handleAddProject = () => {
    setIsAddingProject(true);
    setEditingProject(null);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsAddingProject(false);
  };

  const handleSaveProject = (projectData) => {
    if (editingProject) {
      setProjects(projects.map(p => p.id === projectData.id ? projectData : p));
    } else {
      setProjects([...projects, projectData]);
    }
    setIsAddingProject(false);
    setEditingProject(null);
  };

  const handleCancelProjectForm = () => {
    setIsAddingProject(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        {!isEditingProfile ? (
          <ProfileHeader
            user={user}
            onEdit={handleEditProfile}
            onDelete={handleDeleteProfile}
          />
        ) : (
          <ProfileForm
            user={user}
            onSave={handleSaveProfile}
            onCancel={handleCancelEditProfile}
          />
        )}

        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
            {!isAddingProject && !editingProject && (
              <button
                onClick={handleAddProject}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Project
              </button>
            )}
          </div>

          {/* Add/Edit Project Form */}
          {(isAddingProject || editingProject) && (
            <ProjectForm
              project={editingProject}
              onSave={handleSaveProject}
              onCancel={handleCancelProjectForm}
            />
          )}

          {/* Projects Grid */}
          {projects.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Projects Yet</h3>
              <p className="text-gray-500 mb-4">Get started by adding your first project</p>
              <button
                onClick={handleAddProject}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Add Project
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onEdit={handleEditProject}
                  onDelete={handleDeleteProject}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
