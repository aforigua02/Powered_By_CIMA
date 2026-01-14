import { Outlet } from "react-router"
import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Banner } from "../components/Banner"

export const MainLayout = ()=>{
    return (
        <>
            <Navbar/>
            <Banner/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}