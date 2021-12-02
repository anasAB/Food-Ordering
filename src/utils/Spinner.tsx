import Backdrop from '../components/Layout/Backdrop';
import { useHistory } from "react-router-dom";
import './Spinner.css'



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
                <i className="fas fa-info-circle"/>
                <p>There is a problem loading the page, please try again later</p>
            </div>

            <div>
                <button className='loaderButton' onClick={redirectHandler}>Home Page</button>
            </div>
        </Backdrop>
    )
}

export default Spinner