import { faker } from '@faker-js/faker';

export const creditCard = {
    number: faker.finance.creditCardNumber(),
    cvv: faker.finance.creditCardCVV(),
    expiration:{
        month: '11',
        year: '2027'
    }
}