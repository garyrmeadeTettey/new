import { relations } from "drizzle-orm";
import {
    boolean,
    integer,
    json,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";


export const user = pgTable("user", {
    id: serial("id").primaryKey(),
});
//one user can have multiple games

export const gametypeEnum = pgEnum("game_type", ['mcq', 'open_ended']);


export const question = pgTable("question", {
    id: serial("id").primaryKey().default(42),
    question: text('question').notNull(),
    answer: text('answer').notNull(),
    // gameId: integer('game_id'),
    options: json('options'),
    // percentageCorrect: integer('percentage_correct').notNull(),
    // isCorrect: boolean('is_correct').notNull(),
    questionType: gametypeEnum('question_type').notNull(),
    userAnswer: text('user_answer').notNull(),
});
//one game must have mny questions

// Define the relationship between User and Game (one-to-many)
// export const userRelations = relations(user, ({ many }) => ({
//     games: many(game)
// }));

// // Define the relationship between Game and Question (one-to-many)
// export const gameRelations = relations(game, ({ many }) => ({
//     question: many(question),
// }));

// // Define the relationship between Game and User (many-to-one)
// export const gameUserRelation = relations(game, ({ one }) => ({
//     user: one(user, {
//         fields: [game.userId], // Reference the userId field in the Game model
//         references: [user.id], // Reference the id field in the User model
//     }),
// }));

// export type Questions = typeof question.$inferSelect;
// export type Question = typeof question.$inferInsert;
