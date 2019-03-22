import React, {Component} from 'react'
import { CardDeck, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import ApartmentService from '../../services/ApartmentService'
import withAuth from '../../services/withAuth'
import NumberFormat from 'react-number-format'

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
        <h1>
          Apartments
        </h1>
        <br />
        <CardDeck className="justify-content-md-center">
          {this.state.apartments.map((apartment, index) =>
            <div className="apartment-card-container">
              <Card className="apartment-card" key={`${apartment.name}${index}`}>
                <Card.Img className="apartment-card-image" variant="top" src={apartment.image_url} />
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
                  <ListGroupItem>
                    {apartment.address}
                    <br />
                    {apartment.address2}
                  </ListGroupItem>
                  <ListGroupItem>{apartment.city}, {apartment.state} {apartment.zip}</ListGroupItem>
                  <ListGroupItem>
                    <b><NumberFormat displayType={'text'} thousandSeparator={true} prefix={'$'} value={apartment.price} /></b>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Contact</Card.Link>
                  <Card.Link href="#">Map View</Card.Link>
                </Card.Body>
              </Card>
              <br />
            </div>
          ).reverse()}
        </CardDeck>
      </div>
    )
  }
}

export default withAuth(Apartments);
