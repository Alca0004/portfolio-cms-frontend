import React from "react";

const BioCard = ({ className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      <span className="text-gold text-xs tracking-widest">BIO</span>
      <p className="text-muted text-sm">
        Full-stack developer passionate about crafting seamless digital
        experiences. React, Node, MongoDB. Based in Whistler, BC — equally
        comfortable on a keyboard or a snowboard.
      </p>
    </div>
  );
};

export default BioCard;
