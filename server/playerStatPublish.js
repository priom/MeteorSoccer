/**
 * Created by priom on 2017-03-05.
 */

import { PlayerStats } from '/collections/playerStats';

Meteor.publish('playerStats', () => {
   return PlayerStats.find({}, {
       fields: {
           // _id: 1,
           // name: 1,
           // position: 1,
           // jerseyNumber: 1,
           // gameDate: 1,
           // opponent: 1,
           // winOrLose: 1,
           // teamScore: 1,
           // goals: 1
           soccerPlayer: 1,
           gameStat: 1,
           playerGoals: 1
       }
   }) ;
});