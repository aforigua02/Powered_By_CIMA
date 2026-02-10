import { PrimaryButton } from "@/components/common/PrimaryButton"
import { SecondButton } from "@/components/common/SecondButton"

export const HomeBanner = () =>{
    const bannerDesignDesktop = "text-6xl 2xl:text-8xl font-bold text-start"
    return( //Banner que se muestra en el Home de la pagina
        <>
            <header className={`relative bg-[url(src/assets/images/sala_Banner.jpg)] bg-cover h-auto lg:h-screen flex z-0 py-12 lg:justify-around lg:py-0`}>
                <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
                <div className="relative z-10 font-roboto flex flex-col justify-center pl-10 2xl:pl-28 gap-10 mt-20 lg:w-1/2 lg:pl-16 lg:mt-20">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl text-white lg:text-6xl 2xl:text-8xl font-bold text-start">Soluciones Inmobiliarias Profesionales en Colombia</h1>
                        <p className="text-md text-start text-white  lg:text-base lg:w-3/4">En CIMA te acompañamos en la compra, venta y gestión de inmuebles con un enfoque profesional, transparente y centrado en tus objetivos.</p>
                    </div>
                    <div className="flex items-start flex-col gap-5 lg:flex-row">
                        <PrimaryButton accion = "UNIRSE A CIMA"/>
                        <SecondButton descripcion = "ENCUENTRA UN AGENTE"/>
                    </div>
                </div>
                <div className="hidden lg:flex w-1/2 items-end justify-center px-8">
                    <img src="src/assets/images/agente_Banner.png" alt="Asesor inmobiliara de servicios de CIMA" className="flex w-auto h-auto lg:h-auto items-center justify-center z-10 object-contain" />
                </div>
            </header>
        </>
    )
}

