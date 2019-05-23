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

/*

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
*/

/**************
 * FUNCTIONS
 */

 // passing an argument into a function called calculateAge and returning a value. Now we need that value to be store somewhere so we define that below with ageJohn ageMike and ageJane.
 /*
 function calculateAge(birthYear){
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

//we create a function here with 2 arguments to pass through.
 function yearsUntilRetirement(year, firstName){
    //we call upon the function calcualteAge with the year argument passed through and storing it in the age variable. 
    var age = calculateAge(year);
    //the retirement variable simply calcualtes retirement based on retiremement age of 65
     var retirement = 65 - age;
     if (retirement > 0) {
     console.log(firstName + " retires in " + retirement + " years.");}
     else {
         console.log(firstName + " has already retired.");
     }
     //no return here since we dont need it to return anything outside of this function.
 }

 //we call upon the yearsUntilRetirement function from here.
 yearsUntilRetirement(1990, "John");
 yearsUntilRetirement(1948, "Mike");
 yearsUntilRetirement(1969, "Jane");

 /**
  * 
  * Function Statements and Expressions
  * 
  */

  //function declaration
  /*
  function whatDoYouDo(job, firstName){

  }
*/
  //Function expression
/*
  var whatDoYouDo = function(job, firstName){
    switch(job){
        case "Teacher":
            return firstName + " teaches kids how to code";
        case "Driver":
            return firstName + " Drives a cab in Lisbon."
        case "Designer":
            return firstName + " designs beautiful websites";
        default:
            return firstname + " does something else";
    }
  }

  console.log(whatDoYouDo("Teacher", "John"));
  console.log(whatDoYouDo("Designer", "Mary"));
  console.log(whatDoYouDo("Driver", "Kane"));
  */

  /**
   * 
   * ***********ARRAYS**********
   * 
   */
/*
   //one way of calling an array (and the most popular way) is
   var names = ["John", "Mark", "Jane"];
   // another way of calling an array is
   var years = new Array(1990, 1969, 1948);

   console.log(names);
   console.log(names.length);

   //mutate array data
   names[1] = "Ben";
   names[names.length] = "Mary";
   console.log(names);

   // different data types

var john = ["John", "Smith", 1990, "designer", false];

//below pushes value of Blue to the end of the john array
john.push("Blue");
//below places the var Mr to the beginning of the array
john.unshift("Mr");
console.log(john);

//below deletes an array from the end
john.pop();
john.pop();
//below deteles an array from the beginning.
john.shift();
console.log(john);

//the indexof method reveals the position of an array.
console.log(john.indexOf(1990));

// -1 will be shown if a value searched for (using the indexOf method) is not in the array. we can tehn simply say that if the value is -1 then john is not a designer. 
// var test = john.indexOf("nice") === -1 ? "something" : "something else"
var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John is a designer";

console.log(isDesigner);
*/
/**
 John and his family went on a holiday and went to 3 different restaurants. the bills were £124, £48, and £268.

 to tip the waiter a fair amount, John created a simple tip calcualter (as a function). he likes to tip 20% of the bill when the bill is less than £50, 15% when the bill is between £50 and £200, and 10% if the bill is more than £200.

 in the end, John would like to have 2 arryas:
 1) containing all three tips (one for each bill)
 2) containing all three final paid amounts (bill + tip).

 (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

 GOOD LUCK :)

 */

var bills = [124, 48, 268];

console.log("the bills for the 3 restaurants are \n "+"£" + bills[0],"£" + bills[1],"£" + bills[2]);

function tipCalculator(bill){
    var percentage;
    if(bill <= 50){
        percentage = 0.2;
    } else  if (bill > 50 && bill <= 200){
        percentage = 0.15
    } else if (bill > 200){
        percentage = 0.10;
    }
    var tipOwed = bill * percentage;
    var fullAmountOwed = tipOwed + bill;
    return fullAmountOwed;
}

var firstBillFull = tipCalculator(bills[0]);
var secondBillFull = tipCalculator(bills[1]);
var thirdBillFull = tipCalculator(bills[2]);

var fullAmountArray = [firstBillFull, secondBillFull, thirdBillFull];
console.log("the bills for the 3 restaurants with tips are \n "+ "£" + fullAmountArray[0],"£" + fullAmountArray[1],"£" + fullAmountArray[2]);















