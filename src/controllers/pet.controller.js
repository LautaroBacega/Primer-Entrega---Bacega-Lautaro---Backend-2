import { petModel } from "../daos/mongodb/models/pet.model.js";

export const getPets = async (req, res, next) => {
    try {
        const pets = await petModel.find();
        res.status(200).json(pets);
    } catch (error) {
        next(error);
    }
};
