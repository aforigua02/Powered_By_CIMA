import { CardServicios } from "../components/CardServicios"
import { CardsUbicaciones } from "../components/CardsUbicaciones";
import { EcosistemaCima } from "../features/home/components/EcosistemaCima.jsx";
import { Portales } from "../features/home/components/Portales.jsx"
import { ResenaCima } from "../features/home/components/ResenasCima.jsx";
import {StatsBar} from "../components/statsbar/StatsBar.jsx"
import {datosInmobiliarios} from "../data/infoServicios.js"
import {HomeBanner} from "../components/banners/HomeBanner.jsx"

export const Home = ()=>{
    
    return(
        <main>
            <HomeBanner/>
            <Portales/>
            <CardServicios/>  
            <section className={`flex justify-center gap-28 h-35  mt-20 bg-blue-primaryCima text-white font-roboto font-bold`}>
            {
                datosInmobiliarios.map((datos)=>(
                    <StatsBar
                        key={datos.id}
                        titulo={datos.titulo}
                        descripcion={datos.descripcion}
                    />
                ))
            }
            </section>
            <CardsUbicaciones/>
            <EcosistemaCima/>
            <ResenaCima/>
            {/* <CarruselAsesoria/> */}
        </main>
    );
};