/*
    Find the class, name and country for ships from the Ships table that have at least 10 guns.
*/

SELECT Ships.class, Ships.name, Classes.country FROM Ships INNER JOIN Classes ON Ships.class = Classes.class 
WHERE Classes.numGuns >= 10
