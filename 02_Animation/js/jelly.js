// SVG Body Animation
var tl = new TimelineMax({ repeat: -1, repeatDelay: 0 })
  .to("#body,#csapok", 0, { opacity: 0 })
  .to("#body,#csapok", 5, { opacity: 1 })
  //.to("#body,#csapok", 0.7, { opacity: 1 })
  .to("#body,#csapok", 0.7, { rotation: 10 })
  .to("#body,#csapok", 7, {
    rotation: 0,
    ease: Elastic.easeOut.config(0.6, 0.1),
  });

// SVG Leg animation

var tl = new TimelineMax({ repeat: -1, repeatDelay: 2 })
  .to(".st3", 0.7, { rotation: 30 })
  .to(".st3", 7, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 3 })
  .to(".st2", 0.7, { rotation: 30 })
  .to(".st2", 7, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 3 })
  .to(".st0", 0.7, { rotation: 30 })
  .to(".st0", 7, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 4 })
  .to(".st1", 0.7, { rotation: 30 })
  .to(".st1", 7, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 4 })
  .to(".st4", 0.7, { rotation: 30 })
  .to(".st4", 7, { rotation: 0, ease: Elastic.easeOut.config(0.9, 0.1) });
