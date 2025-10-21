import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartPie, FaCalendarAlt, FaPiggyBank } from "react-icons/fa";

function Sidebar() {
  return (
    <div style={{
      height: "100vh",
      width: "200px",
      background: "linear-gradient(180deg, #FFAFCC, #BDE0FE)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px",
      position: "fixed",
      left: 0,
      top: 0,
      fontFamily: "Poppins, sans-serif",
      boxShadow: "2px 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "40px", color: "#fff" }}> Let's Budget </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "25px", width: "100%", textAlign: "center" }}>
        <Link to="/" style={linkStyle}><FaHome /> Home</Link>
        <Link to="/dashboard" style={linkStyle}><FaChartPie /> Dashboard</Link>
        <Link to="/calendar" style={linkStyle}><FaCalendarAlt /> Calendar</Link>
        <Link to="/excess" style={linkStyle}><FaPiggyBank /> Excess</Link>
      </nav>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "500",
  transition: "0.3s",
  padding: "10px 0"
};

export default Sidebar;