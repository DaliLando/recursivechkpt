// Ticketing function
// function ticket() {
//     let age = parseInt(prompt("Please enter your age:"));

//     if (age <= 12) {
//         return("The price of the movie ticket is $10.");
//     } else if (age >= 13 && age <= 17) {
//         return("The price of the movie ticket is $15.");
//     } else if (age >= 18) {
//         return("The price of the movie ticket is $20.");
//     } else {
//         return("Invalid age entered. Please try again.");
//     }
// }
// console.log(ticket())

// Weather function 
// function weather() {
//     var temp = parseInt(prompt("Please enter current temperature:"));
//     var rain= prompt("Is it raining? (yes/no)").toLowerCase();

//     switch(true) {
//         case temp < 10:
//             if (rain === 'yes') {
//                 return("weather is cold and it'sraining. Wear a jacket and take an umbrella");
//             } else {
//                 return("weather is cold but it's not raining. Wear a warm jacket");
//             }
//             break;
//         case temp >= 10 && temp < 20:
//             if (rain === 'yes') {
//                 return("weather is cool and it's raining. Wear a light jacket and take an umbrella.");
//             } else {
//                 return("weather is cool but it's not raining. Wear a light jacket.");
//             }
//             break;
//         case temp >= 20 && temp < 30:
//             if (rain === 'yes') {
//                 return("weather is warm and it's raining. Wear a t-shirt and take un umbrella.");
//             } else {
//                 return("weather is warm but it's not raining. Wear a t-shirt and shorts.");
//             }
//             break;
//         case temp >= 30:
//             if (rain === 'yes') {
//                 return("weather is hot and it's raining. Wear light clothes and take an umbrella.");
//             } else {
//                 return("weather is hot but it's not raining. Wear light clothes.");
//             }
//             break;
//         default:
//             return("Invalid input. Please try again.");
//     }
// }
// console.log(weather ());


// Recursive fibonacci function 
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(10));

//Recursive palindrome function 
// function palin (str)
// {
//  let i=0;
//  if (str[0]!= str[str.length-1]){
//     return false 
//  }
//  if (str.length <=1) {
//     return true
//  }
//     else {
//       return  palin (str.slice(1,-1))
//     }
//  }

//  console.log (palin("aa"))

