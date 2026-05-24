// TypeScript example: typed `add` function
export function add(a, b) {
    return a + b;
}
// Correct usage (prints 15)
console.log('add(5, 10) =', add(5, 10));
// Incorrect usage: uncommenting the following line will produce a compile-time error
// add("5", 10); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
