//narrowing

//'type of'
let value: unknown = "Hello, narrowing!";
if (typeof value === "string") {
    console.log("Value is a string:", value.toUpperCase());
} else {
    console.log("Value is not a string.");
}

//type guards
type User = {
    name: string;
    age: number;
};
const user1: User = {
    name: "Khasru",
    age: 30
};

//type guard function
function isUser(obj: any): obj is User {
    return obj && typeof obj.name === "string" && typeof obj.age === "number";
}
console.log("Is user1 a User?", isUser(user1)); // true