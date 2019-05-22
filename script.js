/* Variables and Data types lesson */
/*
var firstName =  'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;

console.log(job);

job = 'teacher';
console.log(job);

console.log(firstName + " " + lastName + " is " + age + " years old!");
*/
/*********************************************************
Variable mutation and type coercion
*/
/*
var firstName = "John";
var age = 28;

//****************TYPE COERSION****************

console.log(firstName + ' ' + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he Married?" + isMarried);

//***************VARIABLE MUTATION**************

age = 'twenty eight';
job = 'driver';

alert(firstName + " is a " + age + " year old " + job + ". Is he Married?" + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + " " + lastName);
*/

//************** BASIC OPERATORS******************
/*
var year, yearJohn, yearMark;

now = 2019;
ageJohn= 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log("John " + yearJohn);
console.log("Mark " + yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//type of operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "mark is older than john");
var x;
console.log(typeof x);
*/
/***************
 * 
 *  Operator Precedence
 * 
 **************/
/*
var now = 2019;

var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(now - yearJohn);
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var agemark = 35;
var average = (ageJohn + agemark) / 2;
console.log(average);

//multiple assignments

var x, y ;

x = y = (3+5) * 4 - 6; //8 * 4 - 6 equals to 26
console.log(x,y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/*
Mark and John are trying to compare their BMI (body mass index), which is calculated using the formula: BMI = mass / height ^2 = mass / (height * height). (mass in kg and height in meter).

1. store marks and johns mass and height in variables.
2. calcualte both their BMIs
3. Create a boolean variable containing information about whether mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (something like @is marks BMI higher than Johns? true.)
GOOD LUCK


*/
/*
var markMass, johnMass, markHeight, johnHeight;
var bmiMark, bmiJohn;


markMass = 80; //kg
markHeight = 1.77; //meter

johnMass = 90; //kg
johnHeight = 1.98; //meter

bmiMark = markMass / (markHeight * markHeight);
console.log(bmiMark);
bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiJohn);
var johnVsMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than Johns? " + johnVsMark);

*/
/*
var firstName = "john";
var civilStatus = "single";

// === is a logical operator which returns true or flase for string
if (civilStatus === "married"){
    console.log(firstName + " is Married.");
} else{
    console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;

if (isMarried){
    console.log(firstName + " is Married.");
} else{
    console.log(firstName + " will hopefully marry soon :)");
}

var markMass, johnMass, markHeight, johnHeight;
var bmiMark, bmiJohn;


markMass = 80; //kg
markHeight = 1.77; //meter

johnMass = 90; //kg
johnHeight = 1.58; //meter

bmiMark = markMass / (markHeight * markHeight);
bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn){
    console.log("Mark's BMI is greater than Johns")
} else {
    console.log("John's BMI is greater than John's")
}

/*var johnVsMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than Johns? " + johnVsMark);
*/

/*
******************BOOLEAN LOGIC******
*/
/*
var firstName = "john";
var age = 20;

if (age < 13){
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30){
    console.log(firstName + " is a young man");
} else {
    console.log(firstName + " is a man");
}

/*
Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, "", NaN
// truthy values: all values that are not falsy.
/*
var height;
height = 23;

if (height || height === 0){
    console.log("variable is defined");
} else {
    console.log("the variable has not beed defined");
}

// equality operators

// the == is a non strict equality operator. it convertes the number 23 and converts it to a string in the below if statement. If we were to use === then that is a Strict equality operator. Try to always use === to keep code in check.
if (height == "23"){
    console.log("The == operator does type coercion");
}
*/

/*

John and mike both play basketball in different teams. in teh latest 3 games, johns team scored 89, 120 and 103 points, while mikes team scored 116, 94 and 123 points.

1. calculate the average score for each team
2. decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. then change the scores to show different winers. dont forget to take into account there might be a draw (the same average score)

4. EXTRA: mary also plays basketball, and her team scored 97, 134 and 105 points. like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 

5. Like before, change the scores to generate different winners, keeping in mind there might be draw.

*/

var johnAverage, mikeAverage;

var johnFirstGame, johnSecondGame, johnThirdGame;
var mikeFirstGame, mikeSecondGame, mikeThirdGame;

johnFirstGame = 89;
johnSecondGame = 120;
johnThirdGame = 103;

mikeFirstGame = 116;
mikeSecondGame = 94;
mikeThirdGame = 123;

maryFirstGame = 97;
marySecondGame = 134;
maryThirdGame = 105;

johnAverage = (johnFirstGame + johnSecondGame + johnThirdGame) / 3
console.log("Johns team average score is " + johnAverage);
mikeAverage = (mikeFirstGame + mikeSecondGame + mikeThirdGame) / 3
console.log("Mikes team average score is " + mikeAverage);
maryAverage = (maryFirstGame + marySecondGame + maryThirdGame) / 3
console.log("Marys team average score is " + maryAverage);

if (johnAverage > mikeAverage){
    console.log("John wins against Mike with a average with a score of " + johnAverage);
} else if (mikeAverage > johnAverage){
    console.log("Mike wins against John with a average score of " + mikeAverage);
} else {
    console.log("its a tie with both Mike and John on " + johnAverage);
}

if (maryAverage > mikeAverage && maryAverage > johnAverage){
    console.log("Mary wins in average with a score of " + maryAverage);
} else if (mikeAverage > maryAverage && mikeAverage > johnAverage){
    console.log("Mike wins in average with a score of " + mikeAverage);
} else if (johnAverage > maryAverage && johnAverage > mikeAverage){
    console.log("John wins in average with a score of " + johnAverage);
} else {
    console.log("Its a tie with Johns average score being " +johnAverage + " and marys average score being " + maryAverage + " and mikes average score being " + mikeAverage);
}

