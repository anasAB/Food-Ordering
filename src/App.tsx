import { Fragment } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from './components/UI/HomePage';
import Routes from './Routing/Routes';
import './App.css';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </Fragment>
  );

}

export default App;
