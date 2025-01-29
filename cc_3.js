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

//Task 3 - Employee Performance Tracking Scenario
let employee = {
    name: "Jackson",
    role: "Leader",
    performanceScore: 25,
    isActive: true 
}; 
employee.performanceScore = 45;
employee.promotionEligible = true
console.log("Updated Employee Object", employee)

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
]

feedback.push({
  customerName: "Jorge",
  feedbackText: "The service was chill",
  rating: 100,                     
});
console.log("Max, Karen, Finn, and Jorge Feedback", feedback)

