/**
 * Created by priom on 2017-03-03.
 */

import { SoccerPlayersSchema } from '/collections/soccerPlayers';
import { GameStatsSchema } from '/collections/gameStats';

// create and export new collection
// Mongo.Collection is a new way in meteor; it is the same as Meteor.Collection
export const PlayerStats = new Mongo.Collection('playerStats');

// create new schema for the collection
export const PlayerStatsSchema = new SimpleSchema({
    soccerPlayer: {
        type: SoccerPlayersSchema
    },
    gameStat: {
        type: [GameStatsSchema]
    },
    "gameStat.$.playerGoals": {
        type: Number
    },
});

// attach schema to the collection
PlayerStats.attachSchema(PlayerStatsSchema);