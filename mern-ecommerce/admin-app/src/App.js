import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/HOC/privateRoute';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(()=>{
    if(!auth.authenticate) dispatch(isUserLoggedIn());
  },[]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
