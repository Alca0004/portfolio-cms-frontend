import React from "react";

const StatusCard = ({ className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      <span className="text-gold text-xs tracking-widest">Status</span>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span>Available</span>
      </div>
      <span className="text-gold text-xs tracking-widest">Time Zone</span>
      <div className="flex items-center gap-2">
        <span>PST</span>
        <span className="w-2 h-2 rounded-full bg-muted"></span>
        <span>UTC-8</span>
      </div>
      <span className="text-gold text-xs tracking-widest">Based In</span>
      <div className="flex items-center gap-2">
        <span>Whistler, BC</span>
      </div>
      <button className="border border-gold text-gold text-xs px-4 py-2 rounded-full mt-auto">
        Hire Me
      </button>
    </div>
  );
};

export default StatusCard;
