var valueFormat = "Dezimal";

window.onscroll = function() {scrollFunction()};

window.onclick = function(event) {
  if (!event.target.matches('.DropButton')) {
    var dropdownitems = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdownitems.length; i++) {
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

function setValueFormat(typ){
	valueFormat = typ;
	document.getElementById("dropButton").textContent = "Art des Wertes: " + valueFormat;
}

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


function converterCharToASCII(inText /*value of textarea passed by value*/, outText /*must hand over as object -> passed by reference*/) {
	if (!inText || 0 === inText.length) {
		window.alert("Bitte geben Sie einen Text in das 'Text-Feld' ein!");
		return;
	}
	
	// tokenized the input string
	var charArray = inText.split('');
	var resultString = ""; // pre-initialize as empty string
	
	for (var i = 0; i < inText.length; i++) {
		var key = charArray[i];
		if (key === '\n') {
			key = "RETURN";
		}
		var temp = CharToAsciiDecimalTable[key];
		/*format temp to hex if valueFormat is Hexadezimal*/
		if (valueFormat == "Hexadezimal"){
			temp = temp.toString(16); 
		}
		
		if (temp) {
			resultString += ((i > 0)? " " : "") + temp.toString();
		}
	}
	
	outText.innerHTML = resultString;
	outText.value = resultString;
}

function converterASCIIToChar(inText /*value of textarea passed by value*/, outText /*must hand over as object -> passed by reference*/) {
	if (!inText || 0 === inText.length) {
		window.alert("Bitte geben Sie einen Text in das 'ASCII-Code Feld' ein!");
		return;
	}
	
	var NumArray = inText.split(' ');
	var resultString = "";
	
	for (var i = 0; i < inText.length; i++){
		var temp = "";
		
		/*format temp to Dezimal if valueFormat is Dezimal else Hexadezimal => needs to be adjusted!!!*/ 
		if (valueFormat == "Hexadezimal"){
			temp = AsciiDecimalToCharTable[parseInt(NumArray[i], 16)];
		}else{
			temp = AsciiDecimalToCharTable[NumArray[i]];
		}
			
		if (temp) {
			resultString += temp.toString();
		}
	}
	outText.innerHTML = resultString;
	outText.value = resultString;
}

var  CharToAsciiDecimalTable = {
	"	" : 9,
	"RETURN" : 13,
	" " : 32,
	"!" : 33,
	"&quot" : 34,
	"#" : 35,
	"$" : 36,
	"%" : 37,
	"&amp" : 38,
	"&apos" : 39,
	"(" : 40,
	")" : 41,
	"*" : 42,
	"+" : 43,
	"," : 44,
	"-" : 45,
	"." : 46,
	"/" : 47,
	"0" : 48,
	"1" : 49,
	"2" : 50,
	"3" : 51,
	"4" : 52,
	"5" : 53,
	"6" : 54,
	"7" : 55,
	"8" : 56,
	"9" : 57,
	":" : 58,
	";" : 59,
	"&lt" : 60,
	"=" : 61,
	"&gt" : 62,
	"?" : 63,
	"@" : 64,
	"A" : 65,
	"B" : 66,
	"C" : 67,
	"D" : 68,
	"E" : 69,
	"F" : 70,
	"G" : 71,
	"H" : 72,
	"I" : 73,
	"J" : 74,
	"K" : 75,
	"L" : 76,
	"M" : 77,
	"N" : 78,
	"O" : 79,
	"P" : 80,
	"Q" : 81,
	"R" : 82,
	"S" : 83,
	"T" : 84,
	"U" : 85,
	"V" : 86,
	"W" : 87,
	"X" : 88,
	"Y" : 89,
	"Z" : 90,
	"[" : 91,
	"\\" : 92,
	"]" : 93,
	"^" : 94,
	"_" : 95,
	"`" : 96,
	"a" : 97,
	"b" : 98,
	"c" : 99,
	"d" : 100,
	"e" : 101,
	"f" : 102,
	"g" : 103,
	"h" : 104,
	"i" : 105,
	"j" : 106,
	"k" : 107,
	"l" : 108,
	"m" : 109,
	"n" : 110,
	"o" : 111,
	"p" : 112,
	"q" : 113,
	"r" : 114,
	"s" : 115,
	"t" : 116,
	"u" : 117,
	"v" : 118,
	"w" : 119,
	"x" : 120,
	"y" : 121,
	"z" : 122,
	"{" : 123,
	"|" : 124,
	"}" : 125,
	"~" : 126
}

var AsciiDecimalToCharTable = {
	9 : "	",
	32 : " ",
	33 : "!",
	34 : "&quot",
	35 : "#",
	36 : "$",
	37 : "%",
	38 : "&amp",
	39 : "&apos",
	40 : "(",
	41 : ")",
	42 : "*",
	43 : "+",
	44 : ",",
	45 : "-",
	46 : ".",
	47 : "/",
	48 : "0",
	49 : "1",
	50 : "2",
	51 : "3",
	52 : "4",
	53 : "5",
	54 : "6",
	55 : "7",
	56 : "8",
	57 : "9",
	58 : ":",
	59 : ";",
	60 : "&lt",
	61 : "=",
	62 : "&gt",
	63 : "?",
	64 : "@",
	65 : "A",
	66 : "B",
	67 : "C",
	68 : "D",
	69 : "E",
	70 : "F",
	71 : "G",
	72 : "H",
	73 : "I",
	74 : "J",
	75 : "K",
	76 : "L",
	77 : "M",
	78 : "N",
	79 : "O",
	80 : "P",
	81 : "Q",
	82 : "R",
	83 : "S",
	84 : "T",
	85 : "U",
	86 : "V",
	87 : "W",
	88 : "X",
	89 : "Y",
	90 : "Z",
	91 : "[",
	92 : "\\",
	93 : "]",
	94 : "^",
	95 : "_",
	96 : "`",
	97 : "a",
	98 : "b",
	99 : "c",
	100 : "d",
	101 : "e",
	102 : "f",
	103 : "g",
	104 : "h",
	105 : "i",
	106 : "j",
	107 : "k",
	108 : "l",
	109 : "m",
	110 : "n",
	111 : "o",
	112 : "p",
	113 : "q",
	114 : "r",
	115 : "s",
	116 : "t",
	117 : "u",
	118 : "v",
	119 : "w",
	120 : "x",
	121 : "y",
	122 : "z",
	123 : "{",
	124 : "|",
	125 : "}",
	126 : "~"
}