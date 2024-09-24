import { faker } from "@faker-js/faker";

faker.locale = "es";

export const generateMockUsers = (quantity) => {
    const users = [];
    for (let i = 0; i < quantity; i++) {
        const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 60 }),
        role: faker.helpers.arrayElement(["user", "admin"]),
        pets: []
        };
        users.push(user);
    }
    return users;
};

export const generateMockPets = (quantity) => {
    const pets = [];
    for (let i = 0; i < quantity; i++) {
        const pet = {
        name: faker.animal.type(),
        type: faker.helpers.arrayElement(["dog", "cat", "bird"]),
        age: faker.number.int({ min: 1, max: 15 }),
        };
        pets.push(pet);
    }
    return pets;
};
