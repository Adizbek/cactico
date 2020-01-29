import Router from "../src/Router";

export default function (router: Router) {
    router.get('/hello', (context, next) => {
        context.body = {
            hello: 'world'
        }
    })
}
