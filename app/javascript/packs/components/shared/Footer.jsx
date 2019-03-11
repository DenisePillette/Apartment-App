import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
          <div>
            <span>
              Apartment App by&nbsp;
            </span>
            <a href="https://github.com/DenisePillette" target="new">
              DenisePillette
            </a>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Footer;
