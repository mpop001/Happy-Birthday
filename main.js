var mycard = document.querySelector(".menu .carte .page1"),
  mybotton = document.querySelector(".button"),
  myclose = document.querySelector(".close");
var text =
  "كل عام وأنت بخير نفيسة أتمنی لك حياة سعيدة مليئة بالفرح والسعادة عقبال المئة سنة إنشاء الله.❤️❤️❤️";
(speed = 50), (i = 0);

mybotton.onclick = function () {
  document.querySelector(".menu").style.height = "100%";
};
myclose.onclick = function () {
  document.querySelector(".menu").style.height = "0%";
};
mycard.onclick = function () {
  mycard.classList.toggle("rotate");
  document.querySelector(".menu .carte").classList.toggle("move");
  setTimeout(function () {
    witter();
  }, 1000);
};

function witter() {
  if (i < text.length) {
    document.querySelector(".message p").innerHTML += text.charAt(i);
    i++;
    setTimeout(witter, speed);
  }
}
function doit() {
  confetti.start();
  document.getElementById("happy").play();
  document.getElementById("do").style.display = "none";
}
