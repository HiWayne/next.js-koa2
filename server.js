const Koa = require("koa");
const next = require("next");
const KoaRouter = require("koa-router");
const {parse} = require("url");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new KoaRouter();

  router.get("/*", async ctx => {
    const parsedUrl = parse(ctx.req.url, true);
    const { pathname, query } = parsedUrl;
    let path = pathname.replace(/\/$/, "")
    await app.render(ctx.req, ctx.res, path, query);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, err => {
    if (err) {
      throw err;
    } else {
      console.log(`Ready on http://localhost:${port}`);
    }
  });
});
