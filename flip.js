gsap.fromTo(
    ".card",
    { rotationX: 0 },
    {
    //   left: -circleWidth/2,
      duration: 0.1,
      rotationX: 180,
      markers: true,
      scrollTrigger: {
        trigger: ".card",
        toggleActions: "restart restart reverse reverse",
      },
    }
  );