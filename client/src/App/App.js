import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';

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