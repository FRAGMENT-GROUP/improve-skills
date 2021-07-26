/*
    Find the average speed of PCs manufactured by manufacturer A.
*/

SELECT AVG(speed) FROM PC INNER JOIN Product ON PC.model = Product.model AND Product.maker = 'A'
