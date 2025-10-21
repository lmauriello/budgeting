import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div style={{
      width: "100%",                
      height: "70px",
      background: "linear-gradient(to right, #FFAFCC, #BDE0FE)",  // Gradient left-to-right
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      fontFamily: "Poppins, sans-serif"
    }}>
      {/* Big bold title */}
      <h1 style={{
        color: "#fff",
        fontWeight: "800",
        fontSize: "28px",
        margin: 0
      }}>
        
      </h1>

      {/* Navigation links */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/calendar" style={linkStyle}>Calendar</Link>
        <Link to="/excess" style={linkStyle}>Excess</Link>
      </nav>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#fff",      
  fontWeight: "500",
  fontSize: "16px",
  transition: "0.3s",
};

export default TopBar;