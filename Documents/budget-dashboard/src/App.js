import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import Excess from "./pages/Excess";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "230px", width: "100%" }}>
          <TopBar />
          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/excess" element={<Excess />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;