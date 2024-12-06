// Qs 1 . Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example : if arr = [1,2,3,4,5,6,2,3] & num = 2 Result should be arr= [1,3,4,5,6,3].
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// num = 2;
// for(a of arr){
//     if(a == num){
//         arr.splice(arr.indexOf(a), 1);
//     }
// }
// console.log(arr);



// Qs 2 . Write a JS program to find the no. of digits in a number. Example : if number = 287152, count = 6.
// let number = "287152";
// let count = 0;
// for(let i = 0; i < number.length; i++){
//         count++;
// }
// console.log(count);



// Qs 3 . Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25.
let number = "287152";
let sum = 0;
for(let i = 0; i < number.length; i++){
    sum = sum + number[i];
}
console.log(sum);












// Qs4.Printthefactorialofanumbern.[Factorialofanumbernistheproductofallpositiveintegerslessthanorequaltoagivenpositiveintegeranddenotedbythatinteger.]Example:7!(factorialof7)=1x2x3x4x5x6x7=50405!(factorialof5)=1x2x3x4x5=1203!(factorialof3)=1x2x3=60!Isalways1
// Qs5.Findthelargestnumberinanarraywithonlypositivenumbers.