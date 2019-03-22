import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import withAuth from '../../services/withAuth'

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      clickedCreateApartment: false
    }
  }

  clickCreatePost() {
    this.setState({clickedCreateApartment: true})
  }

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
              <Button
                variant="dark"
                type="submit"
                onClick={this.clickCreatePost.bind(this)}
              >
                Click HERE to list an Apartment
              </Button>
              {this.state.clickedCreateApartment && <Redirect to="/newapartment" />}
              <br />
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}

export default withAuth(Welcome);
