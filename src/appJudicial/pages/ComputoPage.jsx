import { AgotamientoPena, PenaImpuesta, TiempoDetencion } from "../components"


export const ComputoPage = () => {
  return (
    <div className="p-2">
      
      <TiempoDetencion />
      <div className="d-md-flex">
        <PenaImpuesta />
        <AgotamientoPena />

      </div>

    </div>
  )
} 
