import React, {Component} from 'react'
import { Table, Col, Row, ListGroup, ListGroupItem, Container, Card  } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import ApartmentService from '../../services/ApartmentService'
import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const Apartment = new ApartmentService()

class Apartments extends Component {
  constructor() {
    super()
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    Apartment.getApartments(Auth.getToken())
      .then(data => {
        this.setState({ apartments: data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="center">
        <br />
        <h1 style={{ color: 'white' }}>
          Apartments
        </h1>
        <br />
        <Container>
          <Row className="justify-content-md-center">

            {this.state.apartments.map((apartment, index) =>
              <div>
                <Col>
                  <Card className="center" style={{ width: '20rem' }}  key={`${apartment.name}${index}`}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpvUiQXvx02E2x0UzByIYmq-Ja_2Z2NbDicF82iTYFxPGk8qh" />
                    <Card.Body>
                      <Card.Title>
                        {apartment.name}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text for <b>{apartment.name}</b> to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Cras justo odio</ListGroupItem>
                      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
                <br />
              </div>
            ).reverse()}

          </Row>
        </Container>
      </div>
    )
  }
}

export default withAuth(Apartments);
