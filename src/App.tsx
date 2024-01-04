import Header from "./components/Header/Header"

import { ChevronRight } from "lucide-react"

function App() {


  return (
    <main className="flex flex-col w-full h-full">
      <Header />

      <div className="flex flex-col w-full items-center justify-center -mt-40">
        <span className="text-white font-medium size text-3xl mb-3">IP Address Tracker</span>
          <div className="flex w-full justify-center">
            <input  placeholder="Search for any IP address or domain"  className="sm:w-[80%] lg:w-[500px] h-12 indent-4 rounded-l-xl "/>
                <button className="flex items-center justify-center w-12 h-12 bg-black rounded-r-xl">
                  <ChevronRight size={24} className="text-white" />
                </button>
          </div>
      </div>

    </main>
  )
}

export default App
