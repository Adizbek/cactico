import {RouterContext} from "koa-router";

export default abstract class BaseRequest<T, R> {
    /**
     * @description Validates request and return validated data
     * @param ctx
     */
    abstract async validate(ctx: RouterContext): Promise<T>;

    /**
     * @param data
     * @param ctx
     *
     * @description Gets data from validator and process then returns data
     */
    abstract async process(data: T, ctx: RouterContext): Promise<R>;

    /**
     * @param ctx
     */
    async do(ctx: RouterContext) {
        this.response(
          ctx,
          await this.process(
            await this.validate(ctx),
            ctx
          )
        )
    }

    response(ctx: RouterContext, data: R) {
        ctx.body = data
    }
}
