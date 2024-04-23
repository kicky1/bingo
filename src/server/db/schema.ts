import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  varchar,
  integer,
  jsonb
} from "drizzle-orm/pg-core";
import { defaultBingoCards } from "~/lib/constants";

export const createTable = pgTableCreator((name) => `bingo_${name}`);

export const profileInfo = createTable('profile_info', {
  id: serial('id').primaryKey(),
  username: varchar("username", { length: 256 }),
  avatar: varchar("avatar", { length: 256 }),
  clerkId: varchar('clerk_id', { length: 256 }),
  bingoCards: jsonb('bingo_cards').default(defaultBingoCards),
  wins: jsonb('wins').default([])
});



