// var music = document.geElementById("music");
// var audio = document.getElementsByTagName("audio")[0];

// music.onlick - function () {
// 	audio.pause();
// };

window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	music.onlick = function(){
		audio.pause();
	}
}