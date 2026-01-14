import {useEffect, useState} from "react"
import cardServicio1 from "../assets/images/asesoriaPro.webp"
import cardServicio2 from "../assets/images/asesoriaJuridica.webp"
import cardServicio3 from "../assets/images/asesoriaEquipo.webp"

export const CarruselAsesoria = ()=>{

    const cardServicios = [
        {
            id:1,
            imagen: cardServicio1,
            titulo:"ASESORIA PROFESIONAL",
        },
        {
            id:2,
            imagen: cardServicio2,
            titulo:"ASESORIA JURIDICA",
        },
        {
            id:3,
            imagen: cardServicio3,
            titulo:"MENTORIAS",
            propCaptadas:1.1,
        }
    ]
    const cards =[0,1,2]
    const [activeIndex,setactiveIndex] = useState(1);
    return(
        <>
            <section className="flex flex-col  justify-center items-center gap-8 my-30 h-auto">
                <h2 className="text-4xl text-blue-primaryCima font-bold">Asesoria Profesional</h2>
                <div className="flex overflow-x-hidden w-full h-[550px] 2xl:h-[850] justify-center items-center p-16">
                    <div className="flex w-full h-full justify-center gap-16 2xl:gap-20" >
                        {
                            cardServicios.map((item,index)=>{
                                const isActive = index === activeIndex
                                return(
                                        <article onClick={()=>setactiveIndex(index)} className={`relative flex items-center justify-center w-60 transition-all cursor-pointer ${isActive? "scale-120":"scale-100" } 2xl:w-70`}>
                                            <h3 className="absolute text-blue-primaryCima font-bold text-xl bg-gray-300/70 w-full text-center">{item.titulo}</h3>
                                            <img src={item.imagen} alt="" className="object-cover inset-0 w-screen h-96 rounded-2xl shadow-xl/50"  loading="lazy"/>
                                        </article>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}