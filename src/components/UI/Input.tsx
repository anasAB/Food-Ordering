import React from 'react'
import './Input.css'

const Input = React.forwardRef((props:any,ref) => {
    const {id, label} = props
    return (
        <div className='input'>
            <label htmlFor={id} /*value={props.userInput.enteredTitle}*/>{label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})
export default Input