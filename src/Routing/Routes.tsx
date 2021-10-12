import React from 'react';
import { Switch } from 'react-router-dom';
import MealDetail from './../components/Meals/MealDetail';
import Meals from './../components/Meals/Meals';
import Cart from './../components/Cart/Cart';
import ContextRoute from './ContextRoute';

const Routes = () => {

  return (
    <Switch>
      <ContextRoute exact path="/Meals" component={Meals} />
      <ContextRoute exact path="/mealDetail" component={MealDetail} />
      <ContextRoute exact path="/Cart" component={Cart} />
    </Switch>
  )

};

export default Routes;
