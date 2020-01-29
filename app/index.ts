import Cactus from "../src/Cactus";

const cactus = new Cactus(__dirname)
  .router(__dirname + '/router.ts')
  .plant(3000)
  .grow();
