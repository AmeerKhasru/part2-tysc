//Literal Types

type Status = "pending" | "approved" | "rejected";
const status1: Status = "pending"; // valid
const status2: Status = "approved"; // valid
// const status3: Status = "in progress"; // Error: Type '"in progress"' is not assignable to type 'Status'.    
const status3: Status = "rejected"; // valid

console.log("Status 1:", status1); 
console.log("Status 2:", status2); 
console.log("Status 3:", status3); 

// Basic Union Types

type StringOrNumber = string | number;
const value1: StringOrNumber = "Hello"; // valid
const value2: StringOrNumber = 42; // valid
// const value3: StringOrNumber = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
console.log("Value 1:", value1);
console.log("Value 2:", value2);
// console.log("Value 3:", value3); // This would cause a compile-time error

// Ekbare shobgulo eksathe export kora holo
export { 
  Status, 
  status1, 
  status2, 
  status3, 
  StringOrNumber, 
  value1, 
  value2 
};