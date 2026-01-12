import { useState } from "react";
import { addTransaction } from "..api/services/api";

function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await addTransaction({
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    window.location.reload();
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input value={category} onChange={(e)=>setCategory(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTransaction;
