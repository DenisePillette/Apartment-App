import React, {Component} from 'react'
import { Table, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
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
      <div>
        <div className="center">
          <Table>
            <br />
            <h1>
              Apartments
            </h1>
            <Row className="apartment-row">
              <h4 className="apartments-subtitle">
                <small className="text-muted">
                  All the apartments!
                </small>
              </h4>
              <Col>
                <ListGroup variant="flush">
                  <ListGroupItem />
                  {this.state.apartments.map((apartment, index) =>
                      <ListGroupItem key={`${apartment.name}${index}`}>
                        <div>
                          <div>
                            {apartment.name}
                          </div>
                        </div>
                      </ListGroupItem>
                    ).reverse()}
                  <ListGroupItem />
                </ListGroup>
              </Col>
            </Row>
          </Table>
        </div>
      </div>
    )
  }
}

export default withAuth(Apartments);
