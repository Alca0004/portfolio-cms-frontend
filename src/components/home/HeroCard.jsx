import React from "react";

const HeroCard = () => {
  const tags = ["React", "Node", "Figma", "Tailwind"];
  return (
    <div>
      <span className="text-gold text-xs tracking-widest">
        AVAILABLE FOR WORK
      </span>
      <h1>
        Building things that <span className="text-gold underline">matter</span>
      </h1>
      <p className="text-muted">
        Full-stack dev & designer. Based in Whistler, BC.
      </p>
      <div className="w-8 h-0.5 bg-gold my-4"></div>
      <div className="flex gap-2 flex-wrap">
        <span className="border border-gold text-gold text-xs px-3 py-1 rounded-full">
          Open to work
        </span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-muted text-muted text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
