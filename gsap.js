gsap.registerPlugin(ScrollTrigger);
const blurElements = document.querySelectorAll(".competiton-content-section-right-blur-background");
blurElements.forEach(element => {
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
        //   markers:true,
          start: "10px 90%", // Start the animation when the element's top reaches the center of the viewport
        //   end: "bottom center", // End the animation when the element's bottom reaches the center of the viewport
        //   scrub: true, // Smoothly animate the width change as you scroll
        },
      });
  
      // Add animation to the timeline
      tl.to(element, { width: "0%", duration: 2 });
})