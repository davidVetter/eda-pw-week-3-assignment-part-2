console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// Answer - You need to change the condition to less than 6 to count to 5.
console.log('count from 0 to 5');
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// Answer - You need to change what your counter(i) to 3 so it starts there instead of 0.
console.log('count from 3 to 5');
for (let i = 3; i < 6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// Answer - You need to change the counter to start at 2, the condition to be less than 11,
// and you want to increase your counter by 2 each count to get evens instead of 1.
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (starName of stars) {
  console.log(starName);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let c = 0;
while ( c < stars.length) {
  console.log(stars[c]);
  c++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let n = 0;
while (n < 6) {
  console.log(n);
  n++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let b = 10;
while (b > 4) {
  console.log(b);
  b--;
}