export const PrimaryButton = ({accion}) =>{
    return (
        <button className="text-md text-white bg-red-secundaryCima h-12 font-bold px-5 py-2 rounded-md md:cursor-pointer hover:scale-105 lg:text-lg lg:w-auto">
            {accion}
        </button>
    )
}

