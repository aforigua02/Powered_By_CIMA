import {contenedorInferioresCards} from "../data/aboutCima"
import { CajasAcercade } from "./CajasAcercade"

export const InferiorContenedorInfoCima = () => (
    <section className="h-auto my-30 px-20">
        {
            contenedorInferioresCards.map((item,index)=>(
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
