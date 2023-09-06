gsap.fromTo(
  ".landing-page img",
  { width: "60%" },
  { width: "50%", duration: 1 }
);

// rotating circle
// gsap.fromTo(
//   ".scene",
//   { rotate: -35, x: -100, y: 100 },
//   {
//     rotate: 35,
//     x: 100,
//     // y: -100,
//     // duration: 1,
//     scrollTrigger: {
//       trigger: ".scene",
//       toggleActions: "restart restart reverse reverse",
//       // markers: "true",
//       start: "top bottom", // Change this according to your needs
//       end: "bottom top", // Change this according to your needs
//       scrub: true, // Enables scrubbing
//     },
//   }
// );

// rotating circle
// gsap.fromTo(
//   ".buildings",
//   {  y: 0 , scale:1.5 },
//   {
//     y: -200,
//     scale:1,
//     // duration: 1,
//     scrollTrigger: {
//       trigger: ".buildings",
//       toggleActions: "restart restart reverse reverse",
//       // markers: "true",
//       start: "top bottom", // Change this according to your needs
//       end: "bottom top", // Change this according to your needs
//       scrub: true, // Enables scrubbing
//     },
//   }
// );

gsap.fromTo(
  ".what-is-esummit-astronaut",
  {  y: 200 , x : 100  },
  {
    y: 10,
    x: 1000,
    // duration: 1,
    scrollTrigger: {
      trigger: ".what-is-esummit-astronaut",
      toggleActions: "restart restart reverse reverse",
      // markers: "true",
      start: "top bottom", // Change this according to your needs
      end: "bottom top", // Change this according to your needs
      scrub: true, // Enables scrubbing
    },
  }
);

gsap.fromTo(
  ".leftBackground",
  {  y: 500 },
  {
    y: 10,
    // duration: 1,
    scrollTrigger: {
      trigger: ".leftBackground",
      toggleActions: "restart restart reverse reverse",
      // markers: "true",
      start: "top bottom", // Change this according to your needs
      end: "bottom top", // Change this according to your needs
      scrub: true, // Enables scrubbing
    },
  }
);

gsap.fromTo(
  ".rightBackground",
  {  y: 500 },
  {
    y: 10,
    // duration: 1,
    scrollTrigger: {
      trigger: ".rightBackground",
      toggleActions: "restart restart reverse reverse",
      // markers: "true",
      start: "top bottom", // Change this according to your needs
      end: "bottom top", // Change this according to your needs
      scrub: true, // Enables scrubbing
    },
  }
);

elementClassNames = [".what-is-esummit-img",".what-is-esummit-heading",".what-is-esummit-content"]

elementClassNames.forEach((className) => {
  gsap.fromTo(
    className,
    { x:-100,opacity:0 },
    {
      x: 0,
      opacity:1,
      duration: 0.5,
      scrollTrigger: {
        trigger: className,
        toggleActions: "restart none none none",
      },
    }
  );
});

gsap.fromTo(
  ".esummit-theme-left",
  { x:-100,opacity:0 },
  {
    x: 0,
    opacity:1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".esummit-theme-left",
      toggleActions: "restart none none none",
    },
  }
);
gsap.fromTo(
  ".esummit-theme-right",
  { x:300,opacity:0 ,
    webkitFilter:"blur(" + 10 + "px)"
  },
  {
    x: 0,
    opacity:1,
    duration: 1,
    webkitFilter:"blur(" + 0 + "px)",
    scrollTrigger: {
      trigger: ".esummit-theme-right",
      toggleActions: "restart none none none",
    },
  }
);

// Check the screen size before applying the GSAP animation
function applyAnimation() {
  if (window.innerWidth >= 1000) {
    gsap.fromTo(
      ".buildings",
      { y: 0, scale: 1.5 },
      {
        y: -200,
        scale: 1,
        scrollTrigger: {
          trigger: ".buildings",
          toggleActions: "restart restart reverse reverse",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }
}

// Initial check when the page loads
applyAnimation();

// Add an event listener to recheck when the window is resized
window.addEventListener("resize", applyAnimation);

