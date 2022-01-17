import { IButtons } from 'src/TypeScript/TypeScriptStore';
import './Button.css'

const Buttons = (props: IButtons) => {

    let disabled = false
    const {buttonType,disabledButton,additionalClasses,iconType,children,handleButtonClick} = props

    if(buttonType ==='HeaderCartButton' && !disabledButton){
        disabled = true
    }else if(buttonType ==='FormIsValidation' && disabledButton !== undefined){
        disabled = disabledButton
    }


   let additionalClass : string = additionalClasses ? additionalClasses : ''

    return (
        <button
            onClick={handleButtonClick}
            className={`button ${additionalClass}`}
            disabled={disabled}>
            <i className={`fas fa-${iconType}`}></i>
            {children}
        </button>
    )

}

export default Buttons;