import { Hono } from "hono";


export const signUpRoute = new Hono()
.get("/", (c) => {
    return c.json({"message": "sign up here"})
})
.post("/", (c) => {
    return  c.json({})
})
