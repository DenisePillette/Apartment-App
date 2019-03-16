import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import withAuth from '../../services/withAuth'
import puppies3 from '../../assets/images/puppies-park-3.png'


class Welcome extends Component {
  render() {
    return (
      <div className="center">
        <br />
        <br />
        <Container className="welcome-page">
          <Card>
            <Card.Body>
              <Card.Title>
                <h1>
                  Welcome to Next Home!
                </h1>
              </Card.Title>
              <Card.Text>
                  Thanks for logging in!
              </Card.Text>
              <NavLink to="/newapartment">
                <a href="/newapartment">
                  <Button variant="dark">
                    Click HERE to list an Apartment
                  </Button>
                </a>
              </NavLink>
              <br />
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}

export default withAuth(Welcome);
