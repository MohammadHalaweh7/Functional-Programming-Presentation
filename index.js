// Examples of Imperative
const name = "Mohammad";
const Greeting = "Hi,";
console.log(Greeting, name); // Hi, Mohammad


// Examples of Declarative
const Greeting = (name) => {
  return "Hi, " + name;
};
console.log(Greeting("Mohammad")); // Hi, Mohammad


// Examples of Pure Functions
const add = (x, y) => {
  return x + y;
};
add(2, 5); // 7


// Examples of Not Pure Functions
let counter = 0;
const incCount = (value) => {
  return (counter += value);
};


// Examples of Higher Order Functions

// Ex-1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));
// Output:
// [ 1, 3, 5, 7, 9, 11 ]


// Ex-2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function filterEven(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterEven(arr));
// Output:
// [ 2, 4, 6, 8, 10 ]


// Ex-3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i=0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

function isGreaterThanFive(x) {
    return x > 5;
}

function isOdd(x) {
    return x % 2 != 0;
}

function isEven(x) {
    return x % 2 === 0;
}


// Ex-4
function mackAdjectifier (adjective){
    return function(string){
        return (adjective + " " + string);
    }
}
const coolifier = mackAdjectifier('cool')
console.log(coolifier('presentation'));
// Output : cool presentation


// Functional Programming in React
function Header(props) {
    return (
        <h1>{props.text}</h1>
    )
}






