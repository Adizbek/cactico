import Router from "./Router";

const Koa = require('koa');
const chalk = require('chalk');

export default class Cactus {
    public app = new Koa();
    private port = 3000;
    private readonly dir: string;

    constructor(land: string) {
        this.dir = land
    }

    /**
     * @memberOf Cactus
     * @param port
     */
    plant(port: number): Cactus {
        this.port = port;

        return this
    }

    router(filename: string): Cactus {
        const router = new Router(this);

        require(filename).default(router);

        router.activate();

        return this;
    }

    /**
     * @memberOf Cactus
     */
    grow() {
        console.log(chalk.green('🌵 Cactus planted on port: ' + this.port));

        this.app.listen(this.port, () => {
            console.log(chalk.greenBright('Cactus is growing now...'))
        });

        return this;
    }
}
