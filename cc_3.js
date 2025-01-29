// Task 1 - Product Price Management Scenario
let prices = [20, 21, 22, 23, 24];
prices.push(25);    //added new price 
prices.shift();     //removed the first price from the array
console.log("Task 1")   //logged the prices
console.log("   Product Price Management:", prices)

//Task 2 - Modifying Customer Orders Scenario
let orders = [1, 2, 3, 4, 5]; 
orders[2] += 5;   //increased third order quantity by 5
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0);    //calculated totalOrders
console.log("Task 2") //logged orders and total orders
console.log("   Updated Array with Third Order Quantity Increase", orders) 
console.log("   Total Order Count", totalOrders) 

//Task 3 - Employee Performance Tracking Scenario
let employee = {
    name: "Jackson",
    role: "Leader",
    performanceScore: 25,
    isActive: true 
};    //declared employee with properties 
employee.performanceScore = 45;   //updated performanceScore
employee.promotionEligible = true   //added new promotionEligible
console.log("Task 3")   //logged employee
console.log("   Updated Employee Object", employee)

//Task 4 - Customer Feedback Records Scenario
let feedback = [
    {
      customerName: "Max",
      feedbackText: "Service was decent but could use some work",
      rating: 20,
    },

    {
      customerName:"Karen",
      feedbackText:  "Service was horrible.",
      rating: 10,
    },
    {
      customerName:"Finn",
      feedbackText: "Service was amazing.",
      rating: 75, 
    }
]   // declared feedback array with three objects

feedback.push({
  customerName: "Jorge",
  feedbackText: "The service was chill",
  rating: 100,                     
});   //added new feedback object to array
console.log("Task 4")   //logged feedback
console.log("   Max, Karen, Finn, and Jorge Feedback", feedback)

//Task 5 - Inventory Management System Scenario
let inventory = {
  itemName: "Sugar",
  stockCount: 25,
  price: 5,
  calculateTotalValue: function() {
    return this.stockCount * this.price;
}
};    //declated inventory and added method to calculateTotalValue

console.log("Task 5")   //logged each part of inventory
console.log("   Item Name", inventory.itemName)
console.log("   Item Stock Count", inventory.stockCount)
console.log("   Item Price", inventory.price)
console.log("   Item Total Value", inventory.calculateTotalValue());

