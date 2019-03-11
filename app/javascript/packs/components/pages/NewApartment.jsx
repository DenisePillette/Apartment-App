import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Table, Row, Form, Col, FormControl } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import ApartmentService from '../../services/ApartmentService'
import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const Apartment = new ApartmentService()

class NewApartment extends Component {
  constructor() {
    super()
    this.state = {
      new_apartment: {
        name: "",
        user_id: Auth.getUserId()
      },
      createSuccess: false,
    }
  }

  handleChange(event) {
    let apartment = this.state.new_apartment
    apartment[event.target.name] = event.target.value
    this.setState({ new_apartment: apartment })
  }

  handleSubmit(event) {
    event.preventDefault()
    Apartment.createApartment(Auth.getToken(), this.state.new_apartment)
      .then (successApartment => {
        console.log("Apartment Success", successApartment);
        this.setState({createSuccess: true})
      })
      .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1>
            List an Apartment
          </h1>
          <br />
          <Table>
            <Row>
              <Form className="apartment-form">
                <Col>
                  <FormControl
                    type="text"
                    name="name"
                    placeholder=""
                    onChange={this.handleChange.bind(this)}
                  />
                </Col>
                  <br/>
                <Col>
                  <FormControl
                    type="submit"
                    id="submit"
                    className="submit"
                    onClick={this.handleSubmit.bind(this)}
                  />
                  {this.state.createSuccess && <Redirect to="/viewapartments" />}
                </Col>
              </Form>
            </Row>
          </Table>
          <br />
        </div>
      </div>
    )
  }
}

export default withAuth(NewApartment);
