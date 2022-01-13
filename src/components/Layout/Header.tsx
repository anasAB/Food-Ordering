import { Fragment } from 'react'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'
import { useHistory } from "react-router-dom";
import { ISelectedMeal } from 'src/TypeScript/TypeScriptStore';



const Header  = (props:ISelectedMeal) => {

    const history = useHistory();

    const handleClick = () : void => history.push("/")

    return (
        <Fragment>
            <header id="header" className='header'>
                <h1 onClick={handleClick}>Meal</h1>
                <HeaderCartButton selectedMeal={props.selectedMeal}/>
            </header>

            <div className='main-image'>
                <img className='main-image img ' src='https://wallup.net/wp-content/uploads/2017/11/17/286693-food-lunch-drink-hot_drink.jpg' alt='Food' />
            </div>
        </Fragment>
    )
}
export default Header