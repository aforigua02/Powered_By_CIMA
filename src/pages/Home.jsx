import { CardServiciosHome } from "@/features/home/components/CardServiciosHome.jsx"
import { CardsUbicaciones } from "@/features/home/components/CardsUbicaciones.jsx";
import { EcosistemaCima } from "@/features/home/components/EcosistemaCima.jsx";
import { Portales } from "@/features/home/components/Portales.jsx"
import { ResenaCima } from "@/features/home/components/ResenasCima.jsx";
import {HomeBanner} from "@/features/home/components/HomeBanner.jsx"
import { StatsBarHome } from "@/features/home/components/StatsBarHome.jsx";

export const Home = ()=>{
    
    return(
        <>
            <HomeBanner/>
            <Portales/>
            <CardServiciosHome/>  
            <StatsBarHome/>
            <CardsUbicaciones/>
            <EcosistemaCima/>
            <ResenaCima/>
            {/* <CarruselAsesoria/> */}
        </>
    );
};