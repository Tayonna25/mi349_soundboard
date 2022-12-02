const dino = document.getElementById('trex');
dino.onclick = function() {
   var trexAudio = new Audio('t-rex-roar.mp3');
   trexAudio.play();
}

const dino2 = document.getElementById('man');
dino2.onclick = function() {
   var ManAudio = new Audio('man.wav');
   ManAudio.play();
}

const dino3 = document.getElementById('app');
dino3.onclick = function() {
   var AppAudio = new Audio('applause.wav');
   AppAudio.play();
}