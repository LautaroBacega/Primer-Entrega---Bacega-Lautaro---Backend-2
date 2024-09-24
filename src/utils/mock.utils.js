import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

faker.locale = "es";

export const generateUsersMock = async (count) => {
    const users = [];
    
    for (let i = 0; i < count; i++) {
        const hashedPassword = await bcrypt.hash("coder123", 10);  // Contraseña encriptada

        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 80 }),
            password: hashedPassword,  // Contraseña encriptada
            role: faker.helpers.arrayElement(["user", "admin"]),  // Rol aleatorio
            pets: [],  // Array vacío
        };

        users.push(user);
    }
    
    return users;
};
