import './MealCard.css'
import MealItemForm from './MealItemForm'
import { IMealCardProps } from './../../TypeScript/TypeScriptStore';


const MealCard = (props: IMealCardProps) => {
    const { name, description, image } = props.meal;


    return (
        <div className="card bg-dark">
            <div className='my-img-container'>
                <img className="card-img-top " loading="lazy" src={image} alt={name} />
            </div>
            <div className="card-img-overlay">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className='card-content'>
                    <MealItemForm meal={props.meal} />
                </div>
            </div>
        </div>
    )
}

export default MealCard