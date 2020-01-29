const Koa = require('koa');
const chalk = require('chalk');

export default class Cactus {
    private app = new Koa();
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

    /**
     * @memberOf Cactus
     */
    grow() {
        console.log(chalk.green('🌵 Cactus planted on port: ' + this.port));

        require(this.dir + '/router.ts')(this);

        this.app.listen(this.port, () => {
            console.log(chalk.greenBright('Cactus is growing now...'))
        })

        return this;
    }
}
