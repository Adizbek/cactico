const Koa = require('koa');
const chalk = require('chalk');

export default class Cactus {
    private app = new Koa();
    private port = 3000;

    constructor() {
    }

    plant(port): Cactus {
        this.port = port;

        return this
    }

    grow() {
        console.log(chalk.green('🌵 Cactus planted on port: ' + this.port));

        this.app.listen(this.port, () => {
            console.log(chalk.greenBright('Cactus is growing now...'))
        })
    }
}
