// Faker is used to generate fake data
const faker = require('faker');

module.exports = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    incorrectUsername: faker.username,
    incorrectPassword: faker.password
};