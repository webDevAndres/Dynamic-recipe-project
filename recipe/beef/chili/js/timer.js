// this tracks how long the user has been on the page, in intervals of 1 min
var UserTimeSpent = setInterval(myTimer, 60000);
var timeSpentOnChiliPage = [];
var sum = 0;

 function myTimer () {

 var chiliPageSession = Cookies.get('chiliUserSession');
         //if else statement. if no cookie with the name chiliPageSession is found, chiliPageSession is equal to 1,
         if (!chiliPageSession) {
           //the value for the new cookie;
          chiliPageSession = 0;
         }
         // else, if there is a cookie named chiliPageSession, increase its value by 1
         else {
           //increase the value of chiliPageSession by 1
          var chiliPageSession = parseInt(chiliPageSession) + 1;
          timeSpentOnChiliPage.push(parseInt(chiliPageSession));
           sum += timeSpentOnChiliPage.length;
         var average = (sum / timeSpentOnChiliPage.length);
         alert(timeSpentOnChiliPage);
         alert(sum);
         alert(average);
         }
          //set the new cookie with the name visitor, and the incrementing value, with the expiration date. the expiration date will keep increasing with each visit if visited within the expiration date.
          Cookies.set("chiliUserSession",chiliPageSession, {
           expires: 7
         });
        }