import {portalesInmobiliarios} from "../data/homeData"

export const Portales = ()=>{
    const desktopDesign = "md:justify-between md:px-18 2xl:px-25 md:py-8 "
    const imagenesDesign = "md:w-40 2xl:w-48"
    return(
        <section className="z-0 p-5" >
            <ul className="flex flex-wrap justify-center items-center gap-4 md:justify-between md:px-10 md:py-4 ">
                {
                    portalesInmobiliarios.map((portal,index)=>(
                        <li key={index}>
                            <a href={portal.url} target="_blank" rel="noopener nofollow" >
                                <img className="w-25 lg:w-40 2xl:w-48" src={portal.imagen} alt="logo de finca raiz" />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}