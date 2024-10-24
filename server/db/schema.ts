import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer("id").primaryKey(),
    first_name: varchar({length: 20}).notNull(),
    last_name: varchar({length: 20}).notNull(),
    username:  varchar({length: 20}).notNull().unique(),
    email: varchar({length: 50}).notNull().unique(),
    password: varchar({length: 255}).notNull(),
})