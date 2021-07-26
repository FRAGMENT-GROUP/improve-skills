/*
    Find the highest priced printer models. Output: model, price
*/

SELECT model, price FROM Printer WHERE price = (SELECT MAX(price) FROM Printer)
