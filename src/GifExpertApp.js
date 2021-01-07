import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    /*
    const handleAdd = () => {
        //Esto no FUNCIONA si sólo queremos AÑADIR un nuevo elemento.
        //Porque lo que estamos haciendo es VOLVER A ASIGNAR LOS DATOS. Y ya NO ES UN ARREGLO; ahora es un String.
        //setCategories( 'HunterXUhunter' );
        setCategories( [...categories, 'HunterXHunter'] );

        //Si quisiéramos que el elemento a agregar esté al INICIO DEL NUEVO ARREGLO; hacemos lo siguiente:
        //setCategories( ['HunterXHunter', ...categories] );

        //Otra forma de agregar un elemento al arreglo:
        //setCategories( cats => [...cats, 'HunterXHunter'] );
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>            

            <ol>
                {
                    categories.map( item => (
                        <GifGrid 
                            key={ item }
                            category={ item }
                        />
                    ))
                }
            </ol>
        </>
    )
}