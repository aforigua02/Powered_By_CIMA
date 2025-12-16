import {useEffect,useState} from "react";

export const Navbar = ()=>{
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 90);
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
                        <li className="text-xl"><a href="">ByCIMA</a></li>
                        <li className="text-xl"><a href="">Servicios</a></li>
                        <li className="text-xl"><a href="">Precios</a></li>
                        <li className="text-xl"><a href="">Agentes</a></li>
                        <li className="text-xl"><a href="">Inmuebles</a></li>
                    </ul>
                </div>
                <div className="flex gap-12 content-center items-center">
                    <button className="bg-red-secundaryCima text-white text-lg rounded-2xl w-auto px-8 h-12 font-roboto font-bold" type="button">Contactanos</button>
                </div>
            </nav>
        </>
    )
}