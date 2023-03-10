export enum Sex {
    MALE = 'male',
    FEMALE = 'female',
}
export enum Hair {
    Blond = 'blond',
    Brunette = 'brunette',
    Bold = 'bold',
}
export enum Eyes {
    Blue = 'blue',
    Green = 'green',
    Gray = 'gray',
}

export type Genome = {
    sex: Sex,
    hair: Hair,
    eyes: Eyes,
};