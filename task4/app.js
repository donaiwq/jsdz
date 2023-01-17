

//Task1
//The first way to solve this logic task
const length = {}
var symbolCounter = ['span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
symbolCounter.forEach(function (x) { length[x] = (length[x] || 0) + 1; });
console.log(length)


//The second way to solve this logic task
const signCounter = ['span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
const elementCounts = {};
signCounter.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});
console.log(elementCounts);

//Task2
 
const bigNumber = [1, 3, 2, 78, 98, 34, 56, 12, 3, 1, 45, 3, 5, 7, 78, 77, 98];
console.log(Math.max(...bigNumber));

//Using the same counter for dublicates
const arr = [1, 3, 2, 78, 98, 34, 56, 12, 3, 1, 45, 3, 5, 7, 78, 77, 98];

const count = {};

for (let index = 0; index < arr.length; index++) {
  count[arr[index]] = (count[arr[index]] || 0) + 1;
}

console.log(count);
