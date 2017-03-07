/**
 * Created by priom on 2017-03-03.
 */

import { Template } from 'meteor/templating';
import { PlayerStats } from '/collections/playerStats';

import './main.html';

// subscribe data to display to the client
Template.SoccerPlayers.onCreated(function () {
   this.subscribe('playerStats');
});

// helper method to display the data on the client
Template.SoccerPlayers.helpers({
    players() {
        return PlayerStats.find({});
    },
    getCollection() {
        return PlayerStats;
    }
});

