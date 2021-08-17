import CartIcon from '../Cart/CartIcon'
import './HeaderCartButton.css'
import {  useHistory } from "react-router-dom";



const HeaderCartButton = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/Cart");
      }

    return (
        <button className='button' type='button' onClick={handleClick}  >
            <span className='icon' ><CartIcon /></span>
            <span> Your Cart</span>
            <span className='badge'> 3</span>
        </button >
    )
}

export default HeaderCartButton