import React from 'react'
import './HomePage.css';
import Buttons from './../../utils/Buttons';
import { useHistory } from 'react-router-dom';



export default function HomePage() {
    const history = useHistory()
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