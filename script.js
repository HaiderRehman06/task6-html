const coffeeCup = document.querySelector('.coffee-cup');

let rotX = 0;
let rotY = 0;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  rotX = (x - centerX) / 100;
  rotY = (y - centerY) / 100;

  coffeeCup.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});