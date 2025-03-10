
function revealDescription() {
  const descriptions = document.querySelectorAll(".title, .introductiontext1, .introductiontext2, .skills, .activities, .contact"); // targets all <p> tags inside description boxes
  gsap.set(descriptions, { opacity: 0, y: -10 }); 

  gsap.to(descriptions, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1
  });
}

// trigger on page load 

document.addEventListener("DOMContentLoaded", () => {
  revealDescription();
});

