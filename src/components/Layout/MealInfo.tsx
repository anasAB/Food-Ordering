import './MealInfo.css'

const MealInfo = (props) => {
    const { ingredients } = props
    return (
        <div>
            <div className="tooltip-wrap">
                {/* <i className="fas fa-info" size="large"></i> */}
                <div className="tooltip-content">
                    {ingredients && Object.keys(ingredients).length > 0 ?
                        Object.keys(ingredients).map(key => (
                            <li style={{ textTransform: 'capitalize' }} key={ingredients[key]}> <span>{ingredients[key]}</span></li>
                        ))
                        : <p>There is No ingredients</p>}
                </div>
            </div>
        </div>
        // <p>Ingredients</p>
    )
}

export default MealInfo