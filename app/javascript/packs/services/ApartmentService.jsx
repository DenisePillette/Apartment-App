import AuthService from './AuthService'

export default class ApartmentService extends AuthService {
  getApartments(token) {
    return this.fetch(`${this.domain}/apartments`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'GET'
    }).then((res) => {
      return Promise.resolve(res)
    })
  }

  createApartment(token, new_apartment) {
    return this.fetch(`${this.domain}/apartments`, {
      headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify({
        new_apartment: new_apartment
      })
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
}
