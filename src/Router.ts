import BaseRouter, {IMiddleware} from "koa-router";
import Cactus from "./Cactus";

export default class Router {

    private baseRouter: BaseRouter;
    private app: Cactus;

    constructor(app: Cactus) {
        this.app = app;
        this.baseRouter = new BaseRouter();
    }


    get(path: string, handler: IMiddleware
    ) {
        this.baseRouter.get(path, handler);

        return this;
    }

    activate() {
        this.app.app
          .use(this.baseRouter.routes())
          .use(this.baseRouter.allowedMethods());

        console.log("Router activated: ", __filename);
    }
}
