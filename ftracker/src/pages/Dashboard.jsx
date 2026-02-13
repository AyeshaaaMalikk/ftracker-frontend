import { useEffect, useState } from "react";
import { getTransactions, deleteTransaction } from "../services/api";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((res) => setTransactions(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    setTransactions((prev) =>
      prev.filter((t) => t._id !== id)
    );
  };

  const balance = transactions.reduce(
    (acc, t) =>
      t.type === "income" ? acc + t.amount : acc - t.amount,
    0
  );

  return (
    <div className="w-full">
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-6 shadow mb-6">
        <p className="text-sm opacity-90">Total Balance</p>
        <h2 className="text-3xl font-bold mt-1">
          {balance}
        </h2>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        FTracker Dashboard
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">
          No transactions yet
        </p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t._id}
              className="
                flex justify-between items-center
                border rounded-lg px-4 py-2
                transition-all duration-300
                hover:shadow-md hover:-translate-y-[2px]
                group
              "
            >
              <span>{t.title}</span>

              <div className="flex items-center gap-4">
                <span
                  className={
                    t.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {t.type === "income" ? "+" : "-"}
                  {t.amount}
                </span>

                {/* Delete (appears on hover) */}
                <button
                  onClick={() => handleDelete(t._id)}
                  className="
                    text-red-500 text-sm
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
