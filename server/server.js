import { Meteor } from 'meteor/meteor';
import { SoccerPlayers } from '/collections/soccerPlayers';
import { SoccerPlayerData } from '/server/soccerPlayerData';
import { GameStats } from '/collections/gameStats';
import { GameStatData } from '/server/gameStatData';


Meteor.startup(() => {
    _.each(SoccerPlayerData.players, function (p) {
       SoccerPlayers.upsert({
           name: p.name
       }, {
           $set: {
               name: p.name,
               position: p.position,
               jerseyNumber: p.jerseyNumber,
           }
       }, function (error, result) {
           if (error) {
               let errMsg = 'Error while writing soccer player data';
               console.error(errMsg, error);
               throw new Meteor.Error('500', errMsg);
           }
       });
    });

    _.each(GameStatData.games, function (g) {
        GameStats.upsert({
            date: g.date
        }, {
            $set: {
                date: g.date,
                opponent: g.opponent,
                winOrLose: g.winOrLose,
                score: g.score,
            }
        }, function (error, result) {
            if (error) {
                let errMsg = 'Error while writing game stats data';
                console.error(errMsg, error);
                throw new Meteor.Error('500', errMsg);
            }
        });
    });
});