import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell
} from "recharts";

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (cat) => {
    if (!description || !amount) return;
    if (editIndex !== null) {
      const updated = [...transactions];
      updated[editIndex] = { description, amount: parseFloat(amount), category: cat };
      setTransactions(updated);
      setEditIndex(null);
    } else {
      const existingIndex = transactions.findIndex(
        (t) => t.description === description && t.category === cat
      );
      if (existingIndex >= 0) {
        const updated = [...transactions];
        updated[existingIndex].amount += parseFloat(amount);
        setTransactions(updated);
      } else {
        setTransactions([...transactions, { description, amount: parseFloat(amount), category: cat }]);
      }
    }
    setDescription("");
    setAmount("");
  };

  const handleEdit = (index) => {
    const t = transactions[index];
    setDescription(t.description);
    setAmount(t.amount);
    setEditIndex(index);
  };

  const totalIncome = transactions.filter(t => t.category === "Income")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalEssentials = transactions.filter(t => t.category === "Essentials")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExcess = totalIncome - totalEssentials;

  const chartData = [
    { name: "Income", value: totalIncome },
    { name: "Spending", value: totalEssentials },
    { name: "Excess", value: totalExcess >= 0 ? totalExcess : 0 },
  ];

  const COLORS = ["#A2D2FF", "#FFC8DD", "#B28DFF"];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ color: "#B28DFF" }}>💖 Dashboard Overview</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={() => addTransaction("Income")} style={{ marginRight: 5 }}>
          {editIndex !== null ? "Save Income" : "Add Income"}
        </button>
        <button onClick={() => addTransaction("Essentials")}>
          {editIndex !== null ? "Save Expense" : "Add Expense"}
        </button>
      </div>

      <div style={{ width: "100%", height: 300, marginBottom: 20 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>📅 Calendar Overview</h3>
        <Calendar onChange={(value) => console.log(value)} value={new Date()} />
      </div>
    </div>
  );
}

export default Dashboard;
