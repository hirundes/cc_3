// Task 1 - Product Price Management Scenario
let prices = [20, 21, 22, 23, 24];
prices.push(25);
prices.shift();
console.log("Product Price Management:", prices)

//Task 2 - Modifying Customer Orders Scenario
let orders = [1, 2, 3, 4, 5];
orders[2] += 5;
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0); 
console.log("Updated Array with Third Order Quantity Increase", orders) 
console.log("Total Order Count", totalOrders) 





