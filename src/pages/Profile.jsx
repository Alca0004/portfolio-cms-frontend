import React from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
  const user = { name: "Aaron Alcala", email: "Alca0004@gmail.com" };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
          {/* Left Card */}
          <div className="bg-surface border border-gold rounded-xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                <span className="text-bg font-bold text-2xl">
                  {user.name[0].toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-bold text-text text-xl">{user.name}</p>
                <p className="text-muted text-sm">
                  Full-stack dev & designer · Whistler, BC
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-border"></div>
            <h2 className="font-bold text-lg text-text">Edit Profile</h2>
            <form className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-gold text-xs tracking-widest">
                    DISPLAY NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-gold text-xs tracking-widest">
                    LOCATION
                  </label>
                  <input
                    type="text"
                    placeholder="Based in"
                    className="w-full bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gold text-xs tracking-widest">BIO</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about yourself"
                  className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold resize-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-gold text-xs tracking-widest">
                    GITHUB
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-gold text-xs tracking-widest">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="email@email.com"
                    className="w-full bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Right Card */}
          <div className="bg-surface border border-gold rounded-xl p-8 flex flex-col gap-4">
            <h2 className="font-bold text-lg text-text">SKILLS</h2>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label className="text-gold text-xs tracking-widest">
                  REACT / NEXT
                </label>
                <span className="text-muted text-xs">50%</span>
              </div>
              <input
                className="w-full accent-gold"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label className="text-gold text-xs tracking-widest">
                  FIGMA / DESIGN
                </label>
                <span className="text-muted text-xs">50%</span>
              </div>
              <input
                className="w-full accent-gold"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label className="text-gold text-xs tracking-widest">
                  NODE / API
                </label>
                <span className="text-muted text-xs">50%</span>
              </div>
              <input
                className="w-full accent-gold"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label className="text-gold text-xs tracking-widest">
                  TAILWIND / CSS
                </label>
                <span className="text-muted text-xs">50%</span>
              </div>
              <input
                className="w-full accent-gold"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
              />
            </div>
            <div className="w-full h-px bg-border"></div>
            <div className="flex flex-col gap-2">
              <label className="text-gold text-xs font-bold tracking-widest">
                PROFILE IMAGE
              </label>
              <div className="border border-dashed border-muted rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <span className="text-muted text-sm">
                  Drop an image or click to browse
                </span>
                <input type="file" className="hidden" id="imageUpload" />
                <label
                  htmlFor="imageUpload"
                  className="text-gold text-xs cursor-pointer hover:underline"
                >
                  Browse files
                </label>
              </div>
            </div>

            <button className="w-full bg-gold text-bg font-bold py-3 rounded-lg">
              Save Profile →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
