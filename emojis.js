	function usercomment() {
		var com=window.localStorage.getItem ("comment")
		var emojis="<head><title>Usercomment</title></head><body background='img/backgroundwh.png'><font face='Segoe UI Light'><script src='emojis.js'></script><script src='games.js'></script><audio id='aus' src='media/Spracheaus.wav'></audio><form name=com><textarea id=com name=com type=text style='width:100%;height:20%'></textarea></form><button onclick='comsave()'>Speichern</button></br>Emoticons:</br> 		<section style='cursor:pointer'><img onclick=emotiset('Angel.png') src='icons/emojis/Angel.png'></img> 		<img onclick=emotiset('Angry.png') src='icons/emojis/Angry.png'></img> 		<img onclick=emotiset('Aww.png') src='icons/emojis/Aww.png'></img> 		<img onclick=emotiset('Aww_2.png') src='icons/emojis/Aww_2.png'></img> 		<img onclick=emotiset('Blushing.png') src='icons/emojis/Blushing.png'></img> 		<img onclick=emotiset('Childish.png') src='icons/emojis/Childish.png'></img> 		<img onclick=emotiset('Confused.png') src='icons/emojis/Confused.png'></img> 		<img onclick=emotiset('Creepy.png') src='icons/emojis/Creepy.png'></img> 		<img onclick=emotiset('Crying.png') src='icons/emojis/Crying.png'></img> 		<img onclick=emotiset('Cthulhu.png') src='icons/emojis/Cthulhu.png'></img> 		<img onclick=emotiset('Cute.png') src='icons/emojis/Cute.png'></img> 		<img onclick=emotiset('Cute_winking.png') src='icons/emojis/Cute_winking.png'></img> 		<img onclick=emotiset('Devil.png') src='icons/emojis/Devil.png'></img> 		<img onclick=emotiset('Gah.png') src='icons/emojis/Gah.png'></img> 		<img onclick=emotiset('Gah_2.png') src='icons/emojis/Gah_2.png'></img> 		<img onclick=emotiset('Gasping.png') src='icons/emojis/Gasping.png'></img> 		<img onclick=emotiset('Greedy.png') src='icons/emojis/Greedy.png'></img> 		<img onclick=emotiset('Grinning.png') src='icons/emojis/Grinning.png'></img> 		<img onclick=emotiset('Grinning_Winking.png') src='icons/emojis/Grinning_Winking.png'></img> 		<img onclick=emotiset('Happy.png') src='icons/emojis/Happy.png'></img> 		<img onclick=emotiset('Happy_2.png') src='icons/emojis/Happy_2.png'></img> 		<img onclick=emotiset('Happy_3.png') src='icons/emojis/Happy_3.png'></img> 		<img onclick=emotiset('Huh.png') src='icons/emojis/Huh.png'></img> 		<img onclick=emotiset('Huh_2.png') src='icons/emojis/Huh_2.png'></img> 		<img onclick=emotiset('Laughing.png') src='icons/emojis/Laughing.png'></img> <img onclick=emotiset('Lips_Sealed.png') src='icons/emojis/Lips_Sealed.png'></img> 		<img onclick=emotiset('Madness.png') src='icons/emojis/Madness.png'></img> 		<img onclick=emotiset('Malicious.png') src='icons/emojis/Malicious.png'></img> 		<img onclick=emotiset('Sick.png') src='icons/emojis/Sick.png'></img> 		<img onclick=emotiset('Smiling.png') src='icons/emojis/Smiling.png'></img> 		<img onclick=emotiset('Speechless.png') src='icons/emojis/Speechless.png'></img> 		<img onclick=emotiset('Spiteful.png') src='icons/emojis/Spiteful.png'></img> 		<img onclick=emotiset('Stupid.png') src='icons/emojis/Stupid.png'></img> 		<img onclick=emotiset('Sunglasses.png') src='icons/emojis/Sunglasses.png'></img> 		<img onclick=emotiset('Terrified.png') src='icons/emojis/Terrified.png'></img> 		<img onclick=emotiset('Tired.png') src='icons/emojis/Tired.png'></img> 		<img onclick=emotiset('Tongue_out.png') src='icons/emojis/Tongue_out.png'></img> 		<img onclick=emotiset('Tongue_out_Laughing.png') src='icons/emojis/Tongue_Out_Laughing.png'></img> 		<img onclick=emotiset('Tongue_out_Left.png') src='icons/emojis/Tongue_out_Left.png'></img> 		<img onclick=emotiset('Tongue_out_Up.png') src='icons/emojis/Tongue_out_Up.png'></img> 		<img onclick=emotiset('Tongue_out_Up_Left.png') src='icons/emojis/Tongue_out_Up_Left.png'></img> 		<img onclick=emotiset('Tongue_out_Winking.png') src='icons/emojis/Tongue_out_Winking.png'></img> 		<img onclick=emotiset('Uncertain.png') src='icons/emojis/Uncertain.png'></img> 		<img onclick=emotiset('Uncertain_2.png') src='icons/emojis/Uncertain_2.png'></img> 		<img onclick=emotiset('Unhappy.png') src='icons/emojis/Unhappy.png'></img> 		<img onclick=emotiset('Winking.png') src='icons/emojis/Winking.png'></img> 		     <img onclick=emotiset('Heart.png') src='icons/emojis/Heart.png'></img> 		<img onclick=emotiset('Thumb_Down.png') src='icons/emojis/Thumb_Down.png'></img> 		<img onclick=emotiset('Thumb_Up.png') src='icons/emojis/Thumb_Up.png'></img> 		</section> 		</br></br>Keine Sorge bei Tags wie <.image src='icons/emoticon_grin.png'>, im Kommentar stehen sie als Smileys.</br>Übrigens: Es funktionieren auch HTML-Tags!"
		window.document.writeln(emojis)
		document.getElementById("com").value=com
	}