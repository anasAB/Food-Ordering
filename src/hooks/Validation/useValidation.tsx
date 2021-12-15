
import { useState } from 'react';

const useValidation = (inputFieldValidation) =>{

    const [inputValue, setInputValue] = useState('');
    const [touchField,setTouchField] = useState(false);


    let inputIsValid = inputFieldValidation(inputValue)

    const inputFieldHasError = !inputIsValid && touchField

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

    const inputBlurHandler = () =>{
        setTouchField(true)
    }

    const restInputField = () =>{
        setInputValue('')
        setTouchField(false)
        inputIsValid = true
    }

    return{
        inputValue,
        inputIsValid,
        inputFieldHasError,
        inputChangeHandler,
        inputBlurHandler,
        restInputField
    }

}

export default useValidation