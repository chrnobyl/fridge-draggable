import React, { Component } from 'react'
import NavBar from './NavBar'
import FridgeContainer from './FridgeContainer'
import Landing from './Landing'
import { Route, Link,
  Switch,
  Redirect } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import '../App.css'

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route exact path="/fridge" component={ FridgeContainer } />
        </Switch>
      </div>
    );
  }
}
