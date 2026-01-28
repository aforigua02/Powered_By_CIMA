import iconFacebook from "@/assets/icons/icons_redSocial/facebook.png"
import iconWhatsApp from "@/assets/icons/icons_redSocial/whatsapp.png"
import iconInstagram from "@/assets/icons/icons_redSocial/instagram.png"

const iconosRedesociales = [
    {
        id:1,
        imagen:iconFacebook,
        titulo:"Icono de facebook",
        link:"https://www.facebook.com/p/Powered-by-CIMA-61564329037432/"
    },
    {
        id:2,
        imagen:iconWhatsApp,
        titulo:"Icono de whatsapp",
        link:""
    },
    {
        id:3,
        imagen:iconInstagram,
        titulo:"Icono de Instagram",
        link:"https://www.instagram.com/powered.by.cima/"
    },
]

function RedesSociales({size = "h-10"}) {
    return (
        <ul className='flex justify-center gap-4 pt-5'>
            {  
                iconosRedesociales.map((red,index)=>(
                    <li key={index}>
                        <a href={red.link} target="_blank" rel="noopener noreferrer"><img className={`${size} w-auto`} src={red.imagen} alt={red.titulo} /></a>
                    </li>
                ))
            }
        </ul>
    )
}

export default RedesSociales