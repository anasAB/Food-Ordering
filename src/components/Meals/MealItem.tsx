import MealInfo from '../Layout/MealInfo'
import './MealItem.css'


const MealItem = (props) => {
    const { meal } = props
    return (
        <div className="container meal">
            <div className="row">
                <div className="col ">
                    {meal.name}
                </div>
                <div className="col description">
                    {meal.description}
                </div>
                <div className="col price">
                    {meal.price}
                    <i class="fas fa-dollar-sign"></i>
                </div>
                <div className="col">
                    <MealInfo
                        mealInfo={meal}
                    />
                </div>
            </div>
        </div>
    )
}

export default MealItem