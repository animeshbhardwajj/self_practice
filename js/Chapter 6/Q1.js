// write a program in javascript where 
// you are required implement following function:
// int CountSpecificNumbers(int m, int n);
// the function accepts two arguments m and n which are integers. you are required to calculate the count of numbers having only 1, 4, and 9 as their digits between the numbers lying in the range m and n both inclusive, and return the same. return -1 if m>n. Show all the number lying between the sample input:

// Sample Input:
// 100
// 200


// function CountSpecificNumbers(m, n) {
//     if (m > n) {
//         return -1;
//     }

//     let count = 0;
//     for (let i = m; i <= n; i++) {
//         let number = i.toString();
//         let isValid = true;
//         for (let j = 0; j < number.length; j++) {
//             if (number[j] !== '1' && number[j] !== '4' && number[j] !== '9') {
//                 isValid = false;
//                 break;
//             }
//         }
//         if (isValid) {
//             console.log(i);
//             count++;
//         }
//     }
//     return count;
// }

// console.log("Count: "+CountSpecificNumbers(100,200));




function specifyNumbers(a)
