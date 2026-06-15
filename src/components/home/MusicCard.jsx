import React from "react";

const MusicCard = ({ className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      <span className="text-gold text-xs tracking-widest">
        CURRENTLY LISTENING
      </span>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col gap-2">
          <p className="text-text font-medium">Lo-fi Beats</p>
          <div className="flex items-end gap-1 h-8">
            <div className="w-1 bg-gold rounded-full animate-bounce h-4"></div>
            <div className="w-1 bg-gold rounded-full animate-bounce h-6"></div>
            <div className="w-1 bg-gold rounded-full animate-bounce h-3"></div>
            <div className="w-1 bg-gold rounded-full animate-bounce h-5"></div>
          </div>
        </div>
        <img
          src="https://picsum.photos/100/100"
          alt="Album Cover"
          className="w-24 h-24 rounded-lg object-cover border-gold border"
        />
      </div>
    </div>
  );
};

export default MusicCard;
