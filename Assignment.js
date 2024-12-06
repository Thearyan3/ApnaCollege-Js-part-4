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
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);



// Qs 3 . Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25.
let number1 = 287152;
let sum = 0;
let copy1 = number1;
let digit; 
while(copy1 > 0){
    digit = copy1 % 10;
    sum += digit;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);



// Qs 4 . Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.] 
// Example : 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040 5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120 3! (factorial of 3) = 1 x 2 x 3 = 60 ! Is always 1.
let n = 5;
let factorial = 1; 
for(let j = 1; j <= n; j++){
    factorial *= j;
}
console.log(factorial);



// Qs 5 . Find the largest number in an array with only positive numbers.
let arr2 = [1, 45, 23,-223, 78, 99, -1223];
let largest = 0;
for(let k = 0; k < arr2.length; k++){
    if(largest < arr2[k]){
        largest = arr2[k];
    }
}
console.log(largest);
