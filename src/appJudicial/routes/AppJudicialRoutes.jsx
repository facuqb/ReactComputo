import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { ComputoPage, HonorariosPage, PenaPage } from "../pages"


export const AppJudicialRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="computo" element={<ComputoPage />} />
                <Route path="pena" element={<PenaPage />}/>
                <Route path="honorarios" element={<HonorariosPage />} />

                <Route path="/" element={<Navigate to="/computo" />} />
                
                
            </Routes>
        </div>
    </>
  )
}
