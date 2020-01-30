import BaseRequest from "./BaseRequest";
import {RouterContext} from "koa-router";

export default function HttpHandler(className: any) {
    return async (ctx: RouterContext) => {
        const handler: BaseRequest<any, any> = new className();

        return handler.do(ctx)
    }
}
