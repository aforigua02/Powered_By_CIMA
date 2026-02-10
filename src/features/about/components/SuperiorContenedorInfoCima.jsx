import {contenedorSuperioresCards} from "../data/aboutCima" 
import { CajasAcercade } from "./CajasAcercade"

export const SuperiorContenedorInfoCima = () =>{
    return(
        <section className="h-auto my-30 px-20">
            {
                contenedorSuperioresCards.map((item,index)=>(
                    <CajasAcercade
                        key={index}
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                        boton={item.boton}
                        esInverso={index % 2 !== 0 } 
                    />
                ))
            }
        </section>
    )
}
