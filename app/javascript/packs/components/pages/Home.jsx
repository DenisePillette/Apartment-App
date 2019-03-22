import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import logo from '../../assets/images/NextHome.png'

const Auth = new AuthService()

class Home extends Component {
  render() {
    return (
      <div className="center">
        <h1>
          Home
        </h1>
        <br />
        <h3>
          Thanks for stopping by!
        </h3>
        {!Auth.loggedIn() &&
          <div>
            Don't have an account?&nbsp;
            <NavLink to="/signup">
                Sign up
            </NavLink>
          </div>
        }
        {!Auth.loggedIn() &&
          <div>
            Already have an account?&nbsp;
            <NavLink to="/login">
              Login
            </NavLink>
          </div>
        }
        <br />
        <img className="image" src={logo} alt="Next Home Logo"/>
      </div>
    )
  }
}

export default Home;
