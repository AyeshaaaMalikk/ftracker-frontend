import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";

function App() {
  return (
   <div
  className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=2400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>


      
      <header className="bg-black text-white">
  <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Left (existing – untouched) */}
    <div>
      <h1 className="text-2xl font-bold">
        FTracker 💰
      </h1>
      <p className="text-sm text-gray-300">
        Manage your income & expenses smartly
      </p>
    </div>

    {/* Right (NEW – animation only) */}
    <div className="hidden md:block">
      <p className="text-sm text-gray-400 transition-all duration-300 hover:text-green-400 hover:translate-x-2 cursor-default">
        Track • Save • Grow your money wisely
      </p>
    </div>

  </div>
</header>


      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-8 space-y-8">
       
        <div className="bg-white rounded-2xl shadow p-6
  transition-all duration-300
  hover:shadow-2xl hover:-translate-y-1">
  <Dashboard />
</div>

<div className="bg-white rounded-2xl shadow p-6
  transition-all duration-300
  hover:shadow-2xl hover:-translate-y-1">
  <AddTransaction />
</div>


      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-300 text-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
          <span>© 2026 Ayesha Awan</span>
          <span>FTracker • Finance Tracker</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
