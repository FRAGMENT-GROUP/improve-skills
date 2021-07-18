/**
 * Grasshopper - Messi goals function
 * @link https://www.codewars.com/kata/55f73be6e12baaa5900000d4
 * @level 8kyu
 * @author Andrey Komarovsky
 * @param laLigaGoals Amount of goals in LaLiga league (Number)
 * @param copaDelReyGoals Amount of goals in Copa del Rey league (Number)
 * @param championsLeagueGoals Amount of goals in Champions league (Number)
*/

module.exports.goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;
