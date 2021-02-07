import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = ({ target: { value } }) => setInputValue(value)

    const submit = (event) => {

        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(c => [ inputValue,...c]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={submit}>
            <input onChange={inputChange} type="text" value={inputValue} />
            <button type="submit">Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
