window.onclick = function(event) {
  if (!event.target.matches('.DropButton')) {
    var dropdownitems = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdownitems.length; i++) {
      var openDropdown = dropdownitems[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }  
}

function showDropdown(){
	document.getElementById("MydropdownContent").classList.toggle("show");
}