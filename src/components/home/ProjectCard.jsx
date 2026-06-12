import React from "react";

const ProjectCard = ({ title, image, className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 h-80 justify-between ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      ) : (
        <div className="bg-bg border-dashed border-1 border-muted rounded-lg h-40 flex items-center justify-center">
          <span className="text-muted text-xs tracking-widest">
            PROJECT PREVIEW
          </span>
        </div>
      )}
      <div className="flex flex-col gap-1">
        <p className="text-gold text-xs tracking-widest">FEATURED PROJECT</p>
        <p className="text-text">{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
