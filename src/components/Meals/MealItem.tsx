import MealInfo from '../Cart/MealInfo'
import './MealItem.css'

const MealItem = (props) => {
    const { meal } = props
        console.log('props',props);
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
               <MealInfo mealInfo={meal}/>

            </div>
        </div>
    )
}

export default MealItem