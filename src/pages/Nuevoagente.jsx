import { NuevoAgenteBanner } from "@/features/nuevo-agente/components/NuevoAgenteBanner.jsx";
import { CardsBeneficios_NuevosAgentes } from "@/features/nuevo-agente/components/CardsBeneficios_NuevosAgentes.jsx";
import RedesCima from "@/features/nuevo-agente/components/RedesCima.jsx";
import { AreasNuevoAgente } from "../features/nuevo-agente/components/AreasNuevoAgente";
import {  NuevoAgente_StatsBar } from "../features/nuevo-agente/components/NuevoAgente_StatsBar";


export const Nuevoagente = () => {
    return (  
        <>
            <NuevoAgenteBanner/>
            <AreasNuevoAgente/>
            <CardsBeneficios_NuevosAgentes/>
            <NuevoAgente_StatsBar/>
            <RedesCima/>
        </>
    );
}