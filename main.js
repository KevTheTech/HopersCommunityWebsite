const menu = document.querySelector('.nav-list');
const toggle = document.getElementById('toggle');

toggle.onclick = function() {
  menu.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let currentActiveLink = null;

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');   


    if (top >= offset && top < offset + height)   
 {
      if (currentActiveLink !== id) {
        navLinks.forEach(link => link.classList.remove('active'));
        const newActiveLink = document.querySelector(`header nav a[href*=${id}]`);
        if (newActiveLink) {
          newActiveLink.classList.add('active');
          currentActiveLink = id;
        }
      }
      return; // Exit the loop early if a match is found
    }
  });
};