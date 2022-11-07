import {  Route, Routes } from "react-router-dom"
import { AppJudicialRoutes } from "../appJudicial"
import { LoginPage } from "../auth"
import { Navbar } from "../ui"

export const AppRouter = () => {
  return (
    <>
        <Routes>
       
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<AppJudicialRoutes />} />

        </Routes>
    </>
    )
}
