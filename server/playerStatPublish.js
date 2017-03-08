/**
 * Created by priom on 2017-03-05.
 */

import { PlayerStats } from '/collections/playerStats';

Meteor.publish('playerStats', () => {
   return PlayerStats.find({}, {
       fields: {
           soccerPlayer: 1,
           gameStat: 1,
           playerGoals: 1
       }
   }) ;
});