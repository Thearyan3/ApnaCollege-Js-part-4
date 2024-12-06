// Qs 1 . Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example : if arr = [1,2,3,4,5,6,2,3] & num = 2 Result should be arr= [1,3,4,5,6,3].
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
num = 2;
for(a of arr){
    if(a == num){
        arr.splice(arr.indexOf(a), 1);
    }
}
console.log(arr);



// Qs 2 . Write a JS program to find the no. of digits in a number. Example : if number = 287152, count = 6.
let number = "287152";
let count = 0;
for(let i = 0; i < number.length; i++){
        count++;
}
console.log(count);



// Qs 3 . Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25.
let number1 = [2,8,7,1,5,2];
let sum = 0;
for(let i = 0; i < number1.length; i++){
    sum += number1[i];
}
console.log(sum);



// Qs 4 . Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.] 
// Example : 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040 5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120 3! (factorial of 3) = 1 x 2 x 3 = 60 ! Is always 1.
// let n = prompt("Enter the number :");
// n = parseInt(n);
// let a;
// for(let i = 1; i <= n; i++){
// console.log(i * n);
// }



// Qs 5 . Find the largest number in an array with only positive numbers.
let arr2 = [1, 45, 23,-223, 78, 99, -1223];
let int = arr2[0];
let largest;
for(let k = 0; k < arr2.length; k++){
    if(int <= arr2[k]){
        largest = arr2[k];
    }
}
console.log(largest);
