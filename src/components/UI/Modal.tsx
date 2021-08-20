import React,{ Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import Backdrop from './../Layout/Backdrop'
import './Modal.css'

const ModalOverLay = (props) => {
    return (
        <div className='modal'>
            {props.children}
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
        </Fragment>
    )
}

export default Modal