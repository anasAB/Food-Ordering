import Model from '../Layout/Model'
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
                    ${meal.price}
                </div>
                <div className="col">
                    <Model
                        mealInfo={meal}
                    />
                </div>
            </div>
        </div>
    )
}

export default MealItem