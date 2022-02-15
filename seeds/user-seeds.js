const {User} = require('../models/')

const userData = [
    {
        username: 'SpiderMan',
        password: 'password1'
    },
    {
        username: 'Matt-Murdock',
        password: 'password2'
    },
    {
        username: 'Gwen-Stacy',
        password: 'password3'
    },
    {
        username: 'Norm-Os',
        password: 'password4'
    },
    {
        username: 'Tony-Stark',
        password: 'password5'
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers