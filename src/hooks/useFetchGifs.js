import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //El hook "useEffect" NO PUEDE SER "async".
    useEffect( () => {
        getGifs( category ) //Retorna una PROMESA.
            .then( imgs => {
                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false //Es false porque ya se terminó de cargar las imágenes.
                    });
                }, 3000);
            })
    }, [ category ]) //El segundo argumento es un Arreglo de DEPENDENCIAS.
    //Si en ese argumento mandamos un arreglo VACÍO (sin ninguna dependencia); lo que está dentro de "useEffect", se EJECUTARÁ SÓLO LA PRIMERA VEZ QUE SE RENDERIZA EL COMPONENTE.

    return state; //Retorna el OBJETO: {data: [], loading: true}
}