gsap.registerPlugin(ScrollTrigger);

const textTl = gsap.timeline({
  scrollTrigger : {
    trigger : '.title_con',
    start : '50% 50%',
    end : "+=800",
    markers : true,
    scrub : 2,
    pin : ".title_con",
    pinSpacing : true
  }
});
textTl.fromTo(".header1",{scaleX:0.9,opacity:0}, {scaleX:1, opacity:1, duration:.4},0)
      .fromTo(".header2",{y:20, opacity:0}, {y:0,opacity:1, duration: 2},3)
      .fromTo(".sub-title",{y:20, opacity:0}, {y:0,opacity:1, duration: 2},5);

const graphs = [
  {id:"#graph1", height: 100},
  {id:"#graph2", height: 120},
  {id:"#graph3", height: 140},
  {id:"#graph4", height: 160},
  {id:"#graph5", height: 400},
];

const graphTl = gsap.timeline({
  scrollTrigger : {
    trigger:'.bar_con',
    start:"50% 50%",
    // end : "100% 100%",
    end : '+=600',
    markers : true,
    scrub : 2,
    pin : '.bar_con',
    pinSpacing : true,
  },
});

graphs.forEach((graph,index)=>{
  graphTl.fromTo(graph.id,{height:0},{height:graph.height},0);
});


const path = document.querySelector("#linePath");
const length = path.getTotalLength();
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

gsap.to(path, {
    strokeDashoffset: 0,
    scrollTrigger: {
        trigger: ".line_box",
        start: "center center",
        end : 'bottom top',
        scrub: true,
        pin:'.line_con',
        pinSpacing: true,
        markers : true,
    }
});

const counterUp = window.counterUp.default

function easeOutQuad(t) {
  return t * (2 - t);
}

const el = document.querySelector('.counter');

counterUp(el, {
    duration: 2400,
    delay: 12,
    easing :easeOutQuad
});
