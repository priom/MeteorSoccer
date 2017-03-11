/**
 * Created by priom on 2017-03-03.
 */

import { Template } from 'meteor/templating';
import { PlayerStats } from '/collections/playerStats';

import './main.html';


Meteor.call('byPlayerGoals', function (error, result) {
   if (error) {
       console.log(error);
   } else {
       console.log(result[0].total_goals);
   }
});


// subscribe data to display to the client
Template.SoccerPlayers.onCreated(function () {
   this.subscribe('playerStats');
});

// helper method to display the data on the client
Template.SoccerPlayers.helpers({
    players() {
        return PlayerStats.find();
    },
    getCollection() {
        return PlayerStats;
    },

    // 'sum': function () {
    //     var sum = 0;
    //     var cursor = PlayerStats.find();
    //     cursor.forEach(function (transaction) {
    //         sum = sum + transaction.gameStat.$.playerGoals
    //     });
    //     return sum;
    // }

});

