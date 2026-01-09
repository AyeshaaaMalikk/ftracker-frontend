import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Dashboard />
        <AddTransaction />
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <p className="text-sm">
            © 2026 <span className="font-semibold">Ayesha Awan</span>
          </p>
          <p className="text-sm opacity-90">
            FTracker • Manage Your Finance Smartly
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
