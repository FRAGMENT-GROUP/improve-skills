/*
Task 1 - Find the model number, speed, and hard drive size for 
all PCs under $ 500. Output: model, speed and hd
*/

SELECT model, speed, hd FROM PC WHERE price < 500;
