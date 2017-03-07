/**
 * Created by priom on 2017-03-03.
 */

import { SoccerPlayersSchema } from '/collections/soccerPlayers';
import { GameStatsSchema } from '/collections/gameStats';

// create and export new collection
// Mongo.Collection is a new way in meteor; it is the same as Meteor.Collection
export const PlayerStats = new Mongo.Collection('playerStats');

// create new schema for the collection
const PlayerStatsSchema = new SimpleSchema({
    // _id: {
    //     type: SoccerPlayersSchema._id
    // },
    // name: {
    //     type: SoccerPlayersSchema.name
    // },
    // position: {
    //     type: SoccerPlayersSchema.position
    // },
    // jerseyNumber: {
    //     type: SoccerPlayersSchema.jerseyNumber
    // },
    soccerPlayer: {
        type: SoccerPlayersSchema
    },
    gameStat: {
        type: GameStatsSchema,
    },
    playerGoals: {
        type: Number
    }

    // gameDate: {
    //     type: GameStatsSchema.date
    // },
    // opponent: {
    //     type: GameStatsSchema.opponent
    // },
    // winOrLose: {
    //     type: GameStatsSchema.winOrLose
    // },
    // gameScore: {
    //     type: GameStatsSchema.score
    // },
    // goals: {
    //     type: Number,
    //     label: "Goals"
    // }
});

// attach schema to the collection
PlayerStats.attachSchema(PlayerStatsSchema);