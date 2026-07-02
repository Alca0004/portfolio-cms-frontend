import React from "react";

const ProjectRow = ({ title, techStack, status }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl">
      <div>
        <p className="text-text font-medium">{title}</p>
        <p className="text-muted text-sm">{techStack}</p>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={status === "Published" ? "text-green-500" : "text-gold"}
        >
          {status}
        </span>
        <button className="border border-border text-muted text-xs px-3 py-1 rounded-lg">
          Edit
        </button>
        <button className="border border-red-500 text-red-500 text-xs px-3 py-1 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};
export default ProjectRow;
