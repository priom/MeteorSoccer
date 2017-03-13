/**
 * Created by priom on 2017-03-05.
 */

import { PlayerStats } from '/collections/playerStats';

//publish collection to the server
Meteor.publish('playerStats', () => {
    return PlayerStats.find();
});