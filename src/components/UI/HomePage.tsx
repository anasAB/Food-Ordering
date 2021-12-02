import './HomePage.css';

export default function HomePage({ history }) {
    return (
        <div className='home-Page'>
            <div className='homePageImg'>
                <img src='https://eatdrinkinnovate.com.au/wp-content/uploads/2018/03/food-bg.jpg' alt='HomePage' />
            </div>

            <div className='home-Button'>
                <button onClick={() => history.push("/Meals")} size="huge">Continue To Meals</button>
            </div>
        </div>
    );
}