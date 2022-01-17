import './AvailableMeals.css'
import MealCard from './MealCard';
import { IMeal } from 'src/TypeScript/TypeScriptStore';


const AvailableMeals = (props: {availableMeals:IMeal[]}) => {
    let { availableMeals } = props;

    return (
        <section className="wrapper">
            <div className="container-fostrap">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            {availableMeals.map((meal:IMeal) => (
                                <div className="col-xs-12 col-sm-6" key={meal.id}>
                                    <MealCard meal={meal} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AvailableMeals

