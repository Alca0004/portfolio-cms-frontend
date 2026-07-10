import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      setError("Email already exists");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-surface border border-gold rounded-xl p-8 w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-text">Create an Account</h1>
        <p className="text-muted text-sm">Start managing your portfolio</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">NAME</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Aaron Alcala"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">EMAIL</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          {error && (
            <p className="text-sm" style={{ color: "#ef4444" }}>
              {error}
            </p>
          )}
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
