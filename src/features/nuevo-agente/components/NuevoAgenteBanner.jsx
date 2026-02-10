import { PrimaryButton } from "@/components/common/PrimaryButton"
import { SecondButton } from "@/components/common/SecondButton"


export const NuevoAgenteBanner = () => {
    const desktop = " flex flex-col justify-center z-0 items-center font-roboto gap-6"
    return (
        <header className="flex flex-col h-screen font-roboto relative bg-[url(src/assets/images/sala_Banner.jpg)] bg-cover py-12 justify-center gap-8 w-full">
            <div className="absolute inset-0 bg-linear-to-r from-black/90 to-transparent z-10"></div>
            <div className="z-10 flex flex-col justify-center pl-10 2xl:pl-28 mt-20 lg:w-1/2 lg:pl-16 lg:mt-20 gap-10">
                <div className="flex flex-col gap-5">
                    <h2 className="flex flex-col text-4xl text-white font-semibold text-start">Sé parte del ecosistema<span>By CIMA</span></h2>
                    <div className="">
                        <h3 className="text-md text-start text-white">
                            ¡Hacemos más del 60% de las labores operativas de tu negocio para que tú te enfoques en vender!
                        </h3>
                    </div>
                </div>
                <div className="flex z-10 gap-5 flex-col items-start">
                    <PrimaryButton accion="UNIRME A CIMA"/>
                    <SecondButton descripcion = "CARRERA EN BIENES RAICES"/>
                </div>
            </div>
        </header>
    )
}
