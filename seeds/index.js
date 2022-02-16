const seedUsers = require('./user-seeds')
const seedItems = require('./item-seeds')
const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log('--------------')
    //seed users
    await seedUsers();
    console.log('--------------')
    //seed items
    await seedItems();
    console.log('--------------')

    process.exit(0)
}

seedAll()