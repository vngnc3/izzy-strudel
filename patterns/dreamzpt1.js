setcpm(125 / 4);
const drumz = "tr505";
const scalez = "f#:minor";
const mel = "0 [3 3] 3 2 0 _ 4 5 [4 4] 2 _ 2 0 2 4 5";
const bass = "0 2 3 [<4 5> <6 3>]";

/*

// dreamz pt 1 
// written by izzy 

*/

$: s("bd!4").bank(drumz).lpf(1200).diode("1.2:0.8").gain(1.2);

$: s("- hh")
  .fast(4)
  .bank(drumz)
  .hpf(6500)
  .gain(0.72)
  .room(0.62)
  .rsize(1.1)
  .pan(rand);

$: s("- sd").fast(2).bank(drumz).gain(1.1);

$: s("- cp").fast(2).bank(drumz).gain(0.34).room(0.62).rsize(1.1);

$: note(bass)
  .slow(8)
  .s("sawtooth")
  .scale(scalez)
  .seg(16)
  .trans(-24)
  .acidenv(0.2)
  .gain(2.8) // continous
  // .gain(choose("0", "2.8").slow(1)) // slow 1 or 2 for groove
  .diode("0.3:1.6")
  .room(0.3)
  .rsize(0.4);

$: note(mel)
  .slow(2)
  .s("supersaw")
  .scale(scalez)
  .trans(0)
  .detune("0.2, 0.8, 1, 0.52")
  .room(0.87)
  .rsize(1.3)
  .delay(0.45)
  .pg(slider(0, 0, 1.5, 0.01));

$: note(mel)
  .slow(2)
  .s("supersaw")
  .trancegate(1.25, 667, 1) // optional for chorus
  .scale(scalez)
  .trans(12)
  .detune("0.2, 0.8, 0.9, 0.52")
  .room(0.96)
  .rsize(1.6)
  .delay(0.62)
  .gain(0.823)
  .pg(slider(0, 0, 1, 0.01));
