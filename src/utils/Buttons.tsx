import React from 'react'
import './Button.css'

const Buttons = (props : any) => {
    let disabledButton = false

    // if(props.buttonType ==='HeaderCartButton' && !props.disabledButton){
    //     disabledButton = true
    // }else if(props.buttonType ==='FormIsValidation'){
    //     disabledButton = props.disabledButton
    // }

    let  additionalClasses = props.additionalClasses ? props.additionalClasses : ''

    return (
        <button
            onClick = {props.handleButtonClick}
            className = {`button ${additionalClasses}`}
            disabled = {disabledButton}>
            <i className = {`fas fa-${props.iconType}`}></i>
            {props.children}
        </button>
    )

}

export default Buttons;