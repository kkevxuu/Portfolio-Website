
// Text animation
  
function revealDescription() {
  const descriptions = document.querySelectorAll(".projecttitle, .descriptionbox1, .descriptionbox2"); 
  gsap.set(descriptions, { opacity: 0, y: -10 });

  gsap.to(descriptions, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15
  });
}

// trigger on page load 

document.addEventListener("DOMContentLoaded", () => {
revealDescription();
});


// OTHER ELEMENTS

// back to top button

document.getElementById("back-to-top").addEventListener("click", () => {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});



//button


// Get the button element
const backToTopButton = document.getElementById('back-to-top');

// Set the scroll threshold in pixels
const scrollThreshold = 450; // Adjust this value as needed

// Listen for scroll events
window.addEventListener('scroll', function() {
  if (window.scrollY > scrollThreshold) {
    backToTopButton.classList.add('visible'); // Add class to fade in
  } else {
    backToTopButton.classList.remove('visible'); // Remove class to fade out
  }
});