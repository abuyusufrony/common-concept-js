function arg(a, b, c, d) {
    const result = a + b + c;

    const arr = arguments;
    console.log(arr)
    console.log(arg.length)
    return result;
}
const total = arg(10, 15, 25);
console.log(total);
