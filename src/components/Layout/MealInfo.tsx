import InfoIcon from '../Cart/InfoIcon'
import './MealInfo.css'

const MealInfo = (props) => {
    return (
        <div className="tooltip-wrap">
            <InfoIcon />
            <div className="tooltip-content">
                {Object.keys(props.mealInfo.ingredients).length > 0 ?
                    Object.keys(props.mealInfo.ingredients).map(key => (
                        <li style={{ textTransform: 'capitalize' }} key={Math.random()}> <span>{props.mealInfo.ingredients[key]}</span></li>
                    )) : <p>There is No ingredients</p>}
            </div>

        </div>


    )
}

export default MealInfo