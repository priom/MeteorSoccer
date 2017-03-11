/**
 * Created by priom on 2017-03-03.
 */

// create and export new collection
// Mongo.Collection is a new way in meteor; it is the same as Meteor.Collection
export const SoccerPlayers = new Mongo.Collection('soccerPlayers');

// create new schema for the collection
export const SoccerPlayersSchema = new SimpleSchema({
    // _id: {
    //     type: Number
    // },
    name: {
       type: String,
       label: "Name"
    },
    position: {
        type: String,
        label: "Position",
        allowedValues: ['GK', 'DEF', 'MID', 'FWD', 'ST'],
        autoform: {
            options: {
                GK: "GoalKeeper",
                DEF: "Defender",
                MID: "MidFielder",
                FWD: "Forward",
                ST: "Striker"
            }
        }
    },
    jerseyNumber: {
        type: Number,
        label: "Jersey Number"
    }
});

// attach schema to the collection
SoccerPlayers.attachSchema(SoccerPlayersSchema);