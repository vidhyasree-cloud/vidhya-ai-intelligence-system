export const MarketGrid = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">NVDA</h3>
          <p className="text-3xl font-extrabold text-slate-900">$875.30</p>
        </div>
        <div className="text-right">
          <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded">
            +2.4%
          </span>
        </div>
      </div>
      
      {/* This container will fix your chart slope */}
      <div className="h-32 w-full bg-slate-50 rounded-lg relative overflow-hidden mt-4">
        {/* Your chart component or SVG would go here */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-400/20 border-t-2 border-green-500" 
             style={{ clipPath: 'polygon(0 100%, 0 40%, 20% 30%, 40% 50%, 60% 20%, 80% 40%, 100% 0, 100% 100%)' }}>
        </div>
      </div>
    </div>
  );
};