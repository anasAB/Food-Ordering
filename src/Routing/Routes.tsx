
import { Switch } from 'react-router-dom';
import Meals from './../components/Meals/Meals';
import ShoppingCart from '../components/Cart/ShoppingCart';
import ContextRoute from './ContextRoute';

const Routes = () => {

  return (
    <Switch>
      <ContextRoute exact path="/Meals" component={Meals} />
      <ContextRoute exact path="/ShoppingCart" component={ShoppingCart} />
    </Switch>
  )

};

export default Routes;
