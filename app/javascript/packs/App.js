import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/shared/Header'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Welcome from './components/pages/Welcome'
import About from './components/pages/About'
import NewApartment from './components/pages/NewApartment'
import Apartments from './components/pages/Apartments'
import Footer from './components/shared/Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null,
    }
  }

  render () {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/newapartment" component={NewApartment} />
          <Route exact path="/viewapartments" component={Apartments} />
        </Switch>
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}

export default App;
