// import React,{Component} from 'react'
import React, { useState } from 'react'

import InfoIcon from '../Cart/InfoIcon'
import Backdrop from '../Layout/Backdrop'
import Model from '../Layout/Model'
import './MealItem.css'




const MealItem = (props) => {
    const { meal } = props
    const [modalOpen, setModalOpenSet] = useState(false)


    const OpenModalHandler = (ModalState) => {
        setModalOpenSet(ModalState)
    }

    const CloseModalHandler = (ModalState) => {
        setModalOpenSet(ModalState)
    }

    const modal = modalOpen ?
        <Backdrop>
            <Model 
            show={modalOpen} 
            closeModal={OpenModalHandler}
            mealInfo={meal}
             />
        </Backdrop> :
        ''

    return (
        
        <div className="container meal">
            <div className="row">
                <div className="col ">
                    {meal.name}
                </div>
                <div className="col description">
                    {meal.description}
                </div>
                <div className="col price">
                    ${meal.price}
                </div>
                <InfoIcon InfoIcon={meal} modalOpenState={modalOpen} handleOpenModal={OpenModalHandler} />
                {modal}


            </div>
        </div>
    )
}

export default MealItem