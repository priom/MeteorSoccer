/**
 * Created by priom on 2017-03-03.
 */

// create and export new collection
// Mongo.Collection is a new way in meteor; it is same as Meteor.Collection
export const GameStats = new Mongo.Collection('gameStats');

// create new schema for the collection
export const GameStatsSchema = new SimpleSchema({
    _id: {
        type: Number
    },
    date: {
        type: Date,
        label: "Date of Match"
    },
    opponent: {
        type: String,
        label: "Opponent"
    },
    winOrLose: {
        type: String,
        label: "Win or Lose",
        allowedValues: ['WIN', 'LOSE']
    },
    score: {
        type: String,
        label: "Score"
    }
});

// attach schema to the collection
GameStats.attachSchema(GameStatsSchema);