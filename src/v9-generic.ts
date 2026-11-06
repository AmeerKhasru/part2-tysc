//generic practice
function identity<T>(arg: T): T {
    return arg;
}

let output = identity("Hello from v9-generic.ts!");
console.log(output);