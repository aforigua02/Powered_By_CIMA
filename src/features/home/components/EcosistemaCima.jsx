import {ecosistemaCima} from "../data/homeData"
import {PrimaryButton} from "@/components/common/PrimaryButton"

const ElementosEcosistema = ({elementos,esInverso})=>(
    <article className={`flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center text-white  2xl:h-auto ${esInverso ? "bg-blue-primaryCima" : "bg-white"}`}>
        <img loading="lazy" className="w-22" src={elementos.imageEcosistema} alt="imagen de simplificacion" />
        <h3 className={`text-xl font-bold ${esInverso ? "text-white" : "text-blue-primaryCima"}`}>{elementos.titulo}</h3>
        <p className={`text-center 2xl:w-96 ${esInverso ? "text-white" : "text-blue-primaryCima"} `}>{elementos.descripcion}</p>
    </article>
)

// "flex font-roboto h-auto animate-[inwardsY_1s_ease-out_forwards]   div2 gap-5 py-10 px-48 2xl:px-96 items-center"
export const EcosistemaCima = ()=>{
    return (
        <section className="flex font-roboto h-auto animate-[inwardsY_1s_ease-out_forwards] mt-20">
            <div className="flex flex-col w-full h-auto p-4 gap-16 lg:mx-30 justify-center items-center">
                <div className="flex flex-col gap-5 items-center">
                    <h2 className="text-4xl 2xl:text-5xl text-blue-primaryCima text-center font-semibold">Ecosistema diseñado para crecer</h2>
                    <p className="text-base lg:text-lg w-3/4 text-blue-primaryCima text-center">Un ecosistema que une tecnología, operación y acompañamiento para que el agente escale con claridad y sin caos</p>
                    <div className="flex items-center justify-center ">
                        <PrimaryButton accion = "Comenzar"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 shadow-xl border border-gray-300">
                    {
                        ecosistemaCima.map((elemento,index)=>{
                            return(
                                <ElementosEcosistema key={index} elementos={elemento} esInverso={index % 2 == 0}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

