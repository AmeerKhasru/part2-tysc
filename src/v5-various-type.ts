// Top types any/unknown

let anyValue: any;
anyValue = "Hello, world!";
console.log("Any value:", anyValue);

let unknownValue: unknown;
unknownValue = 42;
console.log("Unknown value:", unknownValue);

//Core Types: string, number, boolean, null, undefined

let str: string = "Hello, TypeScript!";
let num: number = 42;
let bool: boolean = true;

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);

//Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log("Null value:", nullValue);
console.log("Undefined value:", undefinedValue);

// Union Types
type StringOrNumber = string | number;
let unionValue: StringOrNumber = "Hello, TypeScript!";
unionValue = 42; // valid
console.log("Union value:", unionValue);

//Bottom types: void, never

function logMessage(message: string): void {
  console.log("Log message:", message);
}

function throwError(message: string): never {
  throw new Error(message);
}

//hierarchy among types
//any > unknown > string/number/boolean > null/undefined > void > never
console.log("Type hierarchy: any > unknown > string/number/boolean > null/undefined > void > never");
//any vs unknown
let anything: any = "Hello";
anything = 42; // Valid
anything = true; // Valid
let str1: string = anything; // Valid (কোনো এরর দেবে না)
let unk: unknown = "Bangladesh";
unk = 100; // Valid

console.log("Anything:", anything);
console.log("Unknown:", unk);

// let myStr: string = unk; // Error! Type 'unknown' is not assignable to type 'string'.
