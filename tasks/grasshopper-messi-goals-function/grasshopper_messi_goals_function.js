/**
 * Grasshopper - Messi goals function
 * @link https://www.codewars.com/kata/55f73be6e12baaa5900000d4
 * @level 8kyu
 * @author Andrey Komarovsky
 * @param laGoals Amount of goals in LaLiga league (Number)
 * @param copaGoals Amount of goals in Copa del Rey league (Number)
 * @param championsGoals Amount of goals in Champions league (Number)
*/

module.exports.goals = (laGoals, copaGoals, championsGoals) => laGoals + copaGoals + championsGoals;
