/*
================================================================================
Scripts used in sematic.se homepage
================================================================================
*/

/*
Create on scroll animations with GSAP 
--------------------------------------------------------------------------------
*/

// Register plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

// Ingographic: Animate infographic on scroll 
if(document.querySelector(".graph")) {
gsap.from(".graph", {
    scaleY: 0,
    stagger: 0.3,
    duration: 0.5,
    scrollTrigger: {
    trigger: '.infographics__graphs'
  }
});
}

// CTA mini: create parallax effect 
if(document.querySelector(".cta-mini__parallax")) {
gsap.to(".cta-mini__parallax", {
    yPercent: 90,
    ease: "none",
    scrollTrigger: {
    trigger: ".cta-mini",
    scrub: true
  }, 
});
}

// CTA bottom: create parallax effect 
if(document.querySelector(".cta-mini-2__parallax")) {
gsap.to(".cta-mini-2__parallax", {
    yPercent: 90,
    ease: "none",
    scrollTrigger: {
    trigger: ".cta-mini-2",
    scrub: true
  }, 
});
}

// Hero image 
if(document.querySelector(".hero__img")) {
gsap.to(".hero__img", {
  opacity: 1,
  duration: 0.3
});
}
