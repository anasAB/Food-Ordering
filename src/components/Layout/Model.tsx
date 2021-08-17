import './Model.css'

const Model = (props) => {

    return (
        <div className='Modal'>
            <div className='InnerModal'>
                <p>ingredients</p>
                {Object.keys(props.mealInfo.ingredients).map(key => (
                    <li style={{ textTransform: 'capitalize' }} key={Math.random()}>{key} : <span>{props.mealInfo.ingredients[key]}</span></li>
                ))}
            </div>

            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.closeModal(false)}>Close</button>
        </div>

    )
}

export default Model