import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-surface border border-gold rounded-xl p-8 w-full max-w-lg flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-text">
          Lets work together &rarr;
        </h1>
        <p className="text-muted text-sm">
          Got a project? I’d love to hear about it.
        </p>
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-gold text-xs tracking-widest">NAME</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-gold text-xs tracking-widest">EMAIL</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">MESSAGE</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold resize-none"
            />
          </div>
          <button
            className="w-full bg-gold text-bg font-bold py-3 rounded-lg"
            type="submit"
          >
            Send a message &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
