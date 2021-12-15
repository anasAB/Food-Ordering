import React from 'react';
import './InputValidation.css'

const InputValidation = (props) => {
    const { inputFieldHasError } = props

    const validation = inputFieldHasError ?
        <div className='invalidField' ><i className="fas fa-times"></i> Please fill the field </div> : ''
    return (
        validation
    )
}

export default InputValidation