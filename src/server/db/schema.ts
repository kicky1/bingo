// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  boolean
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `bingo_${name}`);

export const bingoCards = createTable(
  "bingoCard",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    checked: boolean("checked").default(false),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const usersStats = createTable(
  "userStats",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 256 }),
    username: varchar("username", { length: 256 }),
    bingoAmount: varchar("bingoAmount", { length: 256 }),
    createdAt: timestamp("createdAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    usernameIndex: index("username_idx").on(example.username),
  })
);
