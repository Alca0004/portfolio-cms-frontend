import React, { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      login(response.data.user, response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-surface border border-gold rounded-xl p-8 w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-text">Welcome Back</h1>
        <p className="text-muted text-sm">Sign in to your portfolio</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">EMAIL</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gold text-xs tracking-widest">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="bg-bg border border-border rounded-lg p-3 text-text outline-none focus:border-gold"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-gold text-bg font-bold py-3 rounded-lg"
            type="submit"
          >
            Sign In →
          </button>
        </form>
        <p className="text-muted text-sm text-center">
          Don't have an account?{" "}
          <a className="text-gold hover:underline" href="/register">
            Register →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
