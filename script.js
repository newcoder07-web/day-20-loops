// const number = Number(document.getElementById("number").value);
// console.log(number);

function analyzeNumber() {
    const number = Number(document.getElementById("number").value);

    console.log("Entered number:", number);
    alert("You entered: " + number);

if (number > 0){
    console.log("this si a positive number")
} else if (number < 0){
    console.log("this is a negative number")
}else if (number == 0){
    console.log("this number is zero")
}


// second task: printing numbers

for ( let i = 1; i <= number; i++){
    console.log(i)
}

// task 3: even numbers
// for ( let i = 1; i <= number; i+=2 -1){
//     console.log(i)
// }
// or
for ( let i = 1; i <=number; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// task 4: odd numbers
for ( let i = 1; i <=number; i +=2){
   console.log(i)
} 


// task 5: multiplication

for ( let i =1; i<=number; i ++){
    for( j = 1; j <= number; j++){
        console.log( number + "x" + j + "=" + (number * j))
        }
    }


    //task 6: calculate the sum
    let total = 0
    for ( let i = 1; i <= number; i++){
         total = total +=i;
    }

console.log("Sum ", total)





// task 7
for ( let i = 1; i<=number ; i ++){
    if(i % 5 == 0){
        console.log(i)
    }
}




// task number 8
for (let i = number; i >= 1 ; i --){
    console.log(i)
}


// task number 9
// ============first attempt for factorial==================
//  for (let i = 1; i <=number ; i*i--){
//     console.log(i)
//     if ( i >= 0){
//         window.prompt("error! please select a positive number for factorail")
//     }
//  }

// =====

if (number < 0 ){
    console.log("it is not defined for negative numbers")

} else{
    let factorial = 1;

 for (let i = 1; i <= number; i ++){
    factorial = factorial * i;
 }
 console.log("factorial", factorial)
}


}