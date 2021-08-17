// 1. Timeline for text box and logo
const text_box_and_logo = gsap.timeline();
// 2. Timeline for text only
const h1 = gsap.timeline().pause();
//3.timeline for CTA
const fade = gsap.timeline().pause();

//0. animation for container

// 1. Animation for web purple logo and white SAE logo
text_box_and_logo
  .to(".logo", {
    autoAlpha: 1.3,
    scale: 2,
    ease: "linear",
    duration: 2,
  })

  .fromTo(
    ".h1",
    {
      opacity: 0,
      duration: 0.4,
      right: "-100%",
    },
    {
      opacity: 1,
      duration: 0.3,
      left: "50%",
      onComplete: function () {
        fade.resume();
      },
    }
  );

// 3. Animation for cta

fade
  .to("#fade", { opacity: 0 })
  .set("#fade", { backgroundColor: "red", innerText: "Start Today" })
  .to("#fade", { opacity: 1 }, "+=1");

document.querySelector("a").addEventListener("click", (e) => {
  fade.to("#fade", {
    scale: 2.2,
    duration: 1,
  }),
    fade.to("#fade", {
      scale: 1,
      duration: 1,
    });
});
