// TEXT ANIMATIONS

// title animation
  
  function revealText() {
    const title = document.querySelector(".projecttitle"); 
    const splitText = new SplitType(title, { types: "chars" }); // splits into characters
    gsap.set(splitText.chars, { opacity: 0, y: 15 }); // initially hides characters with offset
  
    gsap.to(splitText.chars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07, // speed control for stagger
        onComplete: () => {
            splitText.revert(); // restores DOM to original state
        }
    });
  }

// description animation
  
  function revealDescription() {
    const descriptions = document.querySelectorAll(".descriptionbox1 p, .descriptionbox2 p, .descriptionbox3 p, .descriptionbox1 h2, .descriptionbox2 h2, .descriptionbox3 h2"); 
    gsap.set(descriptions, { opacity: 0, y: -10 });
  
    gsap.to(descriptions, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15 
    });
  }
  
// trigger on page load instead

document.addEventListener("DOMContentLoaded", () => {
  revealText();
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

// scroll indicator

document.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);
  
  const indicator = document.getElementById("scroll-indicator");
  indicator.textContent = `${scrollPercent}`;
});