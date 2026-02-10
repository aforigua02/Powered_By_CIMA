//imports de la vista home
import imgservices1 from "@/assets/images/imagen_card1.jpg"
import imgservices2 from "@/assets/images/imagen_card2.jpg"
import imgservices3 from "@/assets/images/imagen_card3.jpg"
import imgservices4 from "@/assets/images/imagen_card4.jpg"
//imports imagenes de portales inmobiliarios
import fincaRaiz from "@/assets/images/portales_img/fincaraiz_Logo.png"
import merdadoLibre from "@/assets/images/portales_img/mercado-libre-logo.png"
import metroCuadrado from "@/assets/images/portales_img/metrocuadrado_logo.png"
import cienCuadras from "@/assets/images/portales_img/ciencuadras_logo.png"
import proppit from "@/assets/images/portales_img/proppit_logo.png"
//Import imagenes de ubicaciones CIMA
import cardColombia from "@/assets/images/colombiaCard.jpg"
import cardCostaRica from "@/assets/images/costaRica.jpg"
import cardRepublicaDominicana from "@/assets/images/republicaDominicana.jpg"
//imports imagenes ecosistema
import sinComplicaciones from "@/assets/icons/icons_ecosistema/simplificar.png"
import gestiónInteligente from "@/assets/icons/icons_ecosistema/business-intelligence.png"
import maximizar from "@/assets/icons/icons_ecosistema/aumento.png"
import visibilidad from "@/assets/icons/icons_ecosistema/visibilidad.png"
import marketing from "@/assets/icons/icons_ecosistema/megafono.png"
import optimizacion from "@/assets/icons/icons_ecosistema/actuacion.png"
//import imagenes reseñas
import jaimeTorres from "@/assets/images/img_opiniones/JAIME-TORRES.png"
import claraRivera from "@/assets/images/img_opiniones/Clara-Rivera.JPG"
import rafaelOrjuela from "@/assets/images/img_opiniones/RAFAEL-ORJUELA.png"
import alonsoRodriguez from "@/assets/images/img_opiniones/Alonso-Rodriguez.jpeg"


//-----------------DATOS HOME-------

//------Portales Inmobiliarios
export const portalesInmobiliarios = [
    {
        id:1,
        imagen:fincaRaiz,
        url:"https://www.fincaraiz.com.co/inmobiliarias/cima-group-sas/175158607"
    },
    {
        id:2,
        imagen:merdadoLibre,
        url:"https://listado.mercadolibre.com.co/inmuebles/_CustId_1919642730"
    },
    {
        id:3,
        imagen:metroCuadrado,
        url:"/"
    },
    {
        id:4,
        imagen:cienCuadras,
        url:"https://www.ciencuadras.com/inmobiliaria/powered-by-cima-892017"
    },
    {
        id:5,
        imagen:proppit,
        url:"https://www.properstar.com/agencia/cima-group/6352793"
    },
]

//cardServicios
export const serviciosCard = [ //Paginas y servicios que ofrece el home
    {
        id:1,
        imagen: imgservices1,
        titulo:"ENCONTRAR INMUEBLE"
    },
    {
        id:2,
        imagen: imgservices2,
        titulo:"UNIRME A CIMA"
    },
    {
        id:3,
        imagen: imgservices3,
        titulo:"ASESORIA"
    },
    {
        id:4,
        imagen: imgservices4,
        titulo:"ENCUENTRA UN AGENTE"
    }
]


export const datosInmobiliarios = [ //Datos del StatsBar del home
    {
        id:1,
        titulo:"+1000",
        descripcion:"Casos de exito"
    },
    {
        id:2,
        titulo:"2500",
        descripcion:"Propiedades vendidas"
    },
    {
        id:3,
        titulo:"$20.3B",
        descripcion:"Vendidos en negocios"
    }
]

export const cardUbicaciones = [
    {
        id:1,
        imagen: cardColombia,
        titulo:"COLOMBIA",
        propCaptadas:4.5,
        descripcion:"Presencia sólida y operación madura; acompañamos a miles de agentes con procesos claros y un portafolio amplio de propiedades en todo el país."
    },
    {
        id:2,
        imagen: cardCostaRica,
        titulo:"COSTA RICA",
        propCaptadas:1.5,
        descripcion:"Expansión estratégica en un mercado dinámico; impulsamos a los agentes con formación y tecnología, respaldados por un inventario activo de propiedades."
    },
    {
        id:3,
        imagen: cardRepublicaDominicana,
        titulo:"REPUBLICA DOMINICANA",
        propCaptadas:1.1,
        descripcion:"Crecimiento acelerado en un destino clave de inversión; equipamos a los agentes con estructura y comunidad, gestionando propiedades turísticas y residenciales en expansión."
    }
]

export const ecosistemaCima = [
    {
        id:1,
        imageEcosistema:sinComplicaciones,
        titulo:"Sin complicaciones",
        descripcion:"Te lo hacemos fácil. Tú sigues creciendo."
    },
    {
        id:2,
        imageEcosistema:gestiónInteligente,
        titulo:"Gestión inteligente",
        descripcion:"Operación clara y ordenada. Decisiones fáciles y precisas."
    },
    {
        id:3,
        imageEcosistema:maximizar,
        titulo:"Maximizar",
        descripcion:"Más alcance, más ventas. Menos esfuerzo para ti"
    },
    {
        id:4,
        imageEcosistema:visibilidad,
        titulo:"Visibilidad",
        descripcion:"Más ojos en tus propiedades. Más posibilidades de vender."
    },
    {
        id:5,
        imageEcosistema:marketing,
        titulo:"Marketing",
        descripcion:"Tu marca en todas partes. Tus propiedades donde todos las ven."
    },
    {
        id:6,
        imageEcosistema:optimizacion,
        titulo:"Optimización",
        descripcion:"Todo funciona mejor. Tú trabajas más suave.",
    },
    
]

// ----------------- Data de reseña de agentes

export const dataresenasCima = [
    {
        id:1,
        imagenAgente:jaimeTorres,
        nombreAgente:"Jaime Torres",
        calificacion:"⭐⭐⭐⭐⭐",
        resena:"CIMA me dio una estructura que nunca tuve en otras inmobiliarias. Hoy puedo enfocarme en vender mientras la operación fluye sin caos"
    },
    {
        id:2,
        imagenAgente:claraRivera,
        nombreAgente:"Maria Clara Rivera",
        calificacion:"⭐⭐⭐⭐⭐",
        resena:"El acompañamiento y las herramientas son otro nivel. Pasé de trabajar solo y desordenado a sentirme parte de un equipo que realmente impulsa mi crecimiento."
    },
    {
        id:3,
        imagenAgente:rafaelOrjuela,
        nombreAgente:"Rafael Orjuela",
        calificacion:"⭐⭐⭐⭐⭐",
        resena:"Lo que más valoro de CIMA es la claridad. Siento respaldo, procesos claros y una comunidad que te sostiene en los momentos difíciles."
    },
    {
        id:4,
        imagenAgente:alonsoRodriguez,
        nombreAgente:"Alonso Rodriguez",
        calificacion:"⭐⭐⭐⭐⭐",
        resena:"Entré buscando capacitación y terminé encontrando un sistema completo. Todo está pensado para que puedas producir más sin quemarte."
    }
]
