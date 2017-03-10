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
        type: [GameStatsSchema],
    },
    "gameStat.$.playerGoals": {
        type: Number
    },
    // totalGoals: {
    //     type: Number,
    //     autoValue: function () {
    //         var goals = this.field("playerGoals");
    //         var total = 0;
    //         for(var i=0; i<4; i++) {
    //             total += goals
    //             return total;
    //         }
    //     },
    //     autoform: {
    //         afFieldInput: {
    //             type: "hidden"
    //         },
    //         afFormGroup: {
    //             label: false
    //         }
    //     },
    //     optional: true
    // }
});

// attach schema to the collection
PlayerStats.attachSchema(PlayerStatsSchema);