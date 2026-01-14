import {useEffect,useState} from "react";
import { NavLink, Link } from "react-router";


export const Navbar = ()=>{
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 110);
        };
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[]);
    return(
        <>
            <nav className={`flex justify-around p-3 fixed top-0 w-full z-50 transition-all duration-500 h-22 ${scrolled ? "bg-blue-primaryCima shadow-lg" : "bg-transparent pt-5"}`}>
                <img className="w-auto  rounded-full" src="src/assets/icons/logo_BYCIMA.jpg" alt="logo_Bycima" />
                <div className="flex gap-12 content-center items-center">
                    <ul className="flex gap-8 text-white font-roboto font-semibold text-lg">
                        <li className="text-xl"><a href="">Servicios</a></li>
                        <li className="text-xl"><a href="">Precios</a></li>
                        <li className="text-xl"><a href="">Agentes</a></li>
                        <li className="text-xl"><a href="">Inmuebles</a></li>
                        <li className="text-xl"><a href="aboutme">Nosotros</a></li>
                    </ul>
                </div>
                <div className="flex gap-12 content-center items-center">
                    <a className=" bg-red-secundaryCima text-white text-xl rounded-2xl p-2 px-4 font-roboto font-bold cursor-pointer">Contactanos</a>
                </div>
            </nav>
        </>
    )
}