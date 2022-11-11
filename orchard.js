///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// Create a new variable that will add all picked acres data
let allPickedAcres = [...fujiAcres, ...galaAcres, ...pinkAcres]
// Created a new variable that will be assigned the sum of allPickedAcres.
// We will use totalAcres inside the for-loop.
// Setting totalAcres to 0 allows it to be a variable with interger data types .
totalAcres = 0;

// This Function will loop through allPickedAcres, adding the individual data
// onto a new variable called acres, which then gets added into a sum variable
// that was declared outside of the for-loop.
for (let i = 0; i < allPickedAcres.length; i++) {
    const acres = allPickedAcres[i];
    totalAcres += acres
}
// Expected answer should be 63 acres
// console.log(totalAcres)




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// Here, we divide the total picked acres by the total amount of days in the week
let averageDailyAcres = totalAcres / 7;
// We take 63 acres divided by 7 days of the week, 
// expecting our answer to be an average of 9 acres picked a day 
// console.log(averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Every loop will be considered a day (days+1), and each day we pick an average of 9 acres.
// We expect that each day, or loop, the acres left will be 9 acres less than the previous loop.
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres
    days += 1
}
// The expected outcome should be 20 days it will take to pick all of the acres that are left.
//  console.log(days)
// Note* after the last loop, the total acres left will go into the negative.
// This is because on day 19 we only have 3 acres left, and on average we pick 9 acres a day.
// We can see this if we divide 174 acres left by 9 acres picked on avgerage per day, which equals 19.333 days.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// Empty arrays added here as staging for data created in the for-loops.
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

//Here, we are looping through the fujiAcres array taking each days picked acreage.
// We then multiply by 6.5 tons (one acre = 6.5 tons), and then push onto the empty array we created above.
for (let i = 0; i < fujiAcres.length; i++) {
    const fuji = fujiAcres[i];
    fujiTons.push(fuji * 6.5)
}

// We then do the same thing for gala apples and pink apples.
for (let i = 0; i < galaAcres.length; i++) {
    const gala = galaAcres[i];
    galaTons.push(gala * 6.5)
    
}
 for (let i = 0; i < pinkAcres.length; i++) {
    const pink = pinkAcres[i];
    pinkTons.push(pink * 6.5)
 }

console.log(fujiTons)
//  console.log(galaTons)
//  console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// We set the empty variables here to 0 so they are interger based datatypes
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// Using a for-loop again, we loop through the weekly tonnage we calculated last problem.
for (let i = 0; i < fujiTons.length; i++) {
    let appleTons = fujiTons[i];
    fujiPounds += (appleTons * 2000)
    
}
// We convert the tons into pounds through multiplication (1 ton = 2000 pounds)
for (let i = 0; i < galaTons.length; i++) {
    let appleTons = galaTons[i];
    galaPounds += (appleTons * 2000)
    
}
// And then add the total varietal poundage to the variable we created on the global scope 
for (let i = 0; i < pinkTons.length; i++) {
    let appleTons = pinkTons[i];
    pinkPounds += (appleTons * 2000)
    
}



console.log(fujiPounds)

console.log(galaPounds)

console.log(pinkPounds)

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// Since each apple has a seperate price per pound, all we do is sperate it into
// three variables, milutpling the pound Var with the price Var to get the total profit.
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// Finally, we add all the profit variables together, and assign them to a new variable for total profit.
totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit)