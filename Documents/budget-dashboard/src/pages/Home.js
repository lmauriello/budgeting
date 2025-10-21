import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Home() {
  return (
    
    <div style={{ textAlign: "center", padding: "60px", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ color: "#FF7BAC" }}>💖 Welcome to Budget Babe 💖</h1>
      <p style={{ fontSize: "18px", color: "#666" }}>
        Manage your money like the confident, independent woman you are.
      </p>

      <div style={{ marginTop: "40px" }}>
        <Link
          to="/dashboard"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            backgroundColor: "#7BDFF2",
            color: "white",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💸 Go to Budget Dashboard
        </Link>

        <Link
          to="/excess"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 24px",
            backgroundColor: "#B28DFF",
            color: "white",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🌸 View Excess Money
        </Link>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h3>📅 This Month</h3>
         <Calendar
            onChange={(value) => console.log("Selected date:", value)}
            value={new Date()}
        />
        </div>
    </div>
  );
}

export default Home;