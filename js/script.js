gsap.registerPlugin(ScrollTrigger, SplitText);

window.addEventListener("load", () => {
  let heroTitleParams = { type: "chars, words" };
  let heroDescParams = { type: "lines" };
  let heroTitle, heroDesc;

  try {
    heroTitle = new SplitText(".frame h1", heroTitleParams);
    heroDesc = new SplitText(".frame p", heroDescParams);
  } catch (e) {}

  const tl = gsap.timeline();

  if (heroTitle && heroTitle.chars) {
    tl.from(heroTitle.chars, {
      duration: 1,
      y: 100,
      opacity: 0,
      rotateX: -90,
      stagger: 0.02,
      ease: "back.out(1.7)"
    });
  } else {
    tl.from(".frame h1", { opacity: 0, y: 50, duration: 1 });
  }

  if (heroDesc && heroDesc.lines) {
    tl.from(
      heroDesc.lines,
      {
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.4"
    );
  } else {
    tl.from(".frame p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.2");
  }

  tl.from(
    ".buttons .btn-primary, .buttons .btn-secondary",
    {
      duration: 0.6,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out"
    },
    "-=0.4"
  );

  gsap.to(".frame .image img", {
    y: -15,
    rotation: 2,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray("section:not(.frame) h2").forEach(heading => {
    try {
      const split = new SplitText(heading, { type: "chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        rotationX: -90,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    } catch (e) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 0.6
      });
    }
  });

  gsap.utils
    .toArray("section:not(.frame):not(.about) p")
    .forEach(p => {
      gsap.from(p, {
        scrollTrigger: {
          trigger: p,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });

  const grids = [
    ".services-grid",
    ".portfolio-grid",
    ".process-grid",
    ".testimonials-grid"
  ];

  grids.forEach(gridClass => {
    const grid = document.querySelector(gridClass);
    if (grid) {
      gsap.from(grid.children, {
        scrollTrigger: {
          trigger: grid,
          start: "top 75%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }
  });

  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    const tlAbout = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 70%"
      }
    });

    tlAbout
      .from(".about-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(
        ".about-content > *",
        {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.5"
      );
  }

  const buttons = document.querySelectorAll(
    "button, .btn-primary, .btn-secondary"
  );

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out"
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    });
  });
});

const footer = document.querySelector(".footer");

if (footer) {
  const tlFooter = gsap.timeline({
    scrollTrigger: {
      trigger: footer,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });

  tlFooter
    .from(".footer-brand", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(
      ".footer-links li",
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.4"
    )
    .from(
      ".footer-contact p",
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.4"
    )
    .from(
      ".footer-socials a",
      {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "back.out(1.7)"
      },
      "-=0.4"
    )
    .from(
      ".footer-bottom",
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.3"
    );
}

gsap.to(".scroll-progress", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    scrub: true
  }
});

