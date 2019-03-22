import React, { Component } from 'react'
import logo from '../../assets/images/NextHome.png'

class About extends Component {
  render() {
    return (
      <div className="center">
        <h1>
          About
        </h1>
        <br />
        <h3>
          Fancy meeting you here!
        </h3>
        <br />
        <img className="image" src={logo} alt="Next Home Logo" />
      </div>
    )
  }
}

export default About;
