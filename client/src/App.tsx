import { MarketGrid } from './components/MarketGrid'
import './index.css' 

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation Header */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
              System Status: Operational
            </span>
          </div>
          
          <a 
            href="https://vidhyasree.github.io" 
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Portfolio
          </a>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="py-8">
        <MarketGrid />
      </main>

      {/* SRE Footer Note */}
      <footer className="py-6 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-xs">
          Engineered by Vidhya Sree Devaraju // Senior AI System Hub
        </p>
      </footer>
    </div>
  )
}
export default App;