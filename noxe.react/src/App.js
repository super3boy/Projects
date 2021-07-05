import React, { Component } from 'react'
import {Switch , Route , Redirect} from 'react-router'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import Nav from './Components/Nav/Nav'
import Pageerror from './Components/Pageerror/Pageerror'
import Tv from './Components/Tv/Tv'
export default class App extends Component {
  render() {
    return ( <>
      <Nav />
      <Switch>
      <Route path='/home' component={Home} />
      <Route path='/movies' component={Movies} />
      <Route path='/tv' component={Tv} />
      <Redirect exact from="/" to="/home" />
      <Route path='*' component={Pageerror} />
      </Switch>
      </>
    )
  }
}
