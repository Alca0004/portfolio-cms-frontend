import React from "react";

const ProjectCard = ({ title, image, className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      <div className="border-2 border-dashed border-muted rounded-lg h-32 flex items-center justify-center">
        <span className="text-muted text-sm">Project Preview</span>
      </div>
      <div>
        <p className="text-gold">Featured Project</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
