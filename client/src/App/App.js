import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './components/footer/footer';
import Dashboard from './pages/dashboard';
import Browse from './pages/browse';

function PrivateRoute({ children, ...rest }) {
  return (<Route {...rest} render={() => (sessionStorage.getItem("token")) ? (children) : (<Redirect to={{ pathname: "/login" }}/>) } /> );
}

function App(props){
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <PrivateRoute path='/dashboard' >
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path='/browse' >
          <Browse />
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
    </div>
  );
}


export default App;