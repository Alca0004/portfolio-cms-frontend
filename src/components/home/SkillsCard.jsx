import React from "react";

const SkillsCard = ({ className }) => {
  const skills = [
    { name: "React/Next", level: 95 },
    { name: "Figma/Design", level: 90 },
    { name: "NODE/API", level: 85 },
    { name: "TailwindCss", level: 80 },
  ];

  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 h-80 justify-between ${className}`}
    >
      <span className="text-gold text-xs tracking-widest">STATUS</span>
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-border rounded-full h-1.5">
            <div
              className="bg-gold h-1.5 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
