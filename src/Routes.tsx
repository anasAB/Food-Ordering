
import { Route, Switch } from 'react-router-dom';
import Meals from './components/Meals/Meals';
import MealDetail from './components/Meals/MealDetail';
import Cart from './components/Cart/Cart';

const Routes = () => {
 
  return (
    <Switch>
      <Route exact path="/Meals" component={Meals} />
      <Route path="/mealDetail" component={MealDetail} exact />
      <Route path="/Cart" component={Cart} />
    </Switch>
  )

};

export default Routes;
