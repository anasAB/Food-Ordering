

import './MealItem.css'

const MealItem = (props) => {
    const { meal,selectedMeal } = props
    console.log('meal',meal);

    const selectMeal = (event) => {  
        console.log('event',event);
        // props.onChangeFilter(event.target.value);
      };

      
    return (
        <div className="container meal" onClick={selectMeal} style={{backgroundColor:'red'}}>

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


            </div>
        </div>
    )
}

export default MealItem