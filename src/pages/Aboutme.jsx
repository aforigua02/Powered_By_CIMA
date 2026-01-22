import { AboutBanner } from "../components/banners/AboutBanner.jsx"
import { CajasAcercade } from "../components/CajasAcercade.jsx"
import { StatsBar } from "../components/StatsBar.jsx"
import {contenedorSuperioresCards,statsDescripcion,contenedorInferioresCards} from "../data/infoServicios.js"

export const Aboutme = ()=>{
    return(
        <main>
        <AboutBanner/>
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
            <section className="relative h-auto flex flex-col justify-center items-center gap-10 p-16 my-20 bg-[url(src/assets/images/fondo_Stats_about.jpg)] bg-cover bg-center shadow-xl/20">
                <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
                {
                    statsDescripcion.map((datos)=>(
                        <StatsBar
                            key={datos.id}
                            titulo={datos.titulo}
                        />
                    ))
                }
                <a href="" className="text-2xl text-white font-semibold font-roboto border-2 rounded-sm border-white px-4 py-2 z-10">Empezar</a>
            </section>
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
        </main>
    )
}