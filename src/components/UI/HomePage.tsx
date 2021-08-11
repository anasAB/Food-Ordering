import './HomePage.css';
import { Fragment } from 'react';

export default function HomePage({ history }) {
    return (
        <Fragment>
            <div className='Home-Page'>
                <img src='https://eatdrinkinnovate.com.au/wp-content/uploads/2018/03/food-bg.jpg' alt='HomePage' />
            </div>

            <div className='Home-button-element'>
                <button  className='Home-Button' onClick={() => history.push("/Meals")} size="huge" inverted>Continue</button>
            </div>
        </Fragment>
    );
}



