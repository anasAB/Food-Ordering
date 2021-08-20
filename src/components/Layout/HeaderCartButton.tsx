import './HeaderCartButton.css'
import { useHistory } from "react-router-dom";



const HeaderCartButton = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/Cart");
    }

    return (
        <button className='button' type='button' onClick={handleClick}  >
           <span className='icon' ><i class="fas fa-shopping-cart"></i>
            </span>
            <span> Your Cart</span>
            <span className='badge'> 3</span>
        </button >
    )
}

export default HeaderCartButton