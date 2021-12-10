import { useHistory } from "react-router-dom";
import Backdrop from '../components/Layout/Backdrop';
import './Spinner.css'
import Buttons from './Buttons';



const Spinner = () => {
    const history = useHistory()
    const redirectHandler = () => {
        history.push("/");
    }

    return (
        <Backdrop>
            <div className="loader">
                <div className="outer"></div>
                <div className="middle"></div>
                <div className="inner"></div>
            </div>

            <div className='loadingInfo'>
                <i className="fas fa-bomb"></i>
                <p>There is a problem loading the page, please try again later</p>

            </div>
            <div>
                <Buttons handleButtonClick={redirectHandler} iconType='chevron-circle-left'> Return To Home Page</Buttons>
            </div>
        </Backdrop>
    )
}

export default Spinner