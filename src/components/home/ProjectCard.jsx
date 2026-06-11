import React from "react";

const ProjectCard = ({ title, image, className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      ) : (
        <div className="border-2 border-dashed border-muted rounded-lg h-40 flex items-center justify-center">
          <span className="text-muted text-sm">Project Preview</span>
        </div>
      )}
      <div>
        <p className="text-gold text-xs tracking-widest">FEATURED PROJECT</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
