/**
 * Created by priom on 2017-03-11.
 */
import { PlayerStats } from '/collections/playerStats';


Meteor.methods({
   'byPlayerGoals': function () {
       var result = PlayerStats.aggregate([
           { "$unwind": "$gameStat"},
           {
               "$group": {
                   "_id": null,
                   "total_goals": {
                       "$sum": "$gameStat.playerGoals"
                   }
               }
           }
       ]);
       return result;
   }
});