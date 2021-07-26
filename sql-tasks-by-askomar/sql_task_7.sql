/*
    Find the model numbers and prices of all commercially available products (of any type) from 
    Manufacturer B (Latin letter).
*/

SELECT Product.model, PC.price FROM Product INNER JOIN PC ON PC.model = Product.model WHERE 
Product.maker = 'B' UNION SELECT Product.model, Laptop.price FROM Product INNER JOIN Laptop ON 
Product.model = Laptop.model WHERE Product.maker = 'B' UNION SELECT Product.model, Printer.price FROM 
Product INNER JOIN Printer ON Product.model = Printer.model WHERE Product.maker = 'B'
