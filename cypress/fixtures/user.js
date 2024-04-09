import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

export const user = {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName,
    email: firstName + '.' + lastName + '@' + faker.internet.domainWord() + '.com',
    password: faker.internet.password({ length: 20 }),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    addressTwo: faker.location.streetAddress(false),
    country: 'Canada',
    state: 'Ontario',
    city: 'Ottawa',
    zipcode: faker.location.zipCode('E#A #I#'),
    mobile:  faker.phone.number('+1 ###-###-####')
}