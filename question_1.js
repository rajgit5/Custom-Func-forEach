// 1. use map() to squares each value
function squreFunc(val) {
    return val ** 2;
}

let input = [2, 3, 4, 5];
console.log(input.map(squreFunc));


// 2. use filter() to filter only even number
function filterEven(filterVal) {
    return filterVal % 2 == 0;
}

let Filterinput = [1, 2, 3, 4, 5, 6];
console.log(Filterinput.filter(filterEven));



// 3. use reduce() function to calculation sum of all the elements.
function sumElement(sumStore, sumVal) {
    return sumStore += sumVal;
}

let sumInput = [5, 10, 15, 20];
console.log(sumInput.reduce(sumElement,0))



// 4. doing multiple operation like- filter mapping and reduce

// filter even number
function filterOdd(oddVal) {
    return oddVal % 2 == 0;
}

// make square of filtered value
function squareFiltered(sqfldVal) {
    return sqfldVal ** 2;
}

// make a func for making sum
function makeSum(calv, forsumVal) {
    return calv += forsumVal;
}

let multiOperation = [1, 2, 3, 4, 5];
let filtered = multiOperation.filter(filterOdd);
let makequare = filtered.map(squareFiltered);
let sumofsquare = makequare.reduce(makeSum,0);

console.log(sumofsquare)