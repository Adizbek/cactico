import BaseRouter from "koa-router";
import Cactus from "./Cactus";

export default class Router extends BaseRouter {

    private cactusApp: Cactus;

    constructor(app: Cactus, cb: any) {
        super();

        this.cactusApp = app;

        cb(this);

        this.cactusApp.app
          .use(this.routes())
          .use(this.allowedMethods());

    }

    group(prefix: string, callback: any) {
        const router = new BaseRouter({prefix});

        callback(router);

        this.cactusApp.app
          .use(router.routes())
          .use(router.allowedMethods())
    }
}
