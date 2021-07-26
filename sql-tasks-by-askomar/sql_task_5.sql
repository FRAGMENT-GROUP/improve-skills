/*
    Find the model number, speed and size of PC hard 
    drives that have 12x or 24x CDs and are priced under $ 600.
*/

SELECT model, speed, hd FROM PC WHERE (cd = '12x' OR cd = '24x') AND price < 600;
