user_attributes = [
  {
    name: "John",
    email: "john@wick.com",
    password: "johnpassword",
    password_confirmation: "johnpassword",
    role: "admin"
  },
  {
    name: "Carrie",
    email: "carrie@bradshaw.com",
    password: "carriepassword",
    password_confirmation: "carriepassword",
    role: "user"
  },
  {
    name: "Chandler",
    email: "chandler@bing.com",
    password: "chandlerpassword",
    password_confirmation: "chandlerpassword",
    role: "user"
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end

apartment_attributes = [
  {
    name: "Empire State Building",
    contact: "John Wick",
    phone: "888-555-8888",
    address: "20 W 34th St",
    city: "New York",
    state: "NY",
    zip: "11111",
    price: 40000000,
    image_url: "https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg",
    user_id: 1
  },
  {
    name: "Chrysler Building",
    contact: "Carrie Bradshaw",
    phone: "555-555-1111",
    address: "405 Lexington Ave",
    city: "New York",
    state: "NY",
    zip: "10000",
    price: 60000000,
    image_url: "https://www.nreionline.com/sites/nreionline.com/files/styles/article_featured_standard/public/NYC_chrysler-bldg-GettyImages-182884126.jpg?itok=-RJEi7kL",
    user_id: 2
  },
  {
    name: "Flatiron Building",
    contact: "Chandler Bing",
    phone: "777-555-8888",
    address: "175 5th Ave",
    city: "New York",
    state: "NY",
    zip: "11111",
    price: 40000000,
    image_url: "https://i.pinimg.com/originals/60/41/fd/6041fd05fea85a3a23402395623da569.jpg",
    user_id: 3
  },
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end
