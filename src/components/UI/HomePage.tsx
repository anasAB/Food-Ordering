import React from 'react'
import './HomePage.css';
import Buttons from './../../utils/Buttons';




export default function HomePage({ history }) {

    const navigateToMeals = () => {
        history.push("/Meals")
    }

    return (
        <div className='home-Page'>
            <div className='homePageImg'>
                <img src='https://eatdrinkinnovate.com.au/wp-content/uploads/2018/03/food-bg.jpg' alt='HomePage' />
            </div>
            <Buttons handleButtonClick={navigateToMeals} >Continue</Buttons>
        </div>
    );
}