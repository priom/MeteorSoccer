/**
 * Created by priom on 2017-03-03.
 */

import { GameStats } from '/collections/gameStats';


Meteor.publish('gameStats', () => {
    return GameStats.find({}, {
        fields: {
            date: 1,
            opponent: 1,
            winOrLose: 1,
            score: 1,
        }
    });
});
