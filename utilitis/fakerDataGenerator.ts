import { faker } from '@faker-js/faker';

export const getFakeUser = () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.person.fullName(),
    phone: faker.phone.number(),
    randomNumber: faker.number.int({ min: 1000, max: 9999 }),
    randomString: faker.string.alphanumeric(8),
  };
};
