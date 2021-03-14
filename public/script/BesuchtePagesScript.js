/** cookie ca: {page1 = num1; page2 = num2; ...}
  *
  * cookiearray = allcookies.split(';');
  * 0 = mainpage, 1=morse, 2=caesar, 3=vigenere, 4=ascii, 5=polybius
  var sites = 
  [ 
    "morse",
    "caesar",
    "vigenere",
    "ascii",
    "polybius"
  ]
  *
  * get most visited page from cookie
  * for(var i=0; i<cookiearray.length; i++) {
    if (cookiearray[i] > currentMax){
     currentMax = cookiearray[i];
     pageName = sites[i];
      
    name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        //document.write ("Key is : " + name + " and Value is : " + value); 
    }
    }
  *
  *
  **/

function setCookie(page) {
  
  // create the cookie if none exist
  if (document.cookie === undefined) {
    document.cookie = page + "=0;expires=99999999999;path=/";
  }

  var cookiearray = document.cookie.split(';');
  var exists = false;
  
  for (var i=0; i < cookiearray.length; i++) {
    var pageName = cookiearray[i].substring(0, cookiearray[i].indexOf("=")).trim();
    
    if (pageName === page) {
      var currentValue = parseInt(cookiearray[i].substring(cookiearray[i].indexOf("=") + 1));
      currentValue += 1;
      document.cookie = page + "=" + currentValue.toString() + ";expires=99999999999;path=/";
      exists = true;
      break;
    }
  }
  
  if (!exists) {
    document.cookie = page + "=1;expires=99999999999;path=/";
  }
}

function getCookie() {
  
  if (document.cookie !== undefined) {
    var cookiearray = document.cookie.split(';');
    var currentMax = 0;
    var checkValue = 0;
    var pagesName = "";
  
    for (var i=0; i < cookiearray.length; i++) {
      checkValue = parseInt(cookiearray[i].substring(cookiearray[i].indexOf("=") + 1));
      
      if (checkValue > currentMax) {
        currentMax = checkValue;
        pagesName = "'" + cookiearray[i].substring(0, cookiearray[i].indexOf("=")).trim() + "'";
      }
      else if (checkValue == currentMax) {
        pagesName += " &amp; " + "'" + cookiearray[i].substring(0, cookiearray[i].indexOf("=")).trim() + "'";
      }
    }
 
    if (currentMax != 0) {
      // FIXME: only write in a text field or I don't know
      document.getElementById("mostVisitedPages").innerHTML = "Most visited Page: " + pagesName + " with " + currentMax + " visits" ;
    }
  }
}