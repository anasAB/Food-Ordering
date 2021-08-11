import './App.css';
import Header from './components/Layout/Header';
import { Fragment } from 'react';
import Meals from './components/Meals/Meals';
import { Route } from "react-router-dom";
import HomePage from './components/UI/HomePage';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <Fragment>
      < BrowserRouter >
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <>
              <Header />
              <Route exact path="/Meals" component={Meals} />
            </>
          )}
        />
      </BrowserRouter>
 
    </Fragment>
  );
}

export default App;
