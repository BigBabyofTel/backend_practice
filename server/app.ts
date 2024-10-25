import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { signUpRoute } from "./routes/signup";

const app = new Hono();

app.use("*", logger());

app.route("/api/signup", signUpRoute);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
