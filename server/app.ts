import { Hono } from "hono";
import { logger } from "hono/logger";
import { signUpRoute } from "./routes/signup";

const app = new Hono();

app.use("*", logger());

app.get("/test", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.route("/api/signup", signUpRoute);

export default app;
