import { NuevoAgenteBanner } from "../components/banners/NuevoAgenteBanner";
import { CardsAreasService } from "../components/CardsAreasService";
import { CardsNuevosAgentes } from "../components/CardsNuevosAgentes";

export const Nuevoagente = () => {
    return (  
        <main>
            <NuevoAgenteBanner/>
            <article className="relative w-full mb-40">
                <CardsAreasService/>
            </article>
            <CardsNuevosAgentes/>
        </main>
    );
}