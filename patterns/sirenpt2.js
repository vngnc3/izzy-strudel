setcpm(105/4)

// siren pt 2
// author: izzy

$: s("bd!4").bank("tr808")
  .diode("3:0.8")

_$: s("- [oh*3]!4").bank("tr808").gain(0.5).pan(rand)

_$: s("white").beat("2 5 7 8 11 12 15", 16).rib(2,5)
  .fm(time).fmh(time)
  .trancegate(0.7,55,1)
  .gain(slider(0.8,0,1,0.02))

const lead = [
  "2 1 1 2 1 <1 2> <2 3> 0",
  "2 1 1 2 3 <2 1> <2 0> 1",
  "1 4 5 4 3 <1 2> <1 0> 0"
];

_$: note(pick(lead, "<0 0 0 1 0 0 0 2>")).fast(2).s("sawtooth")
  .trancegate(1.25,222,1)
  .scale("c:minor")
  .trans(-12)
  .acidenv(slider(0.37,0,1,0.01))
  .room(1).rsize(1.2)
  .fm(1).fmh(choose("0", "1"))
  .diode("4:0.3")

$: note("2 2 1 1 2 <1 6> <0 5> 0").s("sawtooth")
  .scale("c:minor")
  .trans(-24)
  .lpf(800)
  .room(1).rsize(1.5)
  .diode("2:0.8")

$: note("1!4").fast(4).s("supersaw")
  .scale("c:minor")
  .trans(12)
  .gain(slider(0.9,0,1,0.05))

const delayLead = slider(0.68,0,1,0.02)
const vibAmt = slider(0,-2,4,0.02)

ANYLEAD: note("1 -!4").fast(12).s('supersaw')
  .scale("c:minor")
  .trans(24)
  .vib(vibAmt).vibmod(4)
  .room(0.9).rsize(4)
  .delay(0.8).delayfb(0.4).delayspeed(1-delayLead).delayfb(delayLead)
  .gain(slider(0,0,1,0.05))
  ._scope()
