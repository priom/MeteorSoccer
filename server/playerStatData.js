/**
 * Created by priom on 2017-03-04.
 */

import { SoccerPlayerData } from '/server/soccerPlayerData';
import { GameStatData } from '/server/gameStatData';

// populating some dummy data into the database
export const PlayerStatData = {
    playerStat: [
        {
            soccerPlayer: SoccerPlayerData.players[0],
            gameStat: GameStatData.games[0],
            playerGoals: 2
        }


        // {
        //     _id: 1,
        //     name: SoccerPlayerData.players[0].name,
        //     position: SoccerPlayerData.players[0].position,
        //     jerseyNumber: SoccerPlayerData.players[0].jerseyNumber,
        //     gameDate: GameStatData.games[0].date,
        //     opponent: GameStatData.games[0].opponent,
        //     winOrLose: GameStatData.games[0].winOrLose,
        //     gameScore: GameStatData.games[0].score,
        //     goals: 2
        // },
        // {
        //     _id: 2,
        //     name: SoccerPlayerData.players[0].name,
        //     position: SoccerPlayerData.players[0].position,
        //     jerseyNumber: SoccerPlayerData.players[0].jerseyNumber,
        //     gameDate: GameStatData.games[1].date,
        //     opponent: GameStatData.games[1].opponent,
        //     winOrLose: GameStatData.games[1].winOrLose,
        //     gameScore: GameStatData.games[1].score,
        //     goals: 1
        // },
        // {
        //     _id: 3,
        //     name: SoccerPlayerData.players[1].name,
        //     position: SoccerPlayerData.players[1].position,
        //     jerseyNumber: SoccerPlayerData.players[1].jerseyNumber,
        //     gameDate: GameStatData.games[0].date,
        //     opponent: GameStatData.games[0].opponent,
        //     winOrLose: GameStatData.games[0].winOrLose,
        //     gameScore: GameStatData.games[0].score,
        //     goals: 3
        // },
        // {
        //     _id: 4,
        //     name: SoccerPlayerData.players[1].name,
        //     position: SoccerPlayerData.players[1].position,
        //     jerseyNumber: SoccerPlayerData.players[1].jerseyNumber,
        //     gameDate: GameStatData.games[1].date,
        //     opponent: GameStatData.games[1].opponent,
        //     winOrLose: GameStatData.games[1].winOrLose,
        //     gameScore: GameStatData.games[1].score,
        //     goals: 2
        // },
        // {
        //     _id: 5,
        //     name: SoccerPlayerData.players[1].name,
        //     position: SoccerPlayerData.players[1].position,
        //     jerseyNumber: SoccerPlayerData.players[1].jerseyNumber,
        //     gameDate: GameStatData.games[2].date,
        //     opponent: GameStatData.games[2].opponent,
        //     winOrLose: GameStatData.games[2].winOrLose,
        //     gameScore: GameStatData.games[2].score,
        //     goals: 3
        // },
        // {
        //     _id: 6,
        //     name: SoccerPlayerData.players[2].name,
        //     position: SoccerPlayerData.players[2].position,
        //     jerseyNumber: SoccerPlayerData.players[2].jerseyNumber,
        //     gameDate: GameStatData.games[3].date,
        //     opponent: GameStatData.games[3].opponent,
        //     winOrLose: GameStatData.games[3].winOrLose,
        //     gameScore: GameStatData.games[3].score,
        //     goals: 1
        // },
        // {
        //     _id: 7,
        //     name: SoccerPlayerData.players[3].name,
        //     position: SoccerPlayerData.players[3].position,
        //     jerseyNumber: SoccerPlayerData.players[3].jerseyNumber,
        //     gameDate: GameStatData.games[4].date,
        //     opponent: GameStatData.games[4].opponent,
        //     winOrLose: GameStatData.games[4].winOrLose,
        //     gameScore: GameStatData.games[4].score,
        //     goals: 1
        // },
        // {
        //     _id: 8,
        //     name: SoccerPlayerData.players[2].name,
        //     position: SoccerPlayerData.players[2].position,
        //     jerseyNumber: SoccerPlayerData.players[2].jerseyNumber,
        //     gameDate: GameStatData.games[4].date,
        //     opponent: GameStatData.games[4].opponent,
        //     winOrLose: GameStatData.games[4].winOrLose,
        //     gameScore: GameStatData.games[4].score,
        //     goals: 1
        // }
    ]
};
