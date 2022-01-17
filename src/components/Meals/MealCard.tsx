import { useContext } from 'react'
import './MealCard.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cartContext'
import { ICartCtx, IMealCardProps } from './../../TypeScript/TypeScriptStore';


const MealCard = (props: IMealCardProps) => {
    const { id, name, description, price, image } = props.meal;
    const cartCtx: ICartCtx = useContext(CartContext)

    const addToCartHandler = (amount: number): void => {
        cartCtx.addItem({
            id,
            name,
            amount,
            description,
            price
        })
    }

    const removeItem = (id:number) =>  cartCtx.removeItem(id)

    return (
        <div className="card bg-dark">
            <div className='my-img-container'>
                <img className="card-img-top " loading="lazy" src={image} alt={name} />
            </div>
            <div className="card-img-overlay">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className='card-content'>
                    <MealItemForm id={id} onAddToCart={addToCartHandler} onRemoveItem={removeItem} />
                </div>
            </div>
        </div>
    )
}

export default MealCard