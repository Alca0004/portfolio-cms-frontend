import React from "react";

const PhotoCard = ({ className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border border-gold overflow-hidden ${className}`}
    >
      <img className="w-full h-full object-cover" src="/Me.png" alt="Me" />
    </div>
  );
};

export default PhotoCard;
