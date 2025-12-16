import { Banner } from "../components/Banner"
import { CardServicios } from "../components/CardServicios"
import { CardsUbicaciones } from "../components/CardsUbicaciones";
import { Portales } from "../components/Portales"
import {StatsBar} from "../components/StatsBar"

export const Home = ()=>{
    return(
        <main>
            <Banner/>
            <Portales/>
            <CardServicios/>
            <StatsBar/>
            <CardsUbicaciones/>
        </main>
    );
};