import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );//Cada que se dispara este evento; se actualiza el valor de "inputValue" con lo ÚLTIMO QUE ESCRIBIÓ EL USUARIO.
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); //Prevenimos el comportamiento por defecto que tiene la etiqueta <form>. El cual es refrescar la página.
        
        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}