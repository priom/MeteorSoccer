/**
 * Created by priom on 2017-03-03.
 */

import { Template } from 'meteor/templating';
import { PlayerStats } from '/collections/playerStats';

import './main.html';

// subscribe data to display to the client
Template.SoccerPlayers.onCreated(() => {
   Meteor.subscribe('playerStats');
});

// helper method to display the data on the client
Template.SoccerPlayers.helpers({
    players() {
        //display total goals and games of each player to the client console
        Meteor.call('getGoals', function (error, result) {
            if (error) {
                console.log(error);
            }
            for (var i=0; i<result.length; ++i) {
                var id = result[i]._id.name;
                var goals = result[i].total_goals;
                var count = result[i].total_games;
                console.log(id + ": " + goals + " goals");
                console.log("Games Played: " + count);
            }
        });
        //display the collection to the client template
        return PlayerStats.find();
    },
    getCollection() {
        //collection for autoform
        return PlayerStats;
    }
});
