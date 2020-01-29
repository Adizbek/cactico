import {IMiddleware} from "koa-router";

declare module 'cactico' {
    class Cactus {

        constructor(land: string);

        plant(port: number): Cactus;

        grow(): Cactus;
    }

    class Router {

        constructor(app: Cactus);

        get(path: string, handler: IMiddleware): Router;
    }

    export = Cactus;
}

