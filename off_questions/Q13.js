
//write a program to enter n number of elemment, and print it in reverse order. 


let n = prompt("Enter the number of elements:");
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = prompt(`Enter element ${i + 1}:`);
}

console.log("Elements in reverse order:");
for (let i = n - 1; i >= 0; i--) {
  console.log(arr[i]);
}