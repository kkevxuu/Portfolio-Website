// ANIMATIONS

  function revealText() {
    const title = document.querySelector(".hello"); 
    console.log(title);
    const splitText = new SplitType(title, { types: 'chars' }); 
    gsap.set(splitText.chars, { opacity: 0, y: 15 }); 
  
    gsap.to(splitText.chars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.02,  
        onComplete: () => {
            splitText.revert(); 
        }
    });
  }

function revealDescription() {
    const descriptions = document.querySelectorAll(".introductiontext1, .introductiontext2, .skills h3, .skills p, .activities h3, .activities p, .contact h3, .contact p"); // Targets all <p> tags inside description boxes
    gsap.set(descriptions, { opacity: 0, y: -10 }); 
  
    gsap.to(descriptions, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1
    });
  }

// trigger on page load instead

document.addEventListener("DOMContentLoaded", () => {
    revealText();
    revealDescription();
  });
 
  
 