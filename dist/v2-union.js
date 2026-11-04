//Literal Types
const status1 = "pending"; // valid
const status2 = "approved"; // valid
// const status3: Status = "in progress"; // Error: Type '"in progress"' is not assignable to type 'Status'.    
const status3 = "rejected"; // valid
const value1 = "Hello"; // valid
const value2 = 42; // valid
let userOrAdmin;
userOrAdmin = { name: "Alice", age: 30 }; // valid
userOrAdmin = { name: "Bob", role: "admin" }; // valid
// userOrAdmin = { name: "Charlie", age: 25, role: "user" }; // Error: Type '{ name: string; age: number; role: string; }' is not assignable to type 'UserOrAdmin'.
// console.log("UserOrAdmin type:", userOrAdmin);    
// Ekbare shobgulo eksathe export kora holo
export { status1, status2, status3, value1, value2 };
