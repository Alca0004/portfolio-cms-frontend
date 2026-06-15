import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const CTACard = ({ className }) => {
  return (
    <div
      className={`bg-surface rounded-xl border border-gold p-6 flex flex-col gap-3 ${className}`}
    >
      <span className="text-gold text-xs tracking-widest">
        Got a project in mind?
      </span>
      <h2 className="text-4xl font-bold text-text">
        Lets build something{" "}
        <span className="text-gold underline">together</span>
      </h2>
      <span className="text-gold text-xs tracking-widest">
        &rarr; Say hello!
      </span>
      <div className="flex gap-4 mt-auto">
        <a href="https://github.com/Alca0004" target="_blank">
          <FaGithub className="text-muted hover:text-gold text-2xl" />
        </a>
        <a href="#" target="_blank">
          <FaLinkedin className="text-muted hover:text-gold text-2xl" />
        </a>
        <a href="#" target="_blank">
          <FaInstagram className="text-muted hover:text-gold text-2xl" />
        </a>
        <a href="mailto:your@email.com">
          <MdEmail className="text-muted hover:text-gold text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default CTACard;
