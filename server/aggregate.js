/**
 * Created by priom on 2017-03-11.
 */

import { PlayerStats } from '/collections/playerStats';

// calculate the total goals and number of goals of each player by using MongoDB aggregation
Meteor.methods({
   getGoals: function () {
       return PlayerStats.aggregate([
           { $unwind: "$gameStat"},
           {
               $group: {
                   _id: "$soccerPlayer",
                   total_goals: {
                       $sum: "$gameStat.playerGoals"
                   },
                   total_games: {
                       $sum: 1
                   }
               }
           }
       ]);
   }
});
