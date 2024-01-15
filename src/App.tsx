import { useEffect, useState } from 'react'
import Header from "./components/Header/Header"

import { ChevronRight } from "lucide-react"

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './app.css'
import "leaflet/dist/leaflet.css"

import { IResults } from '../src/@types/types'


function App() {
  const [valueSearch, setValueSearch] = useState('');
  const [results, setResults] = useState<IResults>()

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
    .then(data => { 
      setResults(data)
    })
    .catch(error => {
      console.error('Erro ao realizar a solicitação:', error);
    });
  }

  useEffect(() => {
    handleSearchInputValue();
  }, []);


  return (
    <main className="flex flex-col items-center w-full h-full">
        <Header />

      <div className="flex flex-col w-full items-center justify-center absolute mt-8">
        <span className="text-white font-medium size text-4xl mb-3">IP Address Tracker</span>
          <div className="flex w-full justify-center">
            <input value={valueSearch.trim()} onChange={(e) => setValueSearch(e.target.value)} placeholder="Search for any IP address or domain" className="max-lg:w-[55%] w-[25%] h-12 indent-4 rounded-l-xl max-md:text-xs max-md:indent-2"/>
                <button onClick={handleSearchInputValue} className="flex items-center justify-center w-12 h-12 bg-black rounded-r-xl">
                  <ChevronRight size={24} className="text-white" />
                </button>
          </div>
       </div>


       
      <section className="sm:flex-col lg:flex w-[70%] sm:h-auto lg:h-36 justify-center bg-white rounded-lg mt-40 z-40 absolute">
        <div className="flex max-md:flex-col max-md:items-center w-full justify-between p-8 gap-5">
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">IP ADDRESS</span>
            <span className="font-bold text-slate-800 text-xl break-all text-center">{results?.ip == null ? '?' : results?.ip }</span>

          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">LOCATION</span>
            <span className="font-bold text-slate-800 text-xl text-center">{results?.city == null && results?.region == null ? '?' : results?.city + ', '+ results?.region}</span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">TIMEZONE</span>
            <span className="font-bold text-slate-800 text-xl text-center">UTC {results?.utc_offset == null ? '?' : results?.utc_offset }</span>
          </div>
          <div className="flex flex-col justify-center max-md:items-center">
            <span className="font-bold text-slate-400">ISP</span>
            <span className="font-bold text-slate-800 text-xl text-center">{results?.org == null ? ' ? ' : results?.org }</span>
          </div>
        </div>
      </section>

    

      <div className='w-full h-full z-10'>
        {results && results.latitude !== undefined && results.longitude !== undefined && (
          <MapContainer center={[results.latitude, results.longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <Marker position={[results.latitude, results.longitude]} >
            </Marker>
          </MapContainer>
        )}
      </div>

    </main>
  )
}

export default App
