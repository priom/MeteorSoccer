/**
 * Created by priom on 2017-03-03.
 */

import { SoccerPlayers } from '/collections/soccerPlayers';


Meteor.publish('soccerPlayers', () => {
    return SoccerPlayers.find({}, {
       fields: {
           name: 1,
           position: 1,
           jerseyNumber: 1
       }
    });
});