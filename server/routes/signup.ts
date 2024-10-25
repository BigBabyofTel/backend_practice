import { Hono } from "hono";

export const signUpRoute = new Hono()
  .get("/", (c) => {
    return c.json({ message: "sign up page is almost ready" });
  })
  .post("/", (c) => {
    return c.json({});
  });
