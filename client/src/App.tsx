import { MarketGrid } from './components/MarketGrid';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Vidhya's Intelligence Hub
          </h1>
          <p className="text-slate-500 text-lg mt-2">SRE Monitoring & System Metrics</p>
        </header>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketGrid />
          {/* You can add more cards here later! */}
        </div>
      </div>
    </div>
  );
}

export default App;