
import { useState } from 'react';

const useValidation = (inputFieldValidation: any) => {

    const [inputValue, setInputValue] = useState<string>('');
    const [touchField, setTouchField] = useState<boolean>(false);


    let inputIsValid: boolean = inputFieldValidation(inputValue)
    const inputFieldHasError: boolean = !inputIsValid && touchField

    const inputChangeHandler = (event: any): void => setInputValue(event.target.value)

    const inputBlurHandler = (): void => setTouchField(true)

    const restInputField = (): void => {
        setInputValue('')
        setTouchField(false)
        inputIsValid = true
    }

    return {
        inputValue,
        inputIsValid,
        inputFieldHasError,
        inputChangeHandler,
        inputBlurHandler,
        restInputField
    }

}

export default useValidation