import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or save transaction
  const addTransaction = (cat) => {
    if (!description || !amount) return;

    if (editIndex !== null) {
      // Save edited transaction
      const updated = [...transactions];
      updated[editIndex] = { description, amount: parseFloat(amount), category: cat };
      setTransactions(updated);
      setEditIndex(null);
    } else {
      // Check if same description & category exists, then merge
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

  // Edit a transaction
  const handleEdit = (index) => {
    const t = transactions[index];
    setDescription(t.description);
    setAmount(t.amount);
    setEditIndex(index);
  };

  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.category === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalEssentials = transactions
    .filter((t) => t.category === "Essentials")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExcess = totalIncome - totalEssentials;

  // Chart data
  const chartData = [
    { name: "Income", value: totalIncome },
    { name: "Spending Essentials", value: totalEssentials },
    { name: "Excess Money", value: totalExcess >= 0 ? totalExcess : 0 },
  ];

  const COLORS = ["#4CAF50", "#FF9800", "#2196F3"];

  // Helper to group transactions by description
  const groupByDescription = (cat) => {
    const filtered = transactions.filter(t => t.category === cat);
    const grouped = {};
    filtered.forEach(t => {
      grouped[t.description] = (grouped[t.description] || 0) + t.amount;
    });
    return Object.entries(grouped).map(([desc, amt]) => ({ description: desc, amount: amt }));
  };

  return (
    <div style={{ maxWidth: 800, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>💸 Budget Dashboard</h1>

      {/* Input Section */}
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
        <button
          onClick={() => addTransaction("Income")}
          style={{ marginRight: 5 }}
        >
          {editIndex !== null ? "Save Income" : "Add Income"}
        </button>
        <button onClick={() => addTransaction("Essentials")}>
          {editIndex !== null ? "Save Essentials" : "Add Essential"}
        </button>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 300, marginBottom: 20 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
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

      {/* Sections */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Income */}
        <div style={{ width: "30%", border: "1px solid #ccc", padding: 10 }}>
          <h3>Income</h3>
          <p>Total: ${totalIncome.toFixed(2)}</p>
          <ul>
            {groupByDescription("Income").map((t, i) => (
              <li key={i}>
                {t.description}: ${t.amount.toFixed(2)}
                <button
                  onClick={() => {
                    // Find first transaction with this description to edit
                    const idx = transactions.findIndex(
                      tr => tr.description === t.description && tr.category === "Income"
                    );
                    handleEdit(idx);
                  }}
                  style={{ marginLeft: 5 }}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Essentials */}
        <div style={{ width: "30%", border: "1px solid #ccc", padding: 10 }}>
          <h3>Spending Essentials</h3>
          <p>Total: ${totalEssentials.toFixed(2)}</p>
          <ul>
            {groupByDescription("Essentials").map((t, i) => (
              <li key={i}>
                {t.description}: ${t.amount.toFixed(2)}
                <button
                  onClick={() => {
                    const idx = transactions.findIndex(
                      tr => tr.description === t.description && tr.category === "Essentials"
                    );
                    handleEdit(idx);
                  }}
                  style={{ marginLeft: 5 }}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Excess */}
        <div style={{ width: "30%", border: "1px solid #ccc", padding: 10 }}>
          <h3>Excess Money</h3>
          <p>Total: ${totalExcess >= 0 ? totalExcess.toFixed(2) : 0}</p>
        </div>
      </div>
    </div>
  );
}

export default App;