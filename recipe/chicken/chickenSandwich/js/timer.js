// this tracks how long the user has been on the page, in intervals of 1 min
var UserTimeSpent = setInterval(myTimer, 1000);

 
 function myTimer () {

 var chickenSandwichPageSession = Cookies.get('chickenSandwichUserSession');
         //if else statement. if no cookie with the name chickenSandwichPageSession is found, chickenSandwichPageSession is equal to 1,
         if (!chickenSandwichPageSession) {
           //the value for the new cookie;
          chickenSandwichPageSession = 1;
           
     
         }
         // else, if there is a cookie named chickenSandwichPageSession, increase its value by 1
         else {
           //increase the value of chickenSandwichPageSession by 1
          chickenSandwichPageSession = parseInt(chickenSandwichPageSession) + 1;
           
         }
          //set the new cookie with the name visitor, and the incrementing value, with the expiration date. the expiration date will keep increasing with each visit if visited within the expiration date.
          Cookies.set("chickenSandwichUserSession",chickenSandwichPageSession, {
           expires: 7
         });
        }