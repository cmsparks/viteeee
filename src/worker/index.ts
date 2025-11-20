import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.get("/api/v2/", (c) => c.json({ name: "Cloudflare 2" }));

export default app;
