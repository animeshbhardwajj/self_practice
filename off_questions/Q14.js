// WAP to enter details of an employee such as org name, his name, and sales made made by him in a month. and calculate commission based on following conditions.
//      total sale      commission 
//      1-2000             5%
//      2001-5000          7%
//      5001-10000         10%
//      10001-15000        12%
//      >15000             15%
// Salary is fixed of rs45000 of sales man 


let orgName = prompt("Enter organization name:");
let empName = prompt("Enter employee name:");
let sales = prompt("Enter sales made by the employee in a month:");
let commission = 0;

if (sales >= 1 && sales <= 2000) {
  commission = sales * 0.05;
} else if (sales >= 2001 && sales <= 5000) {
  commission = sales * 0.07;
} else if (sales >= 5001 && sales <= 10000) {
  commission = sales * 0.1;
} else if (sales >= 10001 && sales <= 15000) {
  commission = sales * 0.12;
} else if (sales > 15000) {
  commission = sales * 0.15;
}

let salary = 45000 + commission;
console.log(`Organization name: ${orgName}`);
console.log(`Employee name: ${empName}`);
console.log(`Monthly sales: ${sales}`);
console.log(`Commission: ${commission}`);
console.log(`Salary: ${salary}`);
