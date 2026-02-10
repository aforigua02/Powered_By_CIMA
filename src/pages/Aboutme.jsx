import { AboutBanner } from "../features/about/components/AboutBanner.jsx"
import { SuperiorContenedorInfoCima } from "../features/about/components/SuperiorContenedorInfoCima.jsx"
import StatsBarAboutMe from "../features/about/components/StatsBarAboutMe.jsx"
import { InferiorContenedorInfoCima } from "../features/about/components/InferiorContenedorInfoCima.jsx"

export const Aboutme = ()=>{
    return(
        <>
        <AboutBanner/>
        <SuperiorContenedorInfoCima/>
        <StatsBarAboutMe/>
        <InferiorContenedorInfoCima/>
        </>
    )
}