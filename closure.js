function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}
const counRoast = kitchen();
console.log(counRoast);
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());
console.log(counRoast());

console.log(counRoast());