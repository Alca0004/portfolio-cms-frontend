import React from "react";

const StatCard = ({ label, value }) => {
  return (
    <div className="bg-surface border border-gold rounded-xl p-6">
      <span className="text-gold text-xs tracking-widest">{label}</span>
      <p className="text-4xl font-bold text-text">{value}</p>
    </div>
  );
};

export default StatCard;
