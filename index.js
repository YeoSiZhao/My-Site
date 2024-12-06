function highlightSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('highlight');
    setTimeout(() => {
        targetSection.classList.remove('highlight');
    }, 1000);
}

let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}