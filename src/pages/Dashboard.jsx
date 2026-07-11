import React, { useState, useEffect } from "react";
import StatCard from "../components/dashboard/StatCard";
import ProjectRow from "../components/dashboard/ProjectRow";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const { token } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    techStack: "",
  });

  const handleCreate = async () => {
    try {
      const response = await api.post(
        "/projects",
        {
          title: newProject.title,
          description: newProject.description,
          techStack: newProject.techStack.split(",").map((t) => t.trim()),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setProjects([...projects, response.data]);
      setShowModal(false);
      setNewProject({ title: "", description: "", techStack: "" });
    } catch (error) {
      console.error("Failed to create project:", error);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const totalProjects = projects.length;
  const published = projects.filter((p) => p.published === true).length;
  const drafts = projects.filter((p) => p.published === false).length;

  return (
    <div className="p-8 flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="TOTAL PROJECTS" value={totalProjects} />
        <StatCard label="PUBLISHED" value={published} />
        <StatCard label="DRAFTS" value={drafts} />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-text font-bold text-lg">Your Projects</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gold text-bg font-bold py-2 px-4 rounded-lg"
        >
          + New Project
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectRow
            key={project._id}
            title={project.title}
            techStack={project.techStack.join(" · ")}
            status={project.published ? "Published" : "Draft"}
            onDelete={() => handleDelete(project._id)}
          />
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-surface border border-gold rounded-xl p-8 w-full max-w-md flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-text font-bold text-lg">New Project</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted hover:text-gold"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gold text-xs tracking-widest">TITLE</label>
              <input
                type="text"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
                className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
                placeholder="Project title"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gold text-xs tracking-widest">
                DESCRIPTION
              </label>
              <textarea
                rows={3}
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold resize-none"
                placeholder="Project description"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gold text-xs tracking-widest">
                TECH STACK
              </label>
              <input
                type="text"
                value={newProject.techStack}
                onChange={(e) =>
                  setNewProject({ ...newProject, techStack: e.target.value })
                }
                className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
                placeholder="React, Node, MongoDB"
              />
            </div>
            <button
              onClick={handleCreate}
              className="w-full bg-gold text-bg font-bold py-3 rounded-lg"
            >
              Create Project →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
