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

// this is a simple test to see how this syncs with the rest of my code.

//lets make another frther change to this and sync it to github.

