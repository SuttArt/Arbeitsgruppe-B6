window.onscroll = function() {scrollFunction()};

/* Scolls Header with the page a little*/
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("TopBar").style.padding = "1px 2px";
	document.getElementById("TopBar").style.fontSize = "20px";
  } else {
    document.getElementById("TopBar").style.padding = "10px 10px";
	document.getElementById("TopBar").style.fontSize = "30px";
  }
}