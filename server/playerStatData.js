/**
 * Created by priom on 2017-03-04.
 */

import { SoccerPlayerData } from '/server/soccerPlayerData';
import { GameStatData } from '/server/gameStatData';

// populating some data into the database
export const PlayerStatData = {
    playerStat: [
        {
            soccerPlayer: SoccerPlayerData.players[0],
            gameStat: GameStatData.games[0],
            playerGoals: 2
        },
        {
            soccerPlayer: SoccerPlayerData.players[1],
            gameStat: GameStatData.games[1],
            playerGoals: 3
        },
        {
            soccerPlayer: SoccerPlayerData.players[2],
            gameStat: GameStatData.games[2],
            playerGoals: 1
        },
        {
            soccerPlayer: SoccerPlayerData.players[3],
            gameStat: GameStatData.games[3],
            playerGoals: 1
        },
        {
            soccerPlayer: SoccerPlayerData.players[4],
            gameStat: GameStatData.games[4],
            playerGoals: 3
        }
    ]
};

