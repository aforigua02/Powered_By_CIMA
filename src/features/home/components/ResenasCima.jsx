import { useState } from "react"
import {dataresenasCima} from "../data/homeData"

export const ResenaCima = () =>{

    const [resena,setResena] = useState(1)
    return(
        <section className="flex flex-col relative bg-blue-primaryCima mt-20 pt-20 w-full h-auto px-8 2xl:px-20">
            <div className="flex justify-around text-white font-roboto gap-16 pb-8 border-b-2 border-gray-30 ">
                {
                    dataresenasCima.map((item,index)=>(
                        <article className={`flex flex-col gap-5 ${resena === item.id ? "flex": "hidden"} lg:flex lg:w-80`} key={index}>
                            <img className="w-full h-65 object-cover object-center rounded-md" src={item.imagenAgente} alt="" />
                            <h4 className="text-xl">{item.nombreAgente}</h4>
                            <span>{item.calificacion}</span>
                            <p className="text-start w-full">{item.resena}</p>
                        </article>
                    ))
                }
            </div>
            <div className="absolute inset-0 bottom-60 flex justify-between text-white text-lg font-roboto lg:hidden px-5">
                <button onClick={()=> setResena(prev => prev > 1 ? prev -1 : dataresenasCima.length)}><img src="src\assets\icons\flecha-izquierda.png" alt="" className="w-10"/></button>
                <button onClick={()=> setResena(prev => prev < dataresenasCima.length ? prev +1 : 1)}><img src="src\assets\icons\flecha-derecha.png" alt="" className="w-10"/> </button>
                
            </div>
        </section>
    )
}