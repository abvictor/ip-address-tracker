import Header from "./components/Header/Header"

import { ChevronRight } from "lucide-react"

function App() {
   

  
  return (
    <main className="flex flex-col items-center w-full h-full">
      <Header />

      <div className="flex flex-col w-full items-center justify-center -mt-40">
        <span className="text-white font-medium size text-4xl mb-3">IP Address Tracker</span>
          <div className="flex w-full justify-center">
            <input  placeholder="Search for any IP address or domain" className="max-md:w-[60%] w-[25%] h-12 indent-4 rounded-l-xl max-md:text-sm "/>
                <button className="flex items-center justify-center w-12 h-12 bg-black rounded-r-xl">
                  <ChevronRight size={24} className="text-white" />
                </button>
          </div>
      </div>

      <section className="sm:flex-col lg:flex w-[70%] sm:h-auto lg:h-36 justify-center bg-white rounded-lg mt-4">
        <div className="flex max-md:flex-col max-md:items-center w-full justify-between p-8 gap-5">
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">IP ADDRESS</span>
            <span className="font-bold text-slate-800 text-xl">192.212.174.101</span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">LOCATION</span>
            <span className="font-bold text-slate-800 text-xl">Brooklyn, NY 10001</span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">TIMEZONE</span>
            <span className="font-bold text-slate-800 text-xl">UTC -05:00</span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">ISP</span>
            <span className="font-bold text-slate-800 text-xl">SpaceX Starlink</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
