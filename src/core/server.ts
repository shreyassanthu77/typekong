import Koa from "koa";
import logger from "koa-logger";

export default function createServer() {
  const app = new Koa();

  app.use(logger());

  return app;
}
