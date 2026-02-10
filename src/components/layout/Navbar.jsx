import {useEffect,useState} from "react";
import logo from "@/assets/images/logosCima/logo_BYCIMA.jpg"
import ModalFormulario from '../common/ModalFormulario';
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

    const [isOpen,setIsOpen] = useState(false);

    const [showModal,setShowModal]= useState(false);

    useEffect(() => {
        if (showModal || isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal, isOpen]);

    return(
        <>
            <nav className={`flex justify-around fixed top-0 w-full z-50 transition-all duration-500 h-20 lg:h-25 lg:items-center ${scrolled ? "bg-blue-primaryCima shadow-lg" : "bg-transparent"}`}>
                <div className="flex p-10 justify-between items-center w-full h-auto">
                    <a  href="/"><img className="w-12 lg:w-18 rounded-full" src={logo} alt="logo_Bycima" /></a>
                    <button onClick={()=>setIsOpen(true)}><img src="src/assets/icons/menu_blanco.png" alt="" className="w-10 lg:hidden"/></button> 
                </div>
                <div className={`flex flex-col w-full h-screen lg:auto fixed p-10 gap-10 items-center justify-center lg:flex lg:flex-row bg-blue-primaryCima lg:bg-transparent lg:static lg:justify-around lg:w-full ${isOpen ? "flex" : "hidden "} animate-fad z-10 `}>
                    <button onClick={()=>setIsOpen(false)}><img src="src/assets/icons/menu_blanco.png" alt="" className="w-10 absolute inset-0 justify-self-end lg:hidden mx-5 mt-5"/></button>
                    <ul className={`flex flex-col h-screen w-screen items-end px-5 border-white text-white font-roboto font-semibold text-lg md:items-center lg:flex-row lg:static lg:justify-around lg:w-full lg:h-auto  ${isOpen ? "animate-slide" : "animeate-slide"} `}>
                        {/* <li className="text-xl"><a href="">Servicios</a></li>
                        <li className="text-xl"><a href="">Precios</a></li> */}
                        <li className="flex justify-end-safe items-center gap-2 text-xl border-b md:border-none w-full text-end h-auto py-5">
                            <img src="src/assets/icons/icons_navegacion/casa.png" alt="" className="w-5 md:hidden" />
                            <a href="">Inmuebles</a>
                        </li>
                        <li className="flex justify-end-safe items-center gap-2 text-xl border-b md:border-none w-full text-end h-auto py-3">
                            <img src="src/assets/icons/icons_navegacion/agente.png" alt="" className="w-5 md:hidden" />
                            <a href="nuevoagente">Agentes</a>
                        </li>
                        <li className="flex justify-end-safe items-center gap-2 text-xl border-b md:border-none w-full text-end h-auto py-3">
                            <img src="src/assets/icons/icons_navegacion/informacion.png" alt="" className="w-5 md:hidden" />
                            <a href="aboutme">Nosotros</a>
                        </li>
                    </ul>
                    <button className="bg-red-secundaryCima text-white text-xl rounded-2xl p-2 px-4 font-roboto font-bold cursor-pointer " onClick={() => setShowModal(true)}>Contactanos</button>
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