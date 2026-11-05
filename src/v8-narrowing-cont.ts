//some caveat of type guards and narrowing
console.log("Narrowing and Type Guards examples:");
const printAll = (strs: string | string[] | null) => {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
};
printAll("Hello from narrowing!");

//in operator
console.log("In operator example:");

const isAdmin = (account: { name: string; isAdmin?: boolean }) => {
    if ("isAdmin" in account) {
        console.log(`${account.name} is an admin.`);
    } else {
        console.log(`${account.name} is not an admin.`);
    }
};
isAdmin({ name: "Alice", isAdmin: true });
isAdmin({ name: "Bob" });

//instanceof operator
console.log("Instanceof operator example:");
const logValue = (value: string | Date) => {
    if (value instanceof Date) {
        console.log("Date value:", value.toISOString());
    } else {
        console.log("String value:", value.toUpperCase());
    }
};
logValue("Hello, TypeScript!");
logValue(new Date());