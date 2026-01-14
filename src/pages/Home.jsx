import { Banner } from "../components/Banner"
import { CardServicios } from "../components/CardServicios"
import { CardsUbicaciones } from "../components/CardsUbicaciones";
import { EcosistemaCima } from "../components/EcosistemaCima";
import { Portales } from "../components/Portales"
import { ResenaCima } from "../components/ResenasCima";
import {StatsBar} from "../components/StatsBar"

export const Home = ()=>{
    return(
        <main>
            <Portales/>
            <CardServicios/>
            <StatsBar/>
            <CardsUbicaciones/>
            <EcosistemaCima/>
            <ResenaCima/>
            {/* <CarruselAsesoria/> */}
        </main>
    );
};