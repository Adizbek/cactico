import {IMiddleware} from "koa-router";

declare class Cactus {

    constructor(land: string);

    plant(port: number): Cactus;

    grow(): Cactus;
}

declare class Router {

    constructor(app: Cactus);

    get(path: string, handler: IMiddleware): Router;
}

export = Cactus;


