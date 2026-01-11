import axios from "axios";

import { useEffect, useState } from "react";


function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://ftracker-ecru.vercel.app/api/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);
 
  const deleteTransaction = async (id) => {
  await axios.delete(`https://ftracker-ecru.vercel.app/api/transactions/${id}`);
  setTransactions((prev) => prev.filter((t) => t._id !== id));

};
 
  console.log(transactions);
 
  const total = transactions.reduce(
  (acc, t) => (t.type === "income" ? acc + t.amount : acc - t.amount),
  0
);
 
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6 mb-6 shadow-xl">
  <p className="text-sm opacity-80">Total Balance</p>
  <h1 className="text-3xl font-bold"> {total}</h1>
</div>

      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
  💰 FTracker Dashboard
</h2>


      {transactions.length === 0 && (
        <p className="text-gray-500">No transactions yet</p>
      )}

      <div className="space-y-4">
        {transactions.map((t) => (
          <div
            key={t._id}
            className={`p-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]
            ${t.type === "income" ? "bg-green-100" : "bg-red-100"}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{t.title}</h3>
              <span className="font-bold text-lg text-gray-800">
                   {t.amount}
                        </span>
            </div>
                  <button
  onClick={() => deleteTransaction(t._id)}
  className="text-red-600 font-bold"
>
  Delete
</button>

            <div className="text-sm text-gray-600 flex justify-between mt-1">
              <span>{t.category}</span>
              <span>{t.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Dashboard;
