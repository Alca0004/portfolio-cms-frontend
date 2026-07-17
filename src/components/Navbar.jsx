import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="border border-gold text-bg font-bold py-2 px-4 rounded-lg">
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="text-muted hover:text-gold text-sm">
          Dashboard
        </Link>
        <Link to="/profile" className="text-muted hover:text-gold text-sm">
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className=" border border-gold text-gold text-sm py-1 px-3 rounded-lg hover:border-gold hover:text-gold"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
