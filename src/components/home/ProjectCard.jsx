import React from "react";

const ProjectCard = ({ title, image, description, className, githubUrl }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
        ) : (
          <div className="border border-dashed border-muted rounded-lg h-40 flex items-center justify-center hover:border-gold transition-colors cursor-pointer">
            <span className="text-muted text-xs tracking-widest">
              PROJECT PREVIEW
            </span>
          </div>
        )}
      </a>
      <div className="flex flex-col gap-1">
        <p className="text-gold text-xs tracking-widest">FEATURED PROJECT</p>
        <p className="text-text">{title}</p>
        <p className="text-muted text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
