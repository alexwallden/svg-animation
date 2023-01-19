import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const e1: HTMLElement | null = document.querySelector('#e');
const e2: HTMLElement | null = document.querySelector('#e_2');
const a1: HTMLElement | null = document.querySelector('#a_2');
const a2: HTMLElement | null = document.querySelector('#a');
const l1: HTMLElement | null = document.querySelector('#l');
const l2: HTMLElement | null = document.querySelector('#l_2');
const line: SVGLineElement | null = document.querySelector('line');
const paths: SVGPathElement[] | null = Array.from(document.querySelectorAll('path'));

function fadeIn() {
  if (paths) {
    paths.forEach((path) => {
      gsap.fromTo(path,{fill: 'rgb(12, 19, 34)'}, {
        fill: 'rgb(78, 255, 198)',
        duration: 3,
        ease: "bounce.out",
      })
    })
    gsap.fromTo(line, {stroke: 'rgb(12, 19, 34)'}, {
      stroke: 'rgb(78, 255, 198)',
      duration: 3
    })
  }
}

gsap.to(e1, {
  motionPath: {
    path: [{x:0, y:0}, {x:25, y:-20}, {x:31, y:0}],
    type: "elipse"
  },
  ease: "bounce.out",
  duration: 2,
  yoyo: true,
  repeat: 4,
});

gsap.to(e2, {
  motionPath: {
    path: [{x:0, y:0}, {x:-25, y:20}, {x:-31, y:0}]
  },
  ease: "steps(12)",
  duration: 2,
  yoyo: true,
  repeat: 4,
})

gsap.to(a1, {
  motionPath: {
    path: [{x:0, y:0}, {x:25, y:-20}, {x:40, y:0}],
    type: "elipse"
  },
  ease: "steps(3)",
  color: 'red',
  duration: 4,
  yoyo: true,
  repeat: 2,
})

gsap.to(a2, {
  motionPath: {
    path: [{x:0, y:0}, {x:-25, y:20}, {x:-40, y:0}],
    type: "elipse"
  },
  ease: "none.none",
  duration: 4,
  yoyo: true,
  repeat: 2,  
})

gsap.fromTo(l1, {
  rotate: 90,
  scale: 0.2,
  transformOrigin: '50% 50%',
  x: 1,
  y: 1
},
{
  rotate: 0,
  scale: 1,
  x: 0,
  y: 0,
  duration: 12.3,
})

gsap.fromTo(l2, {
  rotate: -90,
  scale: 0.2,
  transformOrigin: '50% 50%',
  x: -1,
  y: 1
},
{
  rotate: 0,
  scale: 1,
  x: 0,
  y: 0,
  duration: 12.3,
  onComplete: fadeIn,
})
