import { NuevoAgenteBanner } from "../components/banners/NuevoAgenteBanner";
import { CardsAreasService } from "../components/CardsAreasService";
import { CardsNuevosAgentes } from "../components/CardsNuevosAgentes";
import RedesCima from "../components/RedesCima.jsx";
import { NuevoAgente_StatsBar} from "../components/statsbar/NuevoAgente_StatsBar.jsx";
import {statsBarNuevoAgente} from "../data/infoServicios.js"


export const Nuevoagente = () => {
    return (  
        <main>
            <NuevoAgenteBanner/>
            <article className="relative w-full mb-40">
                <CardsAreasService/>
            </article>
            <CardsNuevosAgentes/>
            <article className="relative h-auto flex flex-col justify-center items-center gap-10 p-16 my-20 bg-[url(src/assets/images/fondo_Stats_about.jpg)] bg-cover bg-center shadow-xl/20">
                <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
                {
                    statsBarNuevoAgente.map((item)=>(
                        <NuevoAgente_StatsBar
                            key={item.id}
                            descripcion={item.descripcion}
                            buttom={item.buttom}
                        />
                    ))
                }
            </article>
            <RedesCima/>
        </main>
    );
}