import BaseRouter, {IMiddleware} from "koa-router";
import Cactus from "./Cactus";

interface RouterOptions {
    middlewares?: IMiddleware[] | IMiddleware
}

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

    group(prefix: string, callback: any, options: RouterOptions = {}) {
        const router = new BaseRouter({prefix});

        if (options.middlewares) {
            if (Array.isArray(options.middlewares)) {
                router.use(...options.middlewares);
            } else {
                router.use(options.middlewares)
            }
        }

        callback(router);

        this.cactusApp.app
          .use(router.routes())
          .use(router.allowedMethods())
    }
}
