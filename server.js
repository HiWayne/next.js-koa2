const Koa = require("koa");
const next = require("next");
const KoaRouter = require("koa-router");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new KoaRouter();

  router.get("/*", (ctx, next) => {
    let path = '/about';
    let query = {};
    app.render(ctx.req, ctx.res, path, query);
  });

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(PORT, err => {
    if (err) {
      throw err;
    } else {
      console.log(`Ready on http://localhost:${PORT}`);
    }
  });
});
