import { Meteor } from 'meteor/meteor';
import { SoccerPlayers } from '/collections/soccerPlayers';
import { SoccerPlayerData } from '/server/soccerPlayerData';
import { GameStats } from '/collections/gameStats';
import { GameStatData } from '/server/gameStatData';
import { PlayerStats } from '/collections/playerStats'
import { PlayerStatData } from '/server/playerStatData';


Meteor.startup(() => {
    _.each(SoccerPlayerData.players, function (p) {
       SoccerPlayers.upsert({
          _id: p._id
       }, {
           $set: {
               id: p._id,
               name: p.name,
               position: p.position,
               jerseyNumber: p.jerseyNumber
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
            _id: g._id
        }, {
            $set: {
                _id: g._id,
                date: g.date,
                opponent: g.opponent,
                winOrLose: g.winOrLose,
                score: g.score
            }
        }, function (error, result) {
            if (error) {
                let errMsg = 'Error while writing game stats data';
                console.error(errMsg, error);
                throw new Meteor.Error('500', errMsg);
            }
        });
    });

    _.each(PlayerStatData.playerStat, function (s) {
        PlayerStats.upsert({
            // _id: s._id
            soccerPlayer: s.soccerPlayer
        }, {
            $set: {
                // _id: s._id,
                // name: s.name,
                // position: s.position,
                // jerseyNumber: s.jerseyNumber,
                // gameDate: s.gameDate,
                // opponent: s.opponent,
                // winOrLose: s.winOrLose,
                // gameScore: s.gameScore,
                // goals: s.goals
                soccerPlayer: s.soccerPlayer,
                gameStat: s.gameStat,
                playerGoals: s.playerGoals
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