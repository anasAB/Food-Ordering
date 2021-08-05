import Card from '../UI/Card';
import './AvailableMeals.css'
import React , {Fragment} from 'react'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    return (
        <Fragment>
            {DUMMY_MEALS.map(expense => (
                <section key={Math.random()} className='meals'>
                    <Card>
                        <div className="AvailableMeals-container">
                            <div className="row">
                                <div className="col-6 col-md-4 ">
                                    {expense.name}
                                </div>
                                <div className="col-6 col-md-4">
                                    {expense.description}
                                </div>
                                <div className="col-6 col-md-4">
                                    {expense.price}
                                </div>
                            </div>
                        </div>

                    </Card>
                </section>
            ))
            }
        </Fragment>
    );



}
export default AvailableMeals