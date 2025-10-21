import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ color: "#B28DFF" }}>🌸 Budget Calendar</h1>
      <p>Track your spending by date and see trends over time 💖</p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}>
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName="react-calendar__tile--active"
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Selected Date: {date.toDateString()}</h3>
        <p style={{ color: "#666" }}>We’ll show your transactions for this date here soon ✨</p>
      </div>
    </div>
  );
}

export default CalendarPage;