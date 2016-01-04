var play=false,display=true,lautstaerke=100,loop=false;
var track=playlist()
var i=0
function toggleplayer() {
	if (play==false) {
		document.getElementById('musicvideo2').volume=0
		document.getElementById('musicvideo3').volume=0
		document.getElementById('musicvideo').play()
		document.getElementById('playbutton').src="player/control_pause_blue.png"
		document.getElementById('musicvideo2').play()
		document.getElementById('musicvideo3').play()
		document.getElementById('musicvideo').loop=false
		document.getElementById('musicvideo2').loop=false
		document.getElementById('musicvideo3').loop=false
		document.getElementById('playbutton2').volume=0
		play=true
	}
	else {
		document.getElementById('musicvideo').pause()
		document.getElementById('playbutton').src="player/control_play_blue.png"
		document.getElementById('musicvideo2').pause()
		document.getElementById('musicvideo3').pause()
		play=false
	}
}
function skiptrack() {
	 i+=1
	// if (i>13) {
		// i=13
	// }
	document.getElementById('musicvideo').src="media/"+track[i]+".mp4"
	document.getElementById('musicvideo2').src="media/"+track[i]+".mp4"
	document.getElementById('musicvideo3').src="media/"+track[i]+".mp4"
	var h=new Array(10)
	h[i]=track[i]
	h[i]=h[i].toUpperCase();
	document.getElementById('playerdisplay').value=h[i]
	document.getElementById('playerdisplay2').value=track[i]
	if (play==true) {
		document.getElementById('musicvideo').play()
		document.getElementById('musicvideo2').play()
		document.getElementById('musicvideo3').play()
		document.getElementById('playbutton').src="player/control_pause.png"
		document.getElementById('playbutton2').src="player/control_pause.png"
	}
}
function previous() {
	i-=1
	if (i==-1) {
		i=0
	}
	document.getElementById('musicvideo').src="media/"+track[i]+".mp4"
	document.getElementById('musicvideo2').src="media/"+track[i]+".mp4"
	document.getElementById('musicvideo3').src="media/"+track[i]+".mp4"
	var h=new Array(10)
	h[i]=track[i]
	h[i]=h[i].toUpperCase();
	document.getElementById('playerdisplay').value=h[i]
	document.getElementById('playerdisplay2').value=track[i]
	if (play==true) {
		document.getElementById('musicvideo').play()
		document.getElementById('musicvideo2').play()
		document.getElementById('musicvideo3').play()
		document.getElementById('playbutton').src="player/control_pause.png"
		document.getElementById('playbutton2').src="player/control_pause.png"
	}
}
function vergroessern() {
	alert ("Aktueller Titel","<font face='Monkirta Pursuit NC'>"+track[i],{top:300,width:700})
}
function mouseoutplay() {
	if (play==false) {
		document.getElementById('playbutton').src='player/control_play.png'; 
		document.getElementById('playbutton2').src='player/control_play.png'; 
	}
	else {
		document.getElementById('playbutton').src='player/control_pause.png'; 
		document.getElementById('playbutton2').src='player/control_pause.png'; 
	}
}
function mouseonplay() {
	if (play==false) {
		document.getElementById('playbutton').src='player/control_play_blue.png'; 
		document.getElementById('playbutton2').src='player/control_play_blue.png'; 
	}
	else {
		document.getElementById('playbutton').src='player/control_pause_blue.png'; 
		document.getElementById('playbutton2').src='player/control_pause_blue.png'; 
	}
}
function reg() {
	var h=new Array(10)
	h[i]=track[i]
	document.getElementById('playerdisplay2').value=h[i]
	h[i]=h[i].toUpperCase();
	document.getElementById('playerdisplay').value=h[i]
}
function vol() {
	var volume=document.getElementById('volume').value;
	volume/=100
	document.getElementById('musicvideo').volume=volume
	volume*=100
	normal()
	volume=Math.round (volume)
	document.getElementById('playerdisplay').value="LAUTSTÄRKE:"+volume
	document.getElementById('playerdisplay2').value="LAUTSTÄRKE:"+volume
	var tm=setTimeout("reg()",3000)
}
function mute() {
	var volume=document.getElementById('volume').value;
	if (volume>0) {
		document.getElementById('musicvideo').volume=0
		document.getElementById('voldisp').src="player/sound_mute.png"
		document.getElementById('volume').value=0
	}
	else {
		document.getElementById('musicvideo').volume=0.5
		document.getElementById('voldisp').src="player/sound.png"
		document.getElementById('volume').value=50
	}
}
function normal() {
	var volume=document.getElementById('volume').value;
	if (volume==0) {
		document.getElementById('voldisp').src="player/sound_mute.png"
	}
	if (volume>0) {
		document.getElementById('voldisp').src="player/sound_none.png"
	}
	if (volume>25) {
		document.getElementById('voldisp').src="player/sound_low.png"
	}
	if (volume>55) {
		document.getElementById('voldisp').src="player/sound.png"
	}
}
function loopmedia() {
	if (loop==false) {
		document.getElementById('musicvideo').loop=true
		document.getElementById('musicvideo2').loop=true
		document.getElementById('musicvideo3').loop=true
		document.getElementById('repeat').src="player/control_repeat_blue.png"
		loop=true
		document.getElementById('playerdisplay').value="LOOP: AN"
		document.getElementById('playerdisplay2').value="LOOP: AN"
	}
	else {
		document.getElementById('musicvideo').loop=false
		document.getElementById('musicvideo2').loop=false
		document.getElementById('musicvideo3').loop=false
		document.getElementById('repeat').src="player/control_repeat.png"
		loop=false
		document.getElementById('playerdisplay').value="LOOP: AUS"
		document.getElementById('playerdisplay2').value="LOOP: AUS"
	}
	var tm=setTimeout("reg()",3000)
}
