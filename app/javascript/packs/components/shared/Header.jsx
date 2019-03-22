import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()

class Header extends Component {

  handleLogout() {
    Auth.logout()
    console.log("Logout Success")
  }

  render () {
    return (
      <div>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
          <NavLink exact to="/" as="span">
            <Navbar.Brand href="/" as="span">
              Next Home
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse as="span">
            <Nav activeKey="/" onSelect={()=>{}}>
              {!Auth.loggedIn() &&
                <NavLink exact to="/signup" as="span">
                  <Nav.Link href="/signup" as="span">
                    Sign Up
                  </Nav.Link>
                </NavLink>
              }
              {!Auth.loggedIn() &&
                <NavLink exact to="/login" as="span">
                  <Nav.Link href="/login" as="span">
                    Login
                  </Nav.Link>
                </NavLink>
              }
              {Auth.loggedIn() &&
                <NavLink exact to="/welcome" as="span">
                  <Nav.Link href="/welcome" as="span">
                    Welcome
                  </Nav.Link>
                </NavLink>
              }
              {Auth.loggedIn() &&
                <NavLink exact to="/newapartment" as="span">
                  <Nav.Link href="/newapartment" as="span">
                    New Apartment
                  </Nav.Link>
                </NavLink>
              }
              {Auth.loggedIn() &&
                <NavLink exact to="/viewapartments" as="span">
                  <Nav.Link href="/viewapartments" as="span">
                    Apartments
                  </Nav.Link>
                </NavLink>
              }
              <NavLink exact to="/about" as="span">
                <Nav.Link href="/about" as="span">
                  About
                </Nav.Link>
              </NavLink>
              {Auth.loggedIn() &&
                <NavLink exact to="/login" as="span">
                  <Nav.Link href="/login" as="span" onClick={this.handleLogout.bind(this)}>
                    Logout
                  </Nav.Link>
                </NavLink>
              }
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
