import React, { useState, useEffect } from "react";
import StatCard from "../components/dashboard/StatCard";
import ProjectRow from "../components/dashboard/ProjectRow";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const { token } = useAuth();

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
        <button className="bg-gold text-bg font-bold py-2 px-4 rounded-lg">
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
    </div>
  );
};

export default Dashboard;
