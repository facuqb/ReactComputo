import { useState } from "react"
import { AgotamientoPena, PenaImpuesta, TiempoDetencion } from "../components"


export const ComputoPage = () => {

  const [diasAcumulados = 0, setdiasAcumulados] = useState()

  const [condena = [], setCondena] = useState()
  

  const handleDiasAcumulados = (e) =>{
    setdiasAcumulados(e)
  }

  const handleCondena = (e) =>{
    setCondena(e)
  }

  return (
    <div className="p-2">
      
      <TiempoDetencion onDiasAcumulados={handleDiasAcumulados}  />
      <div className="d-md-flex">
        <PenaImpuesta diasAcumulados={diasAcumulados} onCondena={handleCondena} />
        <AgotamientoPena condena={condena} />

      </div>

    </div>
  )
} 
