import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { Footer } from "../components/Footer"
import { ComputoPage, HonorariosPage, PenaPage} from "../pages"


export const AppJudicialRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container-xl">
            <Routes>
                <Route path="computo" element={<ComputoPage />} />
                <Route path="pena" element={<PenaPage />}/>
                <Route path="honorarios" element={<HonorariosPage />} />

                <Route path="/" element={<Navigate to="/computo" />} />
                
                
            </Routes>
        </div>
        <Footer />
    </>
  )
}
