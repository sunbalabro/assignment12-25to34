// Chapter no 26to30

// Q no 1

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userValue = +prompt("Enter a positive decimal integer");
// var roundValue = Math.round(userValue);
// var floorValue = Math.floor(userValue);
// var ceilValue = Math.ceil(userValue);

// document.write("number : " + userValue + "<br />");
// document.write("round off value : " + roundValue + "<br />");
// document.write("floor value : " + floorValue + "<br />");
// document.write("ceil value : " + ceilValue + "<br />");

// Q no 2

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userValue = +prompt("Enter a negative decimal integer");
// var roundValue = Math.round(userValue);
// var floorValue = Math.floor(userValue);
// var ceilValue = Math.ceil(userValue);

// document.write("number : " + userValue + "<br />");
// document.write("round off value : " + roundValue + "<br />");
// document.write("floor value : " + floorValue + "<br />");
// document.write("ceil value : " + ceilValue + "<br />");

// Q no 3

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var userNum = +prompt("Enter an integer to show absolute value");
// var absValue = Math.abs(userNum);

// document.write("The absolute value of " + userNum + " is " + absValue);

// Q no 4

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// document.write(`random dice value: ${Math.floor(Math.random()*(1-6)+6)} <br> random dice value: ${Math.floor(Math.random()*(1-6)+6)}`);

// Q no 5

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var number = Math.floor(Math.random()*9);
// if (number==2) {
//        document.write("<h2>random coin value : Heads")
// } else if(number==1){
//     document.write("random coin value : Tails</h2>")
// }

// Q no 6

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

//var a = Math.floor(Math.random()*100);
//document.write(a);

// Q no 7

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//var weight = prompt("Enter your weight in kilograms");
//document.write("The weight of user is" + weight );

// Q no 8

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNum = Math.floor(Math.random()*11);
// var userValue = prompt("Try this game","Write your lucky number");
// if(userValue == secretNum){
//     alert("Congratulation  " + "\n" + "You have won the game");
// }else{
//     alert("Try again" + "\n" + "You were very close");
// }

/////////////  Chapter no 31to34  /////////////

// Q no 1

// 1. Write a program that displays current date and time in
// your browser.

// var date = new Date();
// document.write(date);

// // Q no 2

// // 2. Write a program that alerts the current month in words.
// For example December.

// var monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August","September", "October","November","December"];
// var today = new Date();
// var theMonth = today.getMonth();
// var nameOfToday = monthNames[theMonth];

// alert ("Current Month is " + nameOfToday);

// Q no 3

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//var now = new Date();
//var theDay = now.getDay();
//var nameOfToday = dayNames[theDay];

//alert ("Today is " + nameOfToday);

// Q no 4

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday=="Sunday"){
//   alert("It's Fun day");
// }
//  else if(nameOfToday==="Saturday"){
//   alert("It's Fun day");
// }else{
//   alert("Today is " + nameOfToday);
// }

// Q no 5

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var now = new Date();
// var theDay = now.getDate();
// if (theDay < 16){
//   alert("First fifteen days of the month ");
// } else {
//   alert("Last days of the month");
// }

// Q no 6

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var time = date.getTime();
// var min = time/1000*60;
// document.write("Current date : " + date + "<br>");
// document.write("Elapsed milisecond since  January 1, 1970 : " + time + "<br>");
// document.write("Elapsed minutes  since January 1, 1970 :" + min);
 
// Q no 7

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hour = date.getHours();
// if (hour < "12") {
//  alert("It's A.M")
// } else {
//   alert("It's P.m")
// }

// Q no 8

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var lastDay = new Date("December 31, 2020 00:00:00");
// document.write( "Later date : "  + lastDay);

// Q no 9

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var today = new Date().getTime();
// var ramdan = new Date("6/18/2015").getTime();
// var msDiff = today - ramdan;
// var dDiff = msDiff/ (1000*60*60*24);
// var newdDiff = Math.floor(dDiff);
// document.write(newdDiff + "  days have passed since 1st Ramdan 2015");


// Q no 10 

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var date1 = new Date ("12/5/2015 22:50:16 ").getTime();
// var date2 = new Date ("1/1/2015").getTime();
// var smDiff = date1-date2;
// var dDiff = Math.floor((smDiff/1000)/60) ;
// document.write( "On reference date Sat Dec 05 2015 22:50:16 GMT+0500(PKT),<br>" );
// document.write(dDiff + "seconds had passed  since  begining of 2015<br>");


// Q no 11

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


//  var date1 = new Date ("12/05/2015 23:09:37");
//  var date2 = new Date ("12/05/2015 23:09:37");
//  var date = Math.floor((date1-da)/1000/60/60);
//  document.write("current date : " + date1 + "<br>");
//  document.write(date + " hour ago, it was " + date1);


// Q no 12

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var date1 = new Date ("12/05/2015 23:09:37");
// var date2 = new Date("12/05/1915 23:09:37");
// var date = Math.floor((date1-date2)/1000/60/60/24/365);
// document.write("current date : " + date1 + "<br>");
// document.write(date + " years back, it was " + date2);

// Q no 13

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser

// var date1 = prompt("Enter your birth date");
//  var date2 = new Date().getFullYear() -date1;
//  document.write("Your age is : " + date1 + "<br>");
//  document.write( " Your birth year is  : " + date2);

// Q no 14

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var customerName = "ABC Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var month = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var grossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${month}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>Gross Amount Payable (after Due Date): <b>${grossAmount}</b><br>`)
