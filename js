javascript// JavaScript
function add(a, b) {
    return a + b;
}
add("5", 10); // Returns "510" instead of 15

TypeScript requires you to specify the types of the variables, letting the compiler spot the error in your editor before you even run the script:typescript// TypeScript
function add(a: number, b: number) {
    return a + b;
}
add("5", 10); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
Using TypeScript can help catch type-related errors early in the development process, improving code quality and reducing runtime errors.