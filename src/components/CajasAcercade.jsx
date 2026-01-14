export const CajasAcercade = () =>{
    const contenedorCards = [
        {
            id:1,
            imagen:"",
            descripcion:""
        },
        {
            id:2,
            imagen:"",
            descripcion:""
        },
    ]
    return(
        <>
            <section className="h-20 ">
                {
                    contenedorCards.map((item,index)=>{
                        return(
                            <div key={index}>
                                <p className="text-black">{item.id}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}