// 1. for Loop
for(let i = 1; i <= 5; i++){
    console.log(i);
}

for(let i = 5; i >= 1; i--){
    console.log(i);
}

// 2. Print all odd numbers (1 to 15)
for(let i = 1; i <= 15; i += 2){
        console.log(i);
}

// 3. Print all even numbers (2 to 10)
for(let i = 2; i <= 10; i += 2){
    console.log(i);
}

// 4. Print the multiplication table for 5
let n = prompt("Write your Number :");
n = parseInt(n);
for(let i = n; i <= n * 10; i = i + n){
    console.log(i);
}

// 5. Nested for Loop
for(let i = 1; i <= 3; i++){
    console.log(`Outer loop is ${i}`);
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

// 6. while loop
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// 7. favorite Movie
let favMovie = "Avengers";
let guess = prompt("Enter Movie Name :");
while(guess != favMovie){
    if(guess == "quit"){
        guess = alert("You quit");
        break;
    }
    guess = prompt("Wrong Movie. Guess Again :");
}

if(guess == favMovie){
    guess = alert("You guessed it,Congratulations.")
}

// 8. break keyword
let j = 1; 
while(j <= 5){
    if(j == 3){
        console.log("We used break here.")
        break;
    }
    console.log(i);
    j++;
}

// 9. Loops with Arrays
let fruits = ["Mango", "apple", "banana", "Litchi", "orange"];
fruits.push("pineapple");
// for(let i = 0; i < fruits.length; i++){
//     console.log(i,":", fruits[i]);
// }
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(i,":", fruits[i]);
}

// 10. Loops with Arrays - Nested Loops with Nested Arrays 
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for(let i = 0; i < heroes.length; i++){
    console.log(i, ":", heroes[i]);
    for(let j = 0; j < heroes[i].length; j++){
        console.log(`j = ${j}, ${heroes[i][j]}`)
    }
}

let students = [["aman", 95], ["aryan", 59], ["gandu", 58]];
for(let i = 0; i < students.length; i++){
    console.log(`Info of student No. ${i + 1} :`)
    for(let j = 0; j <students[i].length; j++){
        console.log(students[i][j]);
    }
}