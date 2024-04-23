import { relations } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  varchar,
  integer,
  jsonb
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `bingo_${name}`);

export const profileInfo = createTable('profile_info', {
  id: serial('id').primaryKey(),
  username: varchar("username", { length: 256 }),
  avatar: varchar("avatar", { length: 256 }),
  clerkId: varchar('clerk_id', { length: 256 }),
  bingoCards: jsonb('bingo_cards').default(
    [
      {
        "id": 1,
        "name": "Tirem",
        "checked": false
      },
      {
        "id": 2,
        "name": "Dzięki za dzisiaj",
        "checked": false
      },
      {
        "id": 3,
        "name": "Daniel wejdzie na disc",
        "checked": false
      },
      {
        "id": 4,
        "name": "FOMO",
        "checked": false
      },
      {
        "id": 5,
        "name": "ClassCat",
        "checked": false
      },
      {
        "id": 6,
        "name": "Pisanie endpointów",
        "checked": false
      },
      {
        "id": 7,
        "name": "Jolie Jolie",
        "checked": false
      },
      {
        "id": 8,
        "name": "Stylowanie Buttona",
        "checked": false
      },
      {
        "id": 9,
        "name": "Wysłane CV",
        "checked": false
      },
      {
        "id": 10,
        "name": "TFT",
        "checked": false
      },
      {
        "id": 11,
        "name": "Stop Cham",
        "checked": false
      },
      {
        "id": 12,
        "name": "[Object object]",
        "checked": false
      },
      {
        "id": 13,
        "name": "Loldle",
        "checked": false
      },
      {
        "id": 14,
        "name": "Pokedle",
        "checked": false
      },
      {
        "id": 15,
        "name": "Kręcimy",
        "checked": false
      },
      {
        "id": 16,
        "name": "GeoGuessr",
        "checked": false
      }
    ]
  ),
  wins: jsonb('wins').default([])
});



