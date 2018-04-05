         // this tracks how long the user has been on the page, in intervals of 1 min
         var UserTimeSpent = setInterval(myTimer, 60000);
         
          
          function myTimer () {
         
          var chickenBrocPageSession = Cookies.get('chickenBrocUserSession');
                  //if else statement. if no cookie with the name chickenBrocPageSession is found, chickenBrocPageSession is equal to 1,
                  if (!chickenBrocPageSession) {
                    //the value for the new cookie;
                   chickenBrocPageSession = 1;
                    
              
                  }
                  // else, if there is a cookie named chickenBrocPageSession, increase its value by 1
                  else {
                    //increase the value of chickenBrocPageSession by 1
                   chickenBrocPageSession = parseInt(chickenBrocPageSession) + 1;
                    
                  }
                   //set the new cookie with the name visitor, and the incrementing value, with the expiration date. the expiration date will keep increasing with each visit if visited within the expiration date.
                   Cookies.set("chickenBrocUserSession",chickenBrocPageSession, {
                    expires: 7
                  });
                 }