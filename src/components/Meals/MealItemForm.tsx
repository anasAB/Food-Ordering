import Input from '../UI/Input'
import './MealItemForm.css'


const MealItemForm = (props) => {
    console.log('props',props);
    
    
  const addMealHandler = (event: any) => { 
      console.log('event',event.target); 
    // props.onChangeFilter(event.target.value);
  };

    return (
        <form className='form'>
            <button type="button" className="btn btn-primary" onClick={addMealHandler}>Add</button>
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