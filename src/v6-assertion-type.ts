//Assertion Type
console.log("Assertion Type Example:");
let someValue: unknown = "Hello, assertion type from TS";
let upperCaseText: string = (someValue as string).toUpperCase();
console.log("Upper case text:", upperCaseText);

