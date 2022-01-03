import React from 'react'
import useValidation from './../../hooks/Validation/useValidation';
import InputValidation from 'src/utils/inputValidation/InputValidation';
import Buttons from './../../utils/Buttons';

const InputForm = (props) => {

    const { closeForm } = props

    //!FirstName
    const {
        inputValue: firstName,
        inputIsValid: nameValueIsValid,
        inputFieldHasError: nameFieldHasError,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        restInputField: nameResetField
    } = useValidation(inputValue => inputValue.trim() !== '')

    //!Last Name
    const {
        inputValue: lastNameField,
        inputIsValid: lastNameValueIsValid,
        inputFieldHasError: lastNameFieldHasError,
        inputChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        restInputField: lastNameResetField
    } = useValidation(inputValue => inputValue.trim() !== '')

    //!Email
    const {
        inputValue: emailField,
        inputIsValid: emailValueIsValid,
        inputFieldHasError: emailFieldHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        restInputField: emailResetField
    } = useValidation(inputValue => inputValue.includes('@'))

    //!City
    const {
        inputValue: cityField,
        inputIsValid: cityValueIsValid,
        inputFieldHasError: cityFieldHasError,
        inputChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        restInputField: cityResetField
    } = useValidation(inputValue => inputValue.trim() !== '')

    //!Street
    const {
        inputValue: streetField,
        inputIsValid: streetValueIsValid,
        inputFieldHasError: streetFieldHasError,
        inputChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        restInputField: streetResetField
    } = useValidation(inputValue => inputValue.trim() !== '')

    //!Zip Code
    const {
        inputValue: zipField,
        inputIsValid: zipValueIsValid,
        inputFieldHasError: zipFieldHasError,
        inputChangeHandler: zipChangeHandler,
        inputBlurHandler: zipBlurHandler,
        restInputField: zipResetField
    } = useValidation(inputValue => inputValue.trim() !== '')

    //! Validate Form Inputs
    let FormIsValidation = nameValueIsValid && !nameFieldHasError &&
        lastNameValueIsValid && !lastNameFieldHasError &&
        emailValueIsValid && !emailFieldHasError &&
        cityValueIsValid && !cityFieldHasError &&
        streetValueIsValid && !streetFieldHasError &&
        zipValueIsValid && !zipFieldHasError


    const formSubmitHandler = (event) => {
        event.preventDefault()
        nameResetField()
        lastNameResetField()
        emailResetField()
        cityResetField()
        streetResetField()
        zipResetField()
    }

    const hideOrderFormHandler = () => { closeForm(false) }


    return (
        <form className="needs-validation" noValidate onSubmit={formSubmitHandler}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip01">First name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationTooltip01"
                            placeholder="First name"
                            onBlur={nameBlurHandler}
                            onChange={nameChangeHandler}
                            value={firstName}
                            required
                        />
                        <InputValidation inputFieldHasError={nameFieldHasError} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationTooltip02">Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationTooltip02"
                            placeholder="Last name"
                            onBlur={lastNameBlurHandler}
                            onChange={lastNameChangeHandler}
                            value={lastNameField}
                            required
                        />
                        <InputValidation inputFieldHasError={lastNameFieldHasError} />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationTooltipUsername">Email</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="validationTooltip02"
                                    placeholder="Email"
                                    onBlur={emailBlurHandler}
                                    onChange={emailChangeHandler}
                                    value={emailField}
                                    required
                                />
                                <InputValidation inputFieldHasError={emailFieldHasError} />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationTooltip03">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="City"
                                onBlur={cityBlurHandler}
                                onChange={cityChangeHandler}
                                value={cityField}
                                required
                            />
                            <InputValidation inputFieldHasError={cityFieldHasError} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationTooltip04">Street</label>
                            <input
                                type="text"
                                className="form-control"
                                id="street"
                                placeholder="Street"
                                onBlur={streetBlurHandler}
                                onChange={streetChangeHandler}
                                value={streetField}
                                required
                            />
                            <InputValidation inputFieldHasError={streetFieldHasError} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationTooltip05">Zip</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                placeholder="Zip Code"
                                onBlur={zipBlurHandler}
                                onChange={zipChangeHandler}
                                value={zipField}
                                required
                            />
                            <InputValidation inputFieldHasError={zipFieldHasError} />
                        </div>
                    </div>
                    <div >
                        <Buttons handleButtonClick={hideOrderFormHandler}>Back</Buttons>
                        <Buttons disabledButton={!FormIsValidation} buttonType='FormIsValidation' >Submit</Buttons>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default InputForm