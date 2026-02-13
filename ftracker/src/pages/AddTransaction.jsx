import { useState } from "react";
import { addTransaction } from "../services/api";

export default function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    await addTransaction({
      title,
      amount: Number(amount),
      type,
    });

    setTitle("");
    setAmount("");
    window.location.reload();
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Add Transaction
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Transaction title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Type */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
