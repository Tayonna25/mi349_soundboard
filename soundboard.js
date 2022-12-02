const dino = document.getElementById('trex');
dino.onclick = function() {
   var trexAudio = new Audio('t-rex-roar.mp3');
   trexAudio.play();
}