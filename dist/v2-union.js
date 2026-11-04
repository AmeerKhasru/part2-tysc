//Literal Types
const status1 = "pending"; // valid
const status2 = "approved"; // valid
// const status3: Status = "in progress"; // Error: Type '"in progress"' is not assignable to type 'Status'.    
const status3 = "rejected"; // valid
console.log("Status 1:", status1);
console.log("Status 2:", status2);
console.log("Status 3:", status3);
const value1 = "Hello"; // valid
const value2 = 42; // valid
// const value3: StringOrNumber = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
console.log("Value 1:", value1);
console.log("Value 2:", value2);
// console.log("Value 3:", value3); // This would cause a compile-time error
// Ekbare shobgulo eksathe export kora holo
export { status1, status2, status3, value1, value2 };
