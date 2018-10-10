import React, { Component } from 'react';
import './App.css';
import User from './components/User';
import Home from './components/Home';
import Nav from './components/Nav';
import Next from './components/Next';
import Next2 from './components/Next2'
import { BrowserRouter, NavLink, Route, Router} from 'react-router-dom';
class App extends Component {
state = {
  name: 'sunny',
  count: 1
};

nameChange = () => {
  this.setState ({name: 'stark'});
}
nameReset = () =>{
  this.setState ({name:'sunny'});
}

numCounter = () => {
  this.setState ({count: this.state.count + 1});
}

  render() {
    return (

      <BrowserRouter>
      <div className="App">
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/User' component = {User} />
      <Route path='/Next' component = {Next} /> 
      <Route path='/Next2' component = {Next2}/> 
     </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
