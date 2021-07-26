/*  
    Find a PC manufacturer, but not a notebook PC.
*/

    SELECT DISTINCT maker FROM Product WHERE type = 'PC' EXCEPT SELECT DISTINCT maker FROM Product 
    WHERE type='Laptop'

