// const { default: gsap } = require("gsap");
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },
    autoplay:{
    delay:3000, 
    disableOnInteraction:false, 
    },
});

gsap.from("#img1",{
  y: "50%",
  duration: 2,
  ease : Expo.easeInOut,
  opacity: 0,
  stagger: 0.5,
})

gsap.from("#img2",{
  x: "50%",
  duration: 2,
  ease : Expo.easeInOut,
  opacity: 0,
  stagger: 0.5,
},'-=2')

gsap.from("#img3",{
  y: "50%",
  duration: 2,
  ease : Expo.easeInOut,
  opacity: 0,
  stagger: 0.5,
},'-=2')
