var nickname,spk=0,geld=0,lock=0,icon=1,cam=0,setcustomColor="black",px=100,py=100,posfixed=false;
var bg=Math.random(),capslock=false;
document.addEventListener("keydown", keywatchermin);
//{keycodes:{BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,DELETE:46}
if (window.navigator.msPointerEnabled) {
    //Internet Explorer 10 style
    this.eventTouchstart    = "MSPointerDown";
    this.eventTouchmove     = "MSPointerMove";
    this.eventTouchend      = "MSPointerUp";
  } else {
    this.eventTouchstart    = "touchstart";
    this.eventTouchmove     = "touchmove";
    this.eventTouchend      = "touchend";
  }

function keywatchermin(event) {
    var modifiers = event.ctrlKey&&event.shiftKey
    if (modifiers) {
      if (event.which == 32){
		  document.getElementById("trac").style.position="fixed";
		  document.getElementById("trac").style.bottom=px;
		  document.getElementById("trac").style.left=py; /*Wenn du jetzt informiert bist, hast du ein secret gefunden!*/ 
    }}
else{
	if (event.which == 27) home_menu()
	if (event.which == 38) move('up')
	if (event.which == 37) move('left')
	if (event.which == 39) move('right')
	if (event.which == 40) move('down')
	if (event.which == 46) delstate()
	if (event.which == 20) {
		if (capslock==false) {
			document.getElementById("nav").play()
			capslock=true
		}
		else if (capslock==true){
			document.getElementById("aus").play()
			capslock=false
		}
	}
	}}
  function move(direct) {
	  if(direct=="up") px+=1
	  if(direct=="left") py-=1
	  if(direct=="down") px-=1
	  if(direct=="right") py+=1
	  if(px==-1) px=0
	  if(py==-1) py=0
	  document.getElementById("trac").style.bottom=px
	  document.getElementById("trac").style.left=py
  }
  function delstate() {
	var confir=confirm("Willst du alle deine Spielstände, Highscores, deinen Nicknamen und deinen Kommentar löschen?")
	if (confir==true) {
		window.localStorage.clear()
		alert ("Fertig!","Storage geclearet!")
		window.location.reload
	}
  }
function lsdmod() {
		document.getElementById("drink").src="icons/drink_empty.png"
		document.getElementById("flimmer").background='img/c6dfa22150790c670c988c5196f6ba0e.gif'
}
	function nicknames() {
		nickname=prompt ("Bitte gib einen Nicknamen ein:")
		alert ("Willkommen, "+nickname+"!")
		window.localStorage.setItem("nickname",nickname)
	}
	function camera() {
		window.document.writeln('<head><title>Kamera</title></head><body background="img/background.jpg"><image title="Klick mich" id=cam src="icons/Leica-Off.ico" onclick="clicker()"></image>')
	}
	
	function chat() { var chat=document.getElementById("chatmessage").value; console.log("<"+nickname+">:"+chat); document.getElementById("chatmessage").value=""; document.getElementById("chatupdate").value="<"+nickname+">:"+chat}
	function userinfo() {
		minimize()
		document.getElementById("home_menu").style.display="none"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";document.getElementById("loading_screen2").style.display="none"
		document.getElementById("loading_screen").style.display="none"
		document.getElementById("SN_shop").style.display="none"
		document.getElementById("player_box").style.display="none"
		document.getElementById("profile_info").style.display="block"
	}
	function clicker() {
		if (cam==0) {
			document.getElementById('cam').src="icons/Leica-Active.ico"
			cam=1
		}
		else{
			document.getElementById('cam').src="icons/Leica-Off.ico"
			cam=0
		}
	}
	function storage() {
		
		var firststart=window.localStorage.getItem("firststart")
		if (firststart!=0) {
			window.document.write("<a href='FirstStart.html'>Hier klicken</a>")
		}
		bg*=6
		bg=Math.ceil(bg)
		//alert ("Moin!","Willkommen,lieber Beta-Tester!<img src='icons/emoticon_wink.png'>",{button_title:"Hallo zurück!"})
		nickname=window.localStorage.getItem("nickname")
		document.getElementById("flimmer").background="img/background.jpg"
		document.getElementById("headermini").style.display="none"
		document.getElementById("home_menu").style.display="none"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";
		document.getElementById("loading_screen").style.display="none"
		document.getElementById('begr').value=nickname
		lock=window.localStorage.getItem("locked")
		console.log("Willkommen "+nickname+" auf der Script Nation!Da du die Konsole geöffnet hast,denke ich, du willst wieder hacken? ;D");
		var test=false;
		console.info("Wusstest du, dass es ein Secret auf der Seite gibt? Versuche es zu finden!")
		console.info("Um die Konsole zu clearen, tippe: console.clear()")
		icon=window.localStorage.getItem("usericon")
		document.getElementById('usericon').src="icons/user"+icon+".png"
		test=window.localStorage.getItem("custompass")
		if (test==false) {
			window.localStorage.setItem("passwort",1234)
		}
		if (lock==1) {
			lockingthispage()
		}
		if(navigator.appName!="Netscape") {
			alert ("Du scheinst kein <a href='https://www.google.com/chrome'>Google Chrome</a> zu benutzen!","Es gibt einige Elemente, die nur in <a href='https://www.google.com/chrome'>Chrome</a> functionieren oder besser aussehen!")
		}
		var id=setTimeout("document.getElementById('audiofile').play();home_menu()",5000)
	}
	function no_redirect() {
		var win=window.open("","","width=250,height=130");
		win.document.open("text/html");
		win.document.writeln('<html><head><link href="alert.css" rel="stylesheet" media="screen" /><title>Settings</title></head><body background="img/background.jpg"><script src="alert.js"></script><script src="games.js"></script></head><title>Script Nation v1.30(Alpha)</title><meta charset=utf-8><link rel="shortcut icon" type="image/x-icon" href="icons/ruby.png" /> <link href="alert.css" rel="stylesheet" type="text/css" media="screen" /> <meta name="version" content="1.29"><meta name="author" content="hallihallo"><meta name="description" content="Just for fun"> <style type="text/css"> body,html{ 		cursor:pointer 	} 	@-webkit-keyframes anim { 		0%   { -webkit-transform: rotate(0deg);} 		100% { -webkit-transform: rotate(-100000deg);} 	} 	@-webkit-keyframes headtest { 		0%   { -webkit-transform: rotate(0deg);font-size:0px;opacity:0 } 		100% { -webkit-transform: rotate(360deg);font-size:105px;opacity:1 } 	} 	@-webkit-keyframes scaleIn { 		0%   { height:0%;width:0% } 		100% { height:579px;width:1028px } 	} 	@-webkit-keyframes fadeOut { 		0%   { opacity:1 } 		100% { opacity:0 } 	} 	@-webkit-keyframes fadeIn { 		0%   { opacity:0 } 		100% { opacity:1 } 	} 	.headline { 		-webkit-animation: headtest 1s cubic-bezier(0, 0.53, 0, 0.77) 	} 	.ani{ 		background: transparent; 		-webkit-animation: anim 600s linear infinite; 	} 	.display { 		background:transparent; 		border-width:0px; 		padding:0px; 		margin:0px; 		border:0px; 		top:1px 	} </style> <link rel="stylesheet" href="css/style.css"> </head> <body onerror="fehlerimscript()" background="img/background.jpg" onload="storage()" style="-webkit-animation: fadeIn 3s linear;margin-left:0px;margin-right:0px" id=flimmer><a name="oben"></a> <!--Header--><section height="78px" style="-webkit-animation: fadeIn 0.5s linear;box-shadow: 40px 0px 40px rgba(0,0,0,10);display:none;bottom:0px;position:fixed;height:75px; background-color:gray ;color: #ffffff;overflow:hidden;top:0px;width:100%;font-family:Segoe UI Light;color:black"id=headers><!--<input type=button style="text-align:left;width:700px;border-width:0px;background:gray;font-family:Segoe UI Light;font-size:49px" id=begr value=""></input>--><input type=button style="text-align:top;font-family:QuiverItal;background:#0000FF;color:#bbbbFF;border-width:2px;border-type:solid;border-color:black;width:290px" id=playerdisplay onclick="vergroessern()" value="WILLKOMMEN ZU SCRIPT NATION!"></input><image onclick="previous()" onmouseout="document.getElementById("prev").src="player/previous.png"" onmouseover="document.getElementById("prev").src="player/previous_blue.png""id=prev src="player/previous.png"></image><image id=playbutton onmouseout="mouseoutplay()" onmouseover="mouseonplay()" src="player/control_play.png" onclick="toggleplayer()"></image><image onclick="skip()"onmouseout="document.getElementById("next").src="player/next.png"" onmouseover="document.getElementById("next").src="player/next_blue.png"" id=next src="player/next.png"></image><img onclick="loopmedia()" src="player/control_repeat.png" id=repeat></img><image id=voldisp onclick="mute()" src="player/sound.png"></image><input onchange="vol()" onclick="vol()" type="range" value=100 id=volume></input><video onended="skip()" src="media/Script Nation Video.mp4" height=60px id=musicvideo width=100></video><img id=statusicon src="icons/status/1.png"></img><select style="font-family:Segoe UI Light;" value="" onchange="changing=1;changestatus()" id=status><option value="1">Anwesend</option><option value="2">Abwesend</option><option value="3">Beschäftigt</option><option value="4">Offline(Unsichtbar)</option></select><input id=chatmessage placeholder="Chat Nachricht eingeben..."></input><button onclick="chat()">Senden</button><img align="right" height=64px width=64px onclick="schliesen()"src="img/power-black.svg"></img><img align="right" height=64px width=64px onclick="home_menu()"src="icons/svg/home-black.svg"></img><image align="right" onclick="reload()" id=reloadicon src="icons/icon_restart.png"></image><image align="right" onclick="einstellungen()" height=64px src="icons/svg/gear-black.svg"></image><image onclick="users()" align="right" src="icons/icon_theteam.png"></image><image onclick="sidebartoggle()" align="right" id=bullets width=64px height=64px src="icons/svg/bullets-black.svg"></image><image onclick="bgsitechange()" align="right" id="contrast" src="icons/lightbulb_off.png"></image><image align="right" onclick="print()"src="icons/printer.png"></image><image align=right src="icons/lock.png" onclick="sperren()"></image><image align=right src="icons/font.png" onclick="schriftwechseln()"></image><image id=drink align=right src="icons/drink.png" onclick="lsdmod()"></image><image align=right src="icons/application_get.png" onclick="minimize()"></section></br></br> <!--Header-Mini--><section style="-webkit-animation: fadeIn 0.5s linear;top:0px;display:none;bottom:auto;position:fixed;height:20px; background-color:gray ;color: #ffffff;overflow:hidden;width:100%;font-family:Segoe UI Light;color:black"id=headermini><image onclick="previous()" onmouseout="document.getElementById("prev").src="player/previous.png"" onmouseover="document.getElementById("prev").src="player/previous_blue.png""id=prev src="player/previous.png"></image><image id=playbutton onmouseout="mouseoutplay()" onmouseover="mouseonplay()" src="player/control_play.png" onclick="toggleplayer()"></image><image onclick="skip()"onmouseout="document.getElementById("next").src="player/next.png"" onmouseover="document.getElementById("next").src="player/next_blue.png"" id=next src="player/next.png"></image><video src="media/Script Nation Video.mp4" volume=0 height=20px id=musicvideo2 width=30></video><img id=statusicon2 src="icons/status/1.png"></img><input type=button class="display" id=chatupdate></input><img align="right" height=20px width=20px onclick="schliesen()"src="img/power-black.svg"></img><img align="right" height=20px width=20px onclick="home_menu()"src="icons/svg/home-black.svg"></img><image align="right" height=20px width=20px onclick="reload()"src="icons/icon_restart.png"></image><image align="right" height=20px width=20px onclick="einstellungen()" src="icons/icon_options.png"></image><image onclick="users()" height=20px width=20px align="right" src="icons/icon_theteam.png"><image onclick="bgsitechange()" align="right" id="contrast" src="icons/lightbulb_off.png"></image><image align="right" onclick="print()"src="icons/printer.png"></image><image align=right src="icons/lock.png" onclick="sperren()"></image><image align=right src="icons/font.png" onclick="schriftwechseln()"></image><image align=right src="icons/application_put.png" onclick="maximize()"></section> <!--Sidebar--><section id=sidebar style="box-shadow: 40px 0px 40px rgba(0,0,0,10);display:none;position:fixed;bottom:0px;left:0px;top:0px;right:auto;background:gray;color:black;width:20%"><font size=6px face="Segoe UI">   Script Nation v.1.30</br><hr /><form style="margin-bottom:0px;margin-top:0px" id=accountsidebar onmouseout="document.getElementById("accountsidebar").style.background="gray"" onclick="userwrite()" onmouseover="document.getElementById("accountsidebar").style.background="red""><hr />  <font size=4px face="Segoe UI"> <img src="icons/svg/user-black.svg"></img>Mein Account<hr /></font></form><form style="margin-bottom:0px;margin-top:0px" id=ranksidebar onmouseout="document.getElementById("ranksidebar").style.background="gray"" onclick="showach()" onmouseover="document.getElementById("ranksidebar").style.background="red""><hr />  <font size=4px face="Segoe UI"> <img src="icons/exclamation.png"></img>Letzte Meldungen<hr /></font></form><form style="margin-bottom:0px;margin-top:0px" id=google onmouseout="document.getElementById("google").style.background="gray"" onmouseover="document.getElementById("google").style.background="red""><hr />  <font size=4px face="Segoe UI"> <img height=16px width=16px src="icons/128.png"></img><input placeholder="Google-Suche " size=28 id=search><img onclick="googlesearch()" src="icons/svg/search-black.svg"></img></input><hr /></font></form><form style="margin-bottom:0px;margin-top:0px" id=set onmouseout="document.getElementById("set").style.background="gray"" onclick="einstellungen()" onmouseover="document.getElementById("set").style.background="red""><hr />  <font size=4px face="Segoe UI"> <img height=16px width=16px src="icons/cog.png"></img>Einstellungen<hr /></font></form><form style="margin-bottom:0px;margin-top:0px" id=mods  onmouseout="document.getElementById("mods").style.background="gray"" onclick="modinst();modui()" onmouseover="document.getElementById("mods").style.background="red""><hr />  <font size=4px face="Segoe UI"> <img height=16px width=16px src="icons/color_swatch.png"></img>Mods<hr /></font></form></section> <!--Meldungen--><section id=meldung style="display:none;position:fixed;bottom:auto;left:0px;top:0px;right:auto;background:red;color:black;width:20%;height:1px"><p id=fehler style="top:0px;margin-top:0px;font-size:20px;font-family:Arial Black;background:transparent;border-width:0px">Nothin over here</p></section> <!--Script--><script type="text/javascript" src="games.js"></script><script type="text/javascript" src="playlist.js"></script><script type="text/javascript" src="alert.js"></script><script type="text/javascript" src="mod.js"></script><script type="text/javascript" src="mediaplayer.js"></script> <a name=oben></a> <!--Audiofiles--><audio id=logout src="media/logout.wav"></audio><audio id="audiofile" src="media/Windows Unlock.wav"></audio><audio id="shutdown" src="media/shut.wav"></audio><audio id="nav" src="media/Spracheein.wav"></audio><audio id="aus" src="media/Spracheaus.wav"></audio> <section id=main_box style="display:none"> </br></br></br><center><font style="margin-top:10px" name=schrift class=font id=font color="#00FF00" face=Brandish size="7px"><h1 align="center" style="margin-top:0px;margin-bottom:5px;font-size:220%" class="headline">Script Nation</h1></font><font class=font id=ver color="#00FF00" face=Brandish size="7px"></br>v1.30(alpha)</font><font color="#FFFFFF" face="Segoe UI Light" size="7px"></br><font color="blue" face="Segoe UI Light" size="7px"></font></br></center> <marquee>Ꙩ͜Ꙩ</marquee><!--Falls du das wissen willst, das ist der nächste Smiley für das marquee(Der ändert sich nämlich jedes mal!):Ӂ #Targo_Bank--><!--😂😍🙆😅--> Optimized <small>for</small> <image class="left up ani" height="35px" width="35px"src="icons/Google Profile.ico"></br><font color="white" face="Segoe UI Light" size="4px"> <image src="icons/lock.png" onclick="sperren()">Sperren</image></br><image src="icons/font.png" onclick="schriftwechseln()">Schriftart wechseln</image></br><image onclick="print()"src="icons/printer.png">Drucken</image></br><image src="icons/application_put.png" onclick="maximize()"><image src="icons/application_get.png" onclick="minimize()">Header-Größe</image></br><img src="icons/svg/clock-black.svg" height=16px onclick="uhr()"></img>Uhr</br> <button onclick="alerttest()">Alert-Test</button>Eigene Musik im Media-player</button></br> Gefällt dir die Seite? <u></br> <a onclick="Mail()" style="color:blue;cursor:pointer">Lass es uns wissen!</a></u> <a href="mailto:CrazyCrafters@gmx.de"><image style="height:40px;width:40px" src="icons/svg/mail-black.svg"></image></a></br> Drücke F12 um das Script zu sehen.</br> Drücke F11 für Vollbild.</br> Drücke F5 zum neu laden.</br></font><font color="#0000FF" face="Segoe UI Light" size="3px"> <u><a onclick="system ()">Systemvoraussetzungen</a></br></u></font><font color="#FFFFFF" face="Segoe UI Light" size="2px"> </font></center><hr /> Scripte:</font></br><font size="6px" face="Segoe UI Light"> <a href="#roulette">Roulette</a></br> <a href="#coming">Coming Soon!</a></br></u> <hr size="30px" color="00FF00"></font> Tja,sieht so aus, als hätte Roulette das Würfel-Battle ganz schön weggefegt! <image src="icons/emoticon_wink.png"></image><a name="roulette"></a> <main><!--ROULETTE--> <font color="red" id=roul face="Brandish" size="7px"> <a name="roulette"></a><hr size="30px" color="00FF00"> <center><big><h1 ondblclick="real()">Roulette</h1></big> </font> <font color="blue" face="Tahoma" size="7px"> <u><button style="width:200px;border-radius:30px;cursor: pointer;background:black;color:white;height:40px;font-family:Segoe UI Light" onclick="roulette ()">Starten!</button></br> </font> <font color="white" face="Tahoma" size="12px"></u> Version 1.2.1</br> </font> <font color="white" face="Tahoma" size="5px"> Zum Beenden müssen alle PopUps geschlossen sein-</br> Dazu einfach Escape oder Enter gedrückt halten.</br></br> </font></center> <hr size="1px" color="white"/> <font color="red" face="Tahoma" size="7px"> ☺Roulette☺</br> </font> <font color="white" face="Segoe UI Light" size="5px"> ©2015 hallihallo</br> <font color="white" face="Segoe UI Light" size="2px"><hr size="30px" color="00FF00"></font> <font color="white" face="Segoe UI Light" size="5px"></br><font color="white" face="Segoe UI Light" size="2px"><font color="white" face="Segoe UI Light" size="2px"> <!--media  ☺Media Player☺</br> </font> <font color="white" face="Segoe UI Light" size="5px"> ©2015 hallihallo</br>--><!--Hab die Elemente im Js auch auskommentiert. Musste wieder reinmachen.--> <!--WEITERE--> <font color="FFFFFF" id=comsoon face="Hollywood Hills" size="7px"><a name="coming"></a> <center><h1>Coming Soon!</h1></font><font color="blue" face="Tahoma" size="7px"> <u><button style="border-radius:30px;cursor: pointer;background:blue;width:200px;height:40px;font-family:Arial Black" onclick="ifo ()">Infos?</button></br></font></u><font color="white" face="Tahoma" size="5px"> Zum Beenden müssen alle PopUps geschlossen sein-</br>Dazu einfach Escape oder Enter gedrückt halten.</br></br></font></center> <hr size="1px" color="white"/><font color="red" face="Tahoma" size="7px">☺Coming Soon!☺</br></font><font color="white" face="Segoe UI Light" size="5px">©2015 hallihallo</br> </br><a name=settings></a><hr size="30px" color="00FF00"></font></br> <center><image style="cursor:pointer;width:40px;height:40px" src="img/twitter-icon-circle.png" onclick="twitter ()"></image><image style="cursor:pointer;width:40px;height:40px" src="img/youtube.png" onclick="yt ()"></image><image style="cursor:pointer;width:40px;height:40px" src="img/google-plus-circle4.png" onclick="google ()"></image></br> <button onclick="dev ()">Entwickler</button><button onclick="asciiguy()">AsciiGuy</button><button onclick="vorschau()">Was dich in der nächsten Version erwartet</button></br><a href="#oben">Nach oben</a></main> </section><section style="position:fixed;bottom:0px;left:0px"><p align=right style="position:fixed;right:3px;bottom:0px"><font face="Segoe UI Light" size="5px"><img id=usericon src="" content="hi"></image><input type=button value="" id=begr style="font-family:Segoe UI Light;font-size:20px;color:white;background:transparent;border-width:0px"></input></br><font face="Segoe UI Light" size="3px">Angemeldet</section> <section id=roulette_box style="display:none"><center><font face="Brandish" color=red size=7px><h1><big>Roulette</big></h1></br><button style="width:200px;height:50px"onclick="real">Sofortspiel</button></br><font face="Segoe UI Light" color="white"></br></section> <section id=settings_box style="display:none"><font face="Segoe UI Light" size=50px><img src="icons/bullet_wrench.png" onclick="nicknames()">Nicknamen eingeben</img></br><img src="icons/application_get.png" onclick="mods ()">Mods installieren</img></br><img onclick="passw()"src="icons/lock_edit.png">Passwort ändern</img></br></br><image onclick="home_menu()" src="icons/icon_back.png"></br></section> <section id=useredit_box style="display:none"><head><title>Users</title><body background="img/background.jpg"><font face="Segoe UI Light" color="white" size="7px"><audio id="aus" src="media/Spracheaus.wav"></audio>Benutzerkontensteuerung(Nur Google Chrome)</br></br>Aktueller Benutzer:</br></font><font face="Segoe UI Light" color="white" size="5px"><image id=user_icon src="icons/user1.png"></image><input type=button id=nickname_edit style="font-size:20px;border-width:0px;color:white;font-family:Segoe UI Light;background:transparent"></input></br></font><p type=button id=comment_edit style="font-size:20px;border-width:0px;color:white;font-family:Segoe UI Light;background:transparent"></p></br></br><image onclick="useredit()"src="icons/svg/edit-black.svg" height=35px>User bearbeiten</image></br><image onclick="usercomment()" src="icons/svg/comment-black.svg" height=35px>Userkommentar eingeben</image></br></br></br><image onclick="home_menu()" src="icons/icon_back.png"></section> <section id=home_menu style="display:none"><head><title>HOME</title><body background="img/1.jpg"></br><img src="icons/svg/home-black.svg" height=50px width=50px></img>HOME</br><button onclick="script_nation()"style="font-size:50px;font-family:Segoe UI Light"><image src="img/icon_128.png" height=60px>Zur Seite</image></button></br><button onclick="player_big()"style="font-size:50px;font-family:Segoe UI Light"><image height=60px src="icons/svg/video-black.svg">MediaPlayer</image></button></br><button onclick="snshop()"style="font-size:50px;font-family:Segoe UI Light"><image height=60px src="icons/svg/shop-black.svg">Script Nation Shop</image></button></section> <section id=player_box style="display:none"><center><font color="blue" face="Tahoma" size="7px"><video style="-webkit-animation: scaleIn 1s linear;box-shadow: 20px 20px 40px rgba(0,0,0,10);margin-bottom:0px"src="media/Script Nation Video.mp4" height=579px id=musicvideo3 width=1028></video></br></br></bR><image onclick="previous()" src="player/previous.png"></image><image id=playbutton2 onmouseout="mouseoutplay()" onmouseover="mouseonplay()" src="player/control_play.png" onclick="toggleplayer()"></image><image onclick="skip()" src="player/next.png"></image></br><input type=button style="width400px" id=playerdisplay2 value="Willkommen zu Script Nation"></input></section> <section id=loading_screen style="display:none"><title>Laden Ihrer Daten...</title><link rel="shortcut icon" href="img/ajax-loader.gif" /><body background="img/mainmenu_loading_01.jpg"><center></br></br></br></br><div class="col-sm-2"><div class="sp sp-circle"></div></div></br><font color=white face="Segoe UI Light" size=7px>Herzlich Willkommen!</br><font face="Segoe UI Light" size=5px>Ihre Userdaten werden geladen...</section> <section id=loading_screen2 style="display:block"><font face="Brandish" color="green" size="7px"><h1><big><center>SCRIPT NATION</big></center></h1></font><font face="Segoe UI Light"><center>Willkommen</br><div class="col-sm-2"><div class="sp sp-circle"></div></div></br></font></center></section> <section id=modUI style="box-shadow: 20px 20px 40px rgba(0,0,0,10);background:white;position:fixed;top:30px;right:30px;left:30px;bottom:30px;display:none"><font color="black" face="Segoe UI Light" size=7px>Erkannte Mods<img align=right style="margin-top:3px;margin-right:3px" onclick="hidemodui()" src="icons/svg/delete-black.svg"></img></br></br><input style="font-size:30px;font-family:Segoe UI Light;background:transparent;border-width:0px;margin-left:5px" type=button id=modinstalled></input></br><input style="font-size:20px;font-family:Segoe UI Light;background:transparent;border-width:0px;margin-left:5px" type=button id=moddescription></input></br></bR></br>Enthaltene Mods:</br><input type=button id=mod1 onclick="mod1()"></input><input type=button  id=mod2 onclick="mod2()"></input><input type=button  id=mod3 onclick="mod3()"></input></section> <section id=SN_shop style="display:none"><font color="white" face="Segoe UI Light" size="7px"><img height=35px src="icons/svg/shop-black.svg"></img>SHOP</br></br>Neues</br><button style="font-size:20px;font-family:Segoe UI Light" onclick="window.open("http://www.mediafire.com/download/rpwfc4ablbmiewu/Script_Nation_1.26_Diamond_Edition.zip")">Zurück in die Vergangenheit: Die Script Nation v1.26</button></br><button style="font-size:20px;font-family:Segoe UI Light" </body> </html>')
	}
	function setcustomColor(col) {
		window.localStorage.setItem("favcolor",col)
		document.getElementById("setcustomColor").src="icons/profile/bullet_"+col+".png"
	}
	var wr=0
	function uhr() {
		var time=new Date(); 
		if(wr==0){document.write("<input id=zeit type=button class=display></input>");wr=1}
		document.getElementById("zeit").value=time
		var id=setTimeout("uhr()",100)
	}
	var font=0//0=SN Font-Pack 1=Normal
		function schriftwechseln() {
			if (font==0) {
				document.getElementById('font').face='Arial'
				document.getElementById('ver').face='Arial'
				font=1
			}
			else {
				document.getElementById('font').face='Brandish'
				document.getElementById('ver').face='Brandish'
				font=0
			}
		}
		function fehlerimscript() {
		 var a=Math.random()
		 var b=Math.random()
		 var c=Math.random()
		 a*=999
		 b*=999
		 c*=999
		 a=Math.ceil (a)
		 b=Math.ceil (b)
		 c=Math.ceil (c)

		document.getElementById("fehler").innerHTML="<image src='icons/script_error.png'></image>Es gibt wohl einen Fehler im Script.</br>Fehler-Code:"+a+"-"+b+"-"+c+"-0"
		 console.warn("Fehler-Code:"+a+"-"+b+"-"+c+"-0")
		 showach()
		 
		}
		function vorschau() {
			confirm ("Mehr Eigene Videos unabhängig vom Namen")
			confirm("Eine eigene Schriftart mit speziellen Zeichen")
			confirm("Und vieles mehr")
		}
	function passw() {
		var neupass=new Array("pass1","best")
		var altpass;
		var buffer;
		buffer=window.localStorage.getItem("passwort")
		altpass=prompt ("Altes Passwort eingeben")
		if (altpass==buffer) {
			neupass[0]=prompt ("Neues Passwort")
			neupass[1]=prompt ("Neues Passwort bestätigen")
			if (neupass[0]==neupass[1]) {
				alert ("Okay!","Dein neues Passwort ist eingerichtet.")
				window.localStorage.setItem("custompass",true)
				window.localStorage.setItem("passwort",neupass[1])
			}
			else {
				alert ("Die beiden neuen Passwörter stimmen nicht überein.","Versuche es erneut")
			}
		}
		else {
			alert ("Falsches Passwort","Versuche es erneut")
		}
	}
	function unlock() {
		var unltry;
		var buffer;
		buffer=window.localStorage.getItem("passwort")
		unltry=prompt ("Passwort?")
		if (buffer==unltry) {
			window.localStorage.setItem("locked",0)
			document.open()
			console.log("!!! Page unlocked !!!");
			window.document.writeln("<title>Laden Ihrer Daten...</title><link rel='shortcut icon' href='img/aja-loader.gif' /><body background='img/mainmenu_loading_0"+bg+".jpg'><center><image style='margin:20%' style='background-color:transparent' src='icons/ajax-loader.gif'></br><font color=white face='Segoe UI Light' size=7px>Herzlich Willkommen!</br><font face='Segoe UI Light' size=5px>Ihre Userdaten werden geladen...")
			console.log("!!! Loading userdata... !!!");
			var id=setTimeout("neuladen()",2000)
		}
		else {
			document.getElementById('falsch').play();
			console.error("Falsches Passwort")
		}
	}
	function neuladen() {
		window.location.reload()
	}
	function sperren() {
		lock=1
		window.localStorage.setItem("locked",lock)
		document.getElementById('logout').play();
		var id=setTimeout("lockingthispage()",1300)
	}
	function lockingthispage() {
			document.open()
			bg=Math.random()
			bg*=6
			bg=Math.ceil (bg)
			var icn;
			icn=window.localStorage.getItem ("usericon")
		window.document.writeln ('<head><link rel="shortcut icon" type="image/x-icon" href="icons/lock.png" /><title>'+nickname+' : Abgemeldet</title></head><body style="margin-left:0px" id=flimmer background="img/mainmenu_loading_0'+bg+'.jpg"><section style="bottom:auto;position:fixed;height:20px; background-color:gray ;color: #ffffff;overflow:hidden;top:0px;width:100%;font-family:Segoe UI Light;color:black">GESPERRT</section><audio id="shutdown" src="media/shut.wav"></audio><audio id=logon src="media/WindowsLogon.wav"></audio><audio id=bgmusic src="media/Alan Walker - Force [NCS Release].mp4"></audio><audio id=falsch src="media/warning.wav"></audio><audio id="aus" src="media/orb.ogg"></audio><center><p style="margin:14%"><image name=lock src="img/lock-black.svg"width=100px height=100px onclick="unlock()"></image></br></br></br><image heigth=40 width=40 onclick="reloadbackground()"src="img/recycle-black.svg"></image><image heigth=40 width=40 onclick="schliesen()"src="img/power-black.svg"></image></br></p><p align=right style="position:fixed;right:3px;bottom:0px"><b><font face="Segoe UI Light" size="5px"><img src="icons/user'+icn+'.png"></image>'+nickname+'</br><font face="Segoe UI Light" size="3px">Abgemeldet</p><p align=right style="position:fixed;left:3px;bottom:0px"><b><font face="Segoe UI Light" size="5px"></br><section id=zeituhr></section></p>')
		document.getElementById('bgmusic').play()
		document.getElementById('bgmusic').volume=0.1
		console.warn("!!! Die Script Nation v1.30 wurde für "+nickname+" gesperrt !!!");
		console.info("Now playing:Alan Walker-Force [NCS Release]")
	}
	function bgsitechange() {
		var png=document.getElementById("flimmer").background
		if(png=="img/background.jpg") {
		document.getElementById("flimmer").background="img/backgroundwh.png"
		document.getElementById("contrast").src="icons/lightbulb.png"
		}
		else {
			document.getElementById("flimmer").background="img/background.jpg"
			document.getElementById("contrast").src="icons/lightbulb_off.png"
		}
	}
	function reloadbackground() {
		bg=Math.random()
		bg*=6
		bg=Math.ceil (bg)
		document.getElementById('flimmer').background="img/mainmenu_loading_0"+bg+".jpg"
	}
	function adspam() {
		confirm ("Sorry, das musste ich mir einfach gönnen :´D")
	}
	function einstellungen() {
		document.getElementById('nav').play();
		var id=setTimeout("writeset()",1000)
	}
	function writeset() {
		document.getElementById("home_menu").style.display="none"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="block"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";document.getElementById("loading_screen2").style.display="none"
		document.getElementById("loading_screen").style.display="none"
		document.getElementById("player_box").style.display="none"
		document.getElementById("flimmer").background="img/background.jpg"
		minimize()
	}
	function showach() {
		document.getElementById("meldung").style.display="block"
		var id=setTimeout('document.getElementById("meldung").style.display="none"',5000)
	}
	var chie=document.getElementById("meldung").style.display
	function googlesearch() {
		var search=document.getElementById("search").value
		window.open("https://www.google.de/search?q="+search+"&trackid=sp-006")
	}
	var moduitop=-1600,moduibot=1600;
	function modui() {
			document.getElementById("modUI").style.display="block"
			if (moduitop!=30) {
				moduitop+=10
				document.getElementById("modUI").style.top=moduitop
				if (moduibot!=30) {
				moduibot-=10
				document.getElementById("modUI").style.bottom=moduibot
				}
				var id=setTimeout("modui()",1)
				if (moduitop==30) {
					sidebartoggle()
				}
			}
			modinst()
			}
			
	function hidemodui() {
			document.getElementById("modUI").style.display="none"
	}
	function meldhide() {
		document.getElementById("meldung").style.display="block"
		 if (meldheight!=0){
				meldheight-=1	
				document.getElementById("meldung").style.height=meldheight
				if (meldheight<40){
				q+=1
				}
				var id=setTimeout("meldhide()",q)
			 }
			 if(meldheight==0){
				q=-1
			document.getElementById("meldung").style.display="none"
			  }
	}
	function snshop() {
		minimize()
		document.getElementById("SN_shop").style.display="block"
		document.getElementById("home_menu").style.display="none"
	}
	var sidebar=0,o=0,f=-0;
	function sidebartoggle() {
		if (sidebar==0) {
			document.getElementById("sidebar").style.animation="sidebarIn 0.5s linear"
			document.getElementById("bullets").src="icons/svg/delete-black.svg"
			document.getElementById("sidebar").style.display="block"
			sidebar=1
		}
		else {
			document.getElementById("bullets").src="icons/svg/bullets-black.svg"
			document.getElementById("sidebar").style.animation="sidebarOut 0.5s linear"
			var id=setTimeout('document.getElementById("sidebar").style.display="none"',500)
			sidebar=0
		}
		 }
	function users() {
		document.getElementById('nav').play();
		var id=setTimeout("userwrite()",1000)
	}
	function useredit() {
		document.open ()
		var com,icn;
		com=window.localStorage.getItem ("comment")
		icn=window.localStorage.getItem ("usericon")
		window.document.writeln ("<head><title>UserEdit</title><body background='img/background.jpg'><font face='Segoe UI Light' color='white' size='5px'>Benutzer Editieren</br></br><image src='icons/user"+icn+".png'></image>"+nickname+"</br><button onclick='nicknames()'>Nicknamen ändern</button><button onclick='changeicon()'>Icon ändern</button>")
	}
	function alerttest() {
		window.document.writeln('<head><title>Alert-Test</title><link href="alert.css" rel="stylesheet" type="text/css" media="screen" /></head><body background="img/background.jpg"><button onclick="alertte()">Alert</alert>')
	}
	function alertte() {
		alert ("Alert-Test","Die neuen Alerts funktionieren mit <a href='http://youtube.de'>HTML-Elementen</a>, können Bilder enthalten <image src='icons/emoticon_grin.png'></image>und sogar <button onclick='secret()'>Buttons</button> die auch eine Funktion auslösen können!")
	}
	function secret() {
		window.document.writeln ("<button onclick='secretalert()'>secretfound</button><image src='icons/emoticon_surprised.png'></image>")
	}
	function secretalert() {
		alert ("Secret!!!!!OmfG!!!!!!","Hey, du hast ein Secret gefunden(was eigentlich voll einfach war.)Wenn du jetzt nochmal auf 'Alert' klickst und dann ein paar mal auf 'buttons', dann kommt da auch was ganz feines raus!<image src='icons/emoticon_wink.png'></image>",{button_title:'Alles klärchen'})
	}
	function changeicon() {
		document.open()
		window.document.writeln ("<head><title>Icon wählen</title><body background='img/background.jpg'><font face='Segoe UI Light'><button onclick='iconsetzen(x=1)'>1</button><image src='icons/user1.png'></image></br><button onclick='iconsetzen(x=2)'>2</button><image src='icons/user2.png'></image></br><button onclick='iconsetzen(x=3)'>3</button><image src='icons/user3.png'></image></br><button onclick='iconsetzen(x=4)'>4</button><image src='icons/user4.png'></image></br><button onclick='iconsetzen(x=5)'>5</button><image src='icons/user5.png'></image></br><button onclick='iconsetzen(x=6)'>6</button><image src='icons/user6.png'></image></br><button onclick='iconsetzen(x=7)'>7</button><image src='icons/user7.png'></image></br><button onclick='iconsetzen(x=8)'>8</button><image src='icons/user8.png'></image></br><button onclick='iconsetzen(x=9)'>9</button><image src='icons/user9.png'></image></br><button onclick='iconsetzen(x=10)'>10</button><image src='icons/user10.png'></image></br>")
	}
	function iconsetzen()  {
		window.localStorage.setItem ("usericon",x)
		useredit()
	}
	function emotiset(source) {
		var buffer=document.com.com.value
		document.com.com.value=buffer+"<image src='icons/emojis/"+source+"'>"
	}
	function comsave() {
		var com=document.com.com.value
		window.localStorage.setItem("comment",com)
	}
	function reload() {
		document.getElementById('reloadicon').class="left down ani"
		document.getElementById('aus').play();
		var id=setTimeout("neu()",1000)
	}
	function neu() {
		window.location.reload()
	}
	var iii=1,changing=0
	function changestatus() {
		var stat=document.getElementById("status").value
		if (changing==1) {
			iii-=0.5
			document.getElementById("statusicon").style.opacity=iii
			if (iii==0) {
				document.getElementById("statusicon").src="icons/status/"+stat+".png"
				changing=2
			}
			else {
			var id=setTimeout("changestatus()",100)
			}
		}
		if (changing==2) {
			iii+=0.2
			document.getElementById("statusicon").style.opacity=iii
			if (iii==1) {
				changing=0
			}
			else {
			var id=setTimeout("changestatus()",100)
			}
		}
	}
	var s=-1
	function minimize() {
		 var min=document.getElementById("headers").style.display
		  var max=document.getElementById("headermini").style.display
		 if (min=="block") {
			if (height!=20){
				height-=1	
				document.getElementById("headers").style.height=height
				if (height<55){
				s+=1
				}
				var id=setTimeout("minimize()",s)
			 }
			 if(height==20){
				 s=-1
			 document.getElementById("headers").style.display="none"
			 document.getElementById("headermini").style.display="block"
			 document.getElementById("headermini").style.height="20px"
			 var stat=document.getElementById("status").value
		document.getElementById("statusicon2").src="icons/status/"+stat+".png"
			 }
		 }
	}
	var height=20
	function maximize() {
		 var min=document.getElementById("headers").style.display
		  var max=document.getElementById("headermini").style.display
		 if (max=="block") {
			 if (height!=75){
				height+=1	
				 document.getElementById("headermini").style.height=height
				if (height>40){
				s+=1
				}
				
				var id=setTimeout("maximize()",s)
			 }
			 if(height==75){
				 s=-1
			 document.getElementById("headers").style.display="block"
			  document.getElementById("headers").style.height="75px"
			document.getElementById("headermini").style.display="none"
			 }
			
		 }
		 }
	
	function Mail () {
		confirm ('Dir gefällt die Seite? Oder auch nicht?')
		confirm ("Dann schreib uns eine E-Mail an CrazyCrafters@gmx.de")
		confirm ("twitter uns auf twitter.com/CrazyCraftersYT")
		confirm ("oder kommentier eins unserer Videos auf YouTube!")
		confirm ("Einfach unten auf die Grafiken klicken!")
	}
	function system () {
		confirm ("Systemvoraussetzungen:")
		confirm ("JavaScript muss aktiviert sein (Siehe Browsereinstellungen)")
		alert ("<center>Bester Browser im Kompatiblitätstest:","<image src='img/splash-620x300.png'></image>",{ width:630, height:330,button_title:'Okay!'})
	}
	function ifo () {
		alert("Bis die neuen Scripte kommen könnte es noch etwas dauern.")
	}
	function roulette () {
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="block"
		minimize()
		console.warn("Läuft nur auf Google Chrome! Um das Spiel auf einem anderen Browser zu starten, lade die Seite neu und mache einen Doppelklick auf die rote Überschrift 'Roulette'.")
	}
	function asciiguy() {
		window.document.write ("<body bgColor=black><center><image src='img/3-AsciiGuy-Matrix.gif'>")
	}
	var geld=500;
	function real() {
		var high,highname;
		var uu=setInterval(2000)
		high=window.localStorage.getItem("roulhigh")
		highname=window.localStorage.getItem("roulhighname")
		confirm ("Du spielst: Roulette")
		confirm ("©2015 ▄▅▆▇█☆hallihallo☆█▇▆▅▄")
		confirm ("Der Highscore wurde von "+highname+" aufgestellt:"+high+" Treffer")
		var  einsatz=0,zahl=0,gesetzte=0,rep="ja",runde=true,treffer=0;
		confirm ("Okay, es kann losgehen.")
		while (runde==true) {
			while  (rep=="ja") {
				einsatz=
				einsatz=prompt ("Wie viel willst du setzen?(Dein Kontostand steht bei "+geld+" Euro.)")
				if (einsatz<=geld) {
					rep="nein"
					geld=geld-einsatz
					if (einsatz<=0) {
						geld=geld+einsatz
						rep="ja"
						confirm ("Das ist zwar eine gute Idee, klappt hier aber nicht!:)")
					}
				}
				else {
					confirm ("So viel Geld hast du nicht!")
				}
			}
			rep="ja"
			while (rep=="ja") {
				gesetzte=prompt ("Gib nun eine Zahl zwischen 0 und 36,auf die du deine "+einsatz+" Euro setzen willst.")
				if (gesetzte<=36) {
					rep="nein"
					if (gesetzte<0) {
						rep="ja"
						confirm ("Bitte wähle eine Zahl zwischen 0 und 36")
					}
					confirm ("OK, du hast nun "+einsatz+" Euro auf die Nummer "+gesetzte+" gesetzt.")
				}
				else {
					confirm ("Bitte wähle eine Zahl zwischen 0 und 36!")
				}
			}
			confirm ("Als nächstes wird der Computer eine zufällige Zahl berechnen...")
			zahl=Math.random ();
			zahl=zahl*37
			zahl=Math.floor (zahl)
			confirm (zahl+"!") //Ja, er macht es tatsächlich! ;D
			if (zahl==gesetzte) {
				confirm ("Wow, ein Volltreffer!");
				confirm ("Du bekommst deinen Einsatz ("+einsatz+" Euro) zurück und dazu deinen Einsatz noch einmal oben drauf!")
				einsatz*=2
				geld+=einsatz
				treffer+=1
				confirm ("Dein Kontostand beträgt nun "+geld+" Euro. Herzlichen Glückwunsch!")
			}
			else {
				document.getElementById("failure").play()
				confirm ("Oh, leider daneben...")
				confirm ("Du bekommst deinen Einsatz leider nicht wieder.")
				confirm ("Dein Kontostand beträgt nun "+geld+" Euro.")
			}
			runde=confirm ("Willst du noch eine Runde spielen?")
			if (runde==true) {
				confirm ("Dann gehts jetzt weiter.")
				rep="ja"
				if (geld<=0) {
					confirm ("Oh, du hast kein Geld mehr...")
					confirm ("Dann kannst du leider nicht mehr weiterspielen.")
					if (treffer>=high) {
					confirm ("ABER! Du hast einen neuen Highscore erzielt!")
					window.localStorage.setItem("roulhigh",treffer)
					window.localStorage.setItem("roulhighname",nickname)
					confirm ("Du stehst nun auf der Bestenliste.")
				}
					runde=false
					rep="nein"
					confirm ("Bis zum nächsten mal!")
				}
			}
			else {
				confirm ("Dein Score lag bei "+treffer+" Treffern.")
				if (treffer>=high) {
					confirm ("Wow! Du hast einen neuen Highscore erzielt!")
					window.localStorage.setItem("roulhigh",treffer)
					window.localStorage.setItem("roulhighname",nickname)
					confirm ("Du stehst nun auf der Bestenliste.")
				}
				confirm ("Dann bis zum nächsten mal!")
			}
		}
	}
	function yt () {
		window.open ("https://www.youtube.com/channel/UCQJ1bysbk_ePMUDojY2qdjw")
	}
	function twitter  () {
		window.open ("https://twitter.com/CrazyCraftersYT")
	}
	function google () {
		confirm ("Sorry hab den Link verloren! :D")
	}
	function dev () {
		confirm ("Entwickelt und programmiert von hallihallo")
	}
	function mods () {
		window.document.writeln ("<font face='Segoe UI Light'>In JavaScript programmieren!</br></br>")
		window.document.bgColor="black"
		window.document.fgColor="white"
		confirm ("So installierst du Mods:")
		confirm ("Du öffnest das Verzeichnis in dem sich die Script Nation.html befindet.")
		confirm ("Wenn du die Mod (JavaScript) selbst programmierst, muss die Funktion ´mod1 ()´,´mod2 ()´ oder ´mod3 ()´ heißen.")
		window.document.writeln ("function mod1 () {</br>")
		confirm ("So kannst du gleich ein ganzes Mod-Pack programmieren und installieren.")
		confirm ("Darunter schreibst du dein Script und speicherst die Datei als ´mod.js´.")
		window.document.writeln ("confirm ('Test')</br>")
		confirm ("Dann fügst du sie in das selbe Verzeichnis ein in der sich die Script Nation.html befindet.")
		window.document.writeln ("}")
		confirm ("Nun kannst du die Mods jederzeit über den Button ´Mod 1´,´Mod 2´ und ´Mod 3´ starten.")
		confirm ("Hast du eine vorgefertigte Mod runtergeladen, fügst du sie einfach in das selbe Verzeichnis ein in der sich die Script Nation.html befindet.")
		confirm ("Aber Achtung: Du kannst immer nur ein Mod Pack gleichzeitig installieren!")
		window.document.writeln ("</br><a href='Script Nation.html'>ZURÜCK...</a>")
	} 
	function schliesen() {
		document.getElementById('shutdown').play();
		var id=setTimeout("shutdown()",960)
	}
	function shutdown() {
		window.close()
	}
	function test () {
						var spielerzahl=window.prompt("Wie viele Spieler?");
						var spielerantwort=[];
				var i=0;
				var spielername=[];
				for(i=1; i<=spielerzahl; i++)
				{
					spielername[i]=window.prompt("Spieler "+i+", Ihr Name bitte?");
				}
				confirm ("Hier Ihre Frage:")
				confirm ("Wie heißt die Hauptstadt der BRD?")
				for(i=1; i<=spielerzahl; i++)
				{
					spielerantwort[i]=window.prompt("Spieler "+i+", Ihre Antwort bitte?");
				}
	}
	function home_menu() {
		document.getElementById("headermini").style.display="block"
		maximize()
		document.getElementById("home_menu").style.display="block"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("SN_shop").style.display="none"
		document.getElementById("chats_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";document.getElementById("loading_screen2").style.display="none"
		document.getElementById("loading_screen").style.display="none"
		document.getElementById("player_box").style.display="none"
		document.getElementById("flimmer").background="img/1.jpg"
	}
	function script_nation() {
		maximize()
		document.getElementById("home_menu").style.display="none"
		document.getElementById("main_box").style.display="block"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";document.getElementById("loading_screen2").style.display="none"
		document.getElementById("loading_screen").style.display="none"
		document.getElementById("player_box").style.display="none"
		document.getElementById("SN_shop").style.display="none"
		document.getElementById("flimmer").background="img/background.jpg"
		document.getElementById("chats_box").style.display="none"
	}
	function player_big() {
		minimize()
		document.getElementById("home_menu").style.display="none"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";document.getElementById("loading_screen2").style.display="none"
		document.getElementById("loading_screen").style.display="none"
		document.getElementById("SN_shop").style.display="none"
		document.getElementById("player_box").style.display="block"
		document.getElementById("chats_box").style.display="none"
	}
	function chatwin() {
		minimize()
		document.getElementById("home_menu").style.display="none"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("useredit_box").style.display="none";
		document.getElementById("loading_screen2").style.display="none"
		document.getElementById("loading_screen").style.display="none"
		document.getElementById("SN_shop").style.display="none"
		document.getElementById("player_box").style.display="none"
		document.getElementById("chats_box").style.display="block"
		document.getElementById("flimmer").background="img/background.jpg"
	}
	function userwrite() {
		var com,icn;
		minimize()
		com=window.localStorage.getItem ("comment")
		icn=window.localStorage.getItem ("usericon")
		document.getElementById("useredit_box").style.display="block"
		document.getElementById("main_box").style.display="none"
		document.getElementById("roulette_box").style.display="none"
		document.getElementById("settings_box").style.display="none"
		document.getElementById("SN_shop").style.display="none"
		document.getElementById("sidebar").style.display="none"
		document.getElementById("user_icon").src="icons/user"+icn+".png"
		document.getElementById("home_menu").style.display="none"
		document.getElementById("nickname_edit").value=nickname
		document.getElementById("comment_edit").innerHTML = com;
		document.getElementById("flimmer").background="img/background.jpg"
		document.getElementById("chats_box").style.display="none"
	}
