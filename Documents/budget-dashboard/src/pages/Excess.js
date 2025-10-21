import React from "react";

function Excess() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #BDE0FE, #FFC8DD)",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ color: "#ff69b4", textAlign: "center" }}>💰 Excess Money Tracker</h1>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Keep track of how much money you’re saving or can splurge! ✨
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#0077b6" }}>Your Total Excess</h3>
        <p style={{ fontSize: "28px", fontWeight: "bold", color: "#2a9d8f" }}>
          $0.00
        </p>
        <p style={{ color: "#666" }}>Track this from your Dashboard updates 💖</p>
      </div>
    </div>
  );
}

export default Excess;