import {useEffect,useState} from "react";
import logo from "../assets/images/logosCima/logo_BYCIMA.jpg"
import ModalFormulario from './ModalFormulario';
import { createPortal } from "react-dom";

export const Navbar = ()=>{
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 110);
        };
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[]);

    
    const [showModal,setShowModal]= useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);
    return(
        <>
            <nav className={`flex justify-around p-3 fixed top-0 w-full z-50 transition-all duration-500 h-22 ${scrolled ? "bg-blue-primaryCima shadow-lg" : "bg-transparent pt-5"}`}>
                <a className="w-16" href="/"><img className="w-auto  rounded-full" src={logo} alt="logo_Bycima" /></a>
                <div className="flex gap-12 content-center items-center">
                    <ul className="flex gap-8 text-white font-roboto font-semibold text-lg">
                        {/* <li className="text-xl"><a href="">Servicios</a></li>
                        <li className="text-xl"><a href="">Precios</a></li> */}
                        <li className="text-xl"><a href="">Inmuebles</a></li>
                        <li className="text-xl"><a href="nuevoagente">Agentes</a></li>
                        <li className="text-xl"><a href="aboutme">Nosotros</a></li>
                    </ul>
                </div>
                <div className="flex gap-12 content-center items-center">
                    <button className="bg-red-secundaryCima text-white text-xl rounded-2xl p-2 px-4 font-roboto font-bold cursor-pointer" onClick={() => setShowModal(true)}>Contactanos</button>
                    {
                        showModal && createPortal(
                            <ModalFormulario onClose={() => setShowModal(false)}/>,document.body
                        )
                    }
                </div>
            </nav>
        </>
    )

    
}