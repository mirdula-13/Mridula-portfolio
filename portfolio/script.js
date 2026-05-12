// Typing effect for hero
const texts = [
  "MCA Student",
  "UI/UX Designer",
  "Frontend Developer",
  "Flutter & Web Enthusiast",
  "AI Project Builder"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
  if(count === texts.length){ count = 0; }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typed-text').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
})();

// Scroll side-slide + glow
const slideElements = document.querySelectorAll('.slide-in');

function checkSlide() {
  slideElements.forEach(el => {
    const slideInAt = (window.scrollY + window.innerHeight) - el.offsetHeight / 4;
    const elementBottom = el.offsetTop + el.offsetHeight;

    if(slideInAt > el.offsetTop && window.scrollY < elementBottom) {
      el.classList.add('show'); // slide + glow
    } else {
      el.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkSlide);

// Optional: mouse parallax background movement
document.addEventListener("mousemove", function(e){
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.backgroundPosition = `${50 + x*10}% ${50 + y*10}%`;
});