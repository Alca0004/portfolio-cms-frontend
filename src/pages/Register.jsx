import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-surface border border-gold rounded-xl p-8 w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-text">Create an Account</h1>
        <p className="text-muted text-sm">Start managing your portfolio</p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">NAME</label>
            <input
              type="text"
              placeholder="Aaron Alcala"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">EMAIL</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
            />
          </div>
          <button
            className="w-full bg-gold text-bg font-bold py-3 rounded-lg"
            type="submit"
          >
            Create Account →
          </button>
        </form>
        <p className="text-muted text-sm text-center">
          Already have an account?{" "}
          <a className="text-gold hover:underline" href="/login">
            Sign in →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
