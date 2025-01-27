// PARALLAX TRACK

const track = document.getElementById("image-track");
const scrollText = document.getElementById("scroll-text");

// check saved position in localStorage

const savedPosition = localStorage.getItem("trackPosition");
const initialPosition = savedPosition !== null ? parseFloat(savedPosition) : -23;

// set the initial position with GSAP

gsap.set(track, { xPercent: initialPosition });
track.dataset.percentage = initialPosition;

// update the track's position

const updateTrackPosition = (nextPercentage) => {
  // store current position in localStorage
  localStorage.setItem("trackPosition", nextPercentage);
  track.dataset.percentage = nextPercentage;
  gsap.to(track, { duration: 1.5, xPercent: nextPercentage, ease: "power3.out" });
  gsap.to(track.querySelectorAll(".image"), {
    duration: 1.5,
    objectPosition: `${100 + nextPercentage * 1}% center`, // adjust parallax effect
    ease: "power3.out"
  });


  // Show or hide "Scroll" text only at the initial position (-23)
  if (nextPercentage === -23) {
    scrollText.style.opacity = "1"; // Show text at the initial position
  } else {
    scrollText.style.opacity = "0"; // Hide text otherwise
  }
};

// Set initial visibility of "Scroll" text on page load
if (initialPosition === -23) {
  scrollText.style.opacity = "1"; // Show "Scroll" if at the initial position
} else {
  scrollText.style.opacity = "0"; // Hide "Scroll" otherwise
}



// scrolling function

const handleScroll = (delta) => {
  const nextPercentage = Math.max(
    Math.min(parseFloat(track.dataset.percentage) + delta, -23), // upper limit
    -77 // lower limit
  );
  updateTrackPosition(nextPercentage);
};

// scrollwheel event listener (updated for horizontal scrolling)
window.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent default navigation behavior (back/forward)

  if (e.deltaX !== 0) {
    handleScroll(-e.deltaX * 0.05); // Horizontal scroll handling
  } else if (e.deltaY !== 0) {
    // Check for touchpad scroll behavior by checking deltaMode and deltaY value range
    if (e.deltaMode == 0) {
      handleScroll(-e.deltaY * 0.05); // Adjust for small deltaY (slow scroll)
      }
    } 
    else {
      handleScroll(e.deltaY > 0 ? -2 : 2); // Default sensitivity for mice
    } //VERTICAL SCROLL FOR MOBILE IS ALSO BROKEN ON DESKTOP AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 
  }, { passive: false });


window.addEventListener("keydown", (e) => {
  const delta = { ArrowRight: -7, ArrowLeft: 7, ArrowUp: 7, ArrowDown: -7 }[e.key];
  if (delta) handleScroll(delta);
});

// update to ensure track starts at the saved or default position

updateTrackPosition(initialPosition);


// PAGE BEHAVIOR 

// to prevent images from being dragged

document.querySelectorAll(".logolink").forEach(link => link.ondragstart = () => false);

// prevent zoom

document.addEventListener("wheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault(); // for ctrl + scroll
  }
}, { passive: false });

document.addEventListener("gesturestart", function(e) {
  e.preventDefault(); // for pinch to zoom
});

// hover reveals text

const images = document.querySelectorAll('.image');
const imageTexts = document.querySelectorAll('.image-text');

// Loop through each image and attach event listeners
images.forEach((image, index) => {
  const imageText = imageTexts[index]; // Corresponding image-text for each image

  // Mouse enter (hover on image)
  image.addEventListener('mouseenter', () => {
    imageText.style.opacity = '1'; // Show text
  });

  // Mouse leave (hover off image)
  image.addEventListener('mouseleave', () => {
    imageText.style.opacity = '0'; // Hide text
  });
});









