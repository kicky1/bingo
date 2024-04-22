import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  varchar,
  integer,
  jsonb
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `bingo_${name}`);


export const users = createTable('users', {
  id: serial('id').primaryKey(),
  username: varchar("username", { length: 256 }),
});

export const usersRelations = relations(users, ({ one }) => ({
  usersStats: one(profileInfo),
}));

export const profileInfo = createTable('profile_info', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  clerkId: varchar('clerk_id', { length: 256 }),
  bingoAmount: integer('bingo_amount').default(0),
  bingoCards: jsonb('bingo_cards').default([])
});



