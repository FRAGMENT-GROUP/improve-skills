/*
    For each manufacturer producing notebook PCs with a hard disk volume of at least 10 GB, find the speeds 
    of such notebook PCs. Conclusion: manufacturer, speed.
*/

SELECT DISTINCT Product.maker, Laptop.speed FROM Product INNER JOIN Laptop ON Product.model=Laptop.model 
WHERE Laptop.hd >= 10;
