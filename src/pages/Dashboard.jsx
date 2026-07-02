import React from "react";
import StatCard from "../components/dashboard/StatCard";
import ProjectRow from "../components/dashboard/ProjectRow";

const Dashboard = () => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="TOTAL PROJECTS" value="3" />
        <StatCard label="PUBLISHED" value="2" />
        <StatCard label="DRAFTS" value="1" />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-text font-bold text-lg">Your Projects</p>
        <button className="bg-gold text-bg font-bold py-2 px-4 rounded-lg">
          + New Project
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <ProjectRow
          title="Portfolio CMS"
          techStack="React · Node · MongoDB"
          status="Published"
        />
        <ProjectRow
          title="Figma Design"
          techStack="Figma · Design"
          status="Draft"
        />
        <ProjectRow
          title="Portfolio HTML"
          techStack="HTML · CSS"
          status="Published"
        />
      </div>
    </div>
  );
};

export default Dashboard;
