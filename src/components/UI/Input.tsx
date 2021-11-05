import React from 'react'
import './Input.css'

const Input = React.forwardRef((props,ref) => {
    console.log('props',props);
    return (
        <div className='input'>
            <label htmlFor={props.id} /*value={props.userInput.enteredTitle}*/>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})
export default Input