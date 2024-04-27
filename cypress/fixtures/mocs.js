import { Chance } from 'chance';

const chance = new Chance();

export const Data = {
    name: () => chance.first()
}