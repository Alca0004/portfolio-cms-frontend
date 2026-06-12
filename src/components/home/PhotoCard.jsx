import React from "react";

const PhotoCard = ({ className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold overflow-hidden h-80 ${className}`}
    >
      <img className="w-full h-full object-cover" src="/Me.png" alt="Me" />
    </div>
  );
};

export default PhotoCard;
