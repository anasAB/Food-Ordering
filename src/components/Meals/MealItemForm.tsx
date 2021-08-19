import Input from '../UI/Input'
import './MealItemForm.css'


const MealItemForm = (props) => {
    return (
        <form className='form'>
            <button type="button" className="btn btn-primary">Add</button>
            <Input
                label='Amount'
                input={
                    {
                        id: 'amount' + props.meal.id,
                        type: 'number',
                        min: '0',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }} />
        </form>
   
    )
}

export default MealItemForm