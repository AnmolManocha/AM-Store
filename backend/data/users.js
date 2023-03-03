import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Anmol Manocha',
    email: 'admin@am.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'Andy Mandy',
    email: 'andymandy@am.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'Sandy Mandy',
    email: 'sandymandy@am.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'Tandy Mandy',
    email: 'Tandymandy@am.com',
    password: bcrypt.hashSync('123456'),
  },
]

export default users