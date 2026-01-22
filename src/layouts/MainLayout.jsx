import { Outlet } from "react-router"
import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const MainLayout = ()=>{
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}