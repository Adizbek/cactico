declare module 'cactico';

declare class Cactus {

    constructor(land: string);

    plant(port: number): Cactus;
    grow(): Cactus;
}

export = Cactus;
