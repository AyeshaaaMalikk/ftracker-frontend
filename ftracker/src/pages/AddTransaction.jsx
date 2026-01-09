import { useState } from "react";
import axios from "axios";

function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/transactions", {
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    window.location.reload(); // refresh list
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-3xl mx-auto mt-6 bg-white p-6 rounded-xl shadow"
    >
      <h3 className="text-xl font-bold mb-4">Add Transaction</h3>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 mb-3"
        required
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full border p-2 mb-3"
        required
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border p-2 mb-3"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full border p-2 mb-3"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransaction;
