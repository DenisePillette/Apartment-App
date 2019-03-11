user_attributes = [
  {
    name: 'Chief',
    email: 'chief@dogs.com',
    password: 'chiefpassword',
    password_confirmation: 'chiefpassword',
    role: 'admin'
  },
  {
    name: 'Dakota',
    email: 'dakota@dogs.com',
    password: 'dakotapassword',
    password_confirmation: 'dakotapassword',
    role: 'user'
  },
  {
    name: 'Chester',
    email: 'chester@dogs.com',
    password: 'chesterpassword',
    password_confirmation: 'chesterpassword',
    role: 'user'
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end

apartment_attributes = [
  {
    name: "1000-A Park Place",
    user_id: 1
  },
  {
    name: "24-24 Broadway",
    user_id: 2
  },
  {
    name: "999 9th Ave.",
    user_id: 3
  },
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end
