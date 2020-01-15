import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './components/footer/footer';


function App(props){
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
      <Footer></Footer>
    </div>
  );

}

export default App;