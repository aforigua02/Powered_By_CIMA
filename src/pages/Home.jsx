import { CardServicios } from "../components/CardServicios"
import { CardsUbicaciones } from "../components/CardsUbicaciones";
import { EcosistemaCima } from "../components/EcosistemaCima";
import { Portales } from "../components/Portales"
import { ResenaCima } from "../components/ResenasCima";
import {StatsBar} from "../components/StatsBar"
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