import React from 'react'
import './Button.css'

const Buttons = (props) => {
    let disabledButton= false
    if(props.buttonType ==='HeaderCartButton' && !props.disabledButton){
        disabledButton= true
    }

    return (
        <button
            onClick={props.handleButtonClick}
            className={`button ${props.additionalClasses}`}
            disabled={disabledButton}>
            <i className={`fas fa-${props.iconType}`}></i>
            {props.children}
        </button>
    )

}

export default Buttons;