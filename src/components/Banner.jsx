import { useLocation } from "react-router"

export const Banner = () =>{
    // const location = useLocation();
    // const images = {
    //     '/':'src/assets/images/sala_Banner.jpg',
    //     '/aboutme':''
    // }

    // const currentBg = backgrounds[location.pathname] || backgrounds['/'];

    return( //Banner que se muestra en el Home de la pagina
        <>
            <header className="relative bg-[url(src/assets/images/sala_Banner.jpg)] bg-cover h-auto flex justify-around z-0 ">
                <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
                <div className="relative z-10 text-white font-roboto flex flex-col w-1/2 justify-center pl-16 2xl:pl-28 gap-10 mt-20">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-6xl 2xl:text-8xl font-bold text-start">Soluciones Inmobiliarias Profesionales en Colombia</h1>
                        <p className="text-base text-start">En CIMA te acompañamos en la compra, venta y gestión de inmuebles con un enfoque profesional, transparente y centrado en tus objetivos.</p>
                    </div>
                    <div className="flex items-start gap-5">
                        <button className="bg-red-secundaryCima w-40 h-12 font-bold px-5 py-2 rounded-xl">UNIRSE A CIMA</button>
                        <a href="#" className="flex border-2 text-center items-center border-white h-12 px-5 py-2 rounded-xl font-bold">ENCUENTRA UN AGENTE</a>
                    </div>
                </div>
                <div className="flex w-1/2 items-center justify-center px-8 ">
                    <img src="src/assets/images/agente_Banner.png" alt="Asesor inmobiliara de servicios de CIMA" className="flex w-full h-screen pt-35 items-center justify-center z-10 md:w-145" />
                </div>
            </header>
        </>
    )
}