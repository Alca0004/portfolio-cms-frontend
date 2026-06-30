import React from "react";
import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <StatCard label="TOTAL PROJECTS" value="3" />
      <StatCard label="PUBLISHED" value="2" />
      <StatCard label="DRAFTS" value="1" />
    </div>
  );
};

export default Dashboard;
