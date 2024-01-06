import {useState, useEffect} from 'react'
import Header from "./components/Header/Header"

import { ChevronRight } from "lucide-react"

function App() {
  const [valueSearch, setValueSearch] = useState('');
  const [results, setResults] = useState('')   


  const handleSearchInputValue = () => { 

    fetch(`https://ipapi.co/${valueSearch}/json/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro na solicitação: ' + res.status);
        }
        return res.json();
      })
      .then(data => { setResults(data)})
      .catch(error => {
        console.error('Erro ao realizar a solicitação:', error);
      });
    
  }

  useEffect(()=> {

  },[])


  return (
    <main className="flex flex-col items-center w-full h-full">
      <Header />

      <div className="flex flex-col w-full items-center justify-center -mt-40">
        <span className="text-white font-medium size text-4xl mb-3">IP Address Tracker</span>
          <div className="flex w-full justify-center">
            <input value={valueSearch.trim()} onChange={(e) => setValueSearch(e.target.value)} placeholder="Search for any IP address or domain" className="max-md:w-[60%] w-[25%] h-12 indent-4 rounded-l-xl max-md:text-sm "/>
                <button onClick={handleSearchInputValue} className="flex items-center justify-center w-12 h-12 bg-black rounded-r-xl">
                  <ChevronRight size={24} className="text-white" />
                </button>
          </div>
      </div>

      <section className="sm:flex-col lg:flex w-[70%] sm:h-auto lg:h-36 justify-center bg-white rounded-lg mt-4">
        <div className="flex max-md:flex-col max-md:items-center w-full justify-between p-8 gap-5">
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">IP ADDRESS</span>
            <span className="font-bold text-slate-800 text-xl break-all">{results.ip}</span>

          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">LOCATION</span>
            <span className="font-bold text-slate-800 text-xl">{results.city},{results.region} </span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">TIMEZONE</span>
            <span className="font-bold text-slate-800 text-xl">UTC {results.utc_offset}</span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">ISP</span>
            <span className="font-bold text-slate-800 text-xl">{results.org}</span>
          </div>
        </div>
      </section>

      
    </main>
  )
}

export default App
