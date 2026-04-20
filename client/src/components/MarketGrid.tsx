import React, { useState, useEffect } from 'react';
import { Bot, PlusCircle, Loader2, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stockData = [
  { symbol: "NVDA", price: "875.30", change: "+2.4%", trend: "up", points: "0,20 10,15 20,18 30,10 40,5" },
  { symbol: "MSFT", price: "420.10", change: "+1.1%", trend: "up", points: "0,15 10,18 20,12 30,8 40,5" },
  { symbol: "INTC", price: "43.20", change: "-0.5%", trend: "down", points: "0,5 10,8 20,12 30,15 40,20" }
];
// This tells TypeScript exactly what data to expect in each row
interface MarketEntry {
  company: string;
  type: string;
  count: number;
  sentiment: string;
}
export const MarketGrid = () => {
  const [data, setData] = useState<MarketEntry[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  // ADJUST THIS PORT NUMBER IF NEEDED
  const BACKEND_URL = 'https://obscure-fiesta-6w4459x4vjg2rx5j-5053.app.github.dev/api/market';

  const fetchData = async () => {
    try {
      const response = await fetch(BACKEND_URL);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.error("Connection failed. Check Port Visibility!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateAgent = async () => {
    setIsScanning(true);
    try {
      const response = await fetch(`${BACKEND_URL}/research`, { method: 'POST' });
      const result = await response.json();
      
      setTimeout(() => {
        fetchData();
        setIsScanning(false);
        alert(result.message);
      }, 1500);
    } catch (err) {
      setIsScanning(false);
      alert("Agent connection failed.");
    }
  };

  return (
    <div className="p-8 bg-slate-900 text-white min-h-screen font-sans">
      <div className="flex justify-between items-center mb-10 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold flex items-center gap-3">
            <Bot className="text-blue-400 w-8 h-8" /> 
            Vidhya's Intelligence Hub
          </h1>
          <p className="text-slate-400 mt-2">Full Stack SRE Monitoring System</p>
        </div>
        <button 
          onClick={handleCreateAgent} 
          disabled={isScanning}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full font-bold transition-all disabled:bg-slate-700 active:scale-95"
        >
          {isScanning ? <Loader2 className="animate-spin" /> : <PlusCircle />}
          {isScanning ? "Agent Scanning..." : "Run Research Agent"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {stockData.map((stock, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 p-5 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase">{stock.symbol}</p>
              <h3 className="text-2xl font-bold mt-1">${stock.price}</h3>
              <div className={`flex items-center gap-1 text-xs font-bold mt-2 ${stock.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {stock.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stock.change}
              </div>
            </div>
            <div className="w-20 h-12">
              <svg viewBox="0 0 40 25" className="w-full h-full">
                <polyline fill="none" stroke={stock.trend === 'up' ? '#4ade80' : '#f87171'} strokeWidth="2" points={stock.points} />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50">
        <table className="w-full text-left">
          <thead className="bg-slate-700/40 text-slate-300 text-xs uppercase font-bold">
            <tr>
              <th className="p-5">Company</th>
              <th className="p-5">Action</th>
              <th className="p-5">Headcount</th>
              <th className="p-5">Sentiment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {data && data.length > 0 ? (
              data.map((row, i) => (
                <tr key={i} className="hover:bg-blue-500/5">
                  <td className="p-5 font-bold">{row.company}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.type === 'Hiring' ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="p-5 font-mono">{row.count?.toLocaleString() || '0'}</td>
                  <td className="p-5 font-bold text-sm uppercase">{row.sentiment}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-20 text-center text-slate-500">
                  <Loader2 className="animate-spin inline mr-2" /> 
                  Waiting for Backend...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};