/*
  Name: Roulette Hack
  Copyright: Nope! Nur für dich :)
  Author: CrazyCrafters
  Date: 01/12/15 15:23
  Description: Score Hack for Roulette
*/
function modinst () {
	document.getElementById("modinstalled").value="Hacks für SN130"
	document.getElementById("moddescription").value="HackThisF**kingGame"
	document.getElementById("mod1").value="Roulette Highscore Name"
	document.getElementById("mod2").value="Roulette Highscore Score"
	document.getElementById("mod3").value="ModName3"
}
function mod1 () {
	var udbafg60030=window.prompt ("Highscore durch welchen Namen ersetzen?")
	window.localStorage.setItem("roulhighname",udbafg60030)
}
function mod2 () {
	alert ("Highscore auf wie viel setzen?","<input type=number value=1 id=highhack></input><button onclick='setvalue()'>Setzen</button>")
}
function mod3 () {
	//Programmcode Mod3
}
function setvalue() {
	var giggity=document.getElementById('highhack').value;
	window.localStorage.setItem('roulhigh',giggity)
}
