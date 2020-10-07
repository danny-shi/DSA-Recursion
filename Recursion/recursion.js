// 1. Counting Sheep
/* 
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have. 
The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
*/

function countSheep(sheep) {
  if (sheep === 0) {
    console.log("All sheep jumped over the fence");
  } else {
    console.log(`${sheep}: Another sheep jumped over the fence`);
    let sheepLeft = sheep - 1;
    countSheep(sheepLeft);
  }
}

console.log(countSheep(5));

// 2. Power Calculator

function powerCalculator(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, power - 1);
  }
}

console.log(powerCalculator(5, 3));

// 3. Reverse String
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseString("hello"));

// 4. nth Triangular Number
function triangular(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + 1 + triangular(n - 1);
  }
}
console.log(triangular(6));

// 5. String Splitter
function split(str) {}

// 6. Fibonacci
function fib(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(10));

// 7. Factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// 8. Find a way out of a maze

// 9. Find ALL the ways out of a maze

// 10. Anagrams

// 11. Organization Chart

// 12. Binary representation
