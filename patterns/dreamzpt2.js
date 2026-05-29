/*
 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀
⠀⠀⢀⡤⠒⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣀⡤
⠀⢀⠏⠀⠀⠀⢀⡇⠀⠀⠀⠀⠠⠀⠀⠀⠀⠉⠙⡇
⠀⠸⡀⠀⠀⠒⠁⠀⠀⠀⠀⣠⢯⠄⠀⠀⠀⠀⠀⠀⠨
⠀⠀⢣⡀⠀⠀⠀⠀⠀⠄⡜⢽⣿⣾⡵⠤⠆⠐⢀⠀⠈⡆
⠀⠀⠀⠀⠑⠒⠒⠒⠀⠀⠀⠀⢯⠆⠀⠀⠀⠀⠀⠀⠀⡃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢀⠀⢂⠀⡜
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣢⠶⣟⠓⠦⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣀⡴⠒⠘⠉⠉⠁⠀⠀⠀⠀⠇
⠀⠀⠀⠀⠀⠀⡎⠀⢠⠖⠤⢄
⠀⠀⠀⠀⠀⠸⡄⠀⠈⠣⠂⠀⡇
⠀⠀⠀⠀⠀⠀⠈⠒⠢⠤⠤⠞⠁
                                                                                                                   
         88                                                                                                88  88  
         88                                                                                      ,d        ""  ""  
         88                                                                                      88                
 ,adPPYb,88  8b,dPPYba,   ,adPPYba,  ,adPPYYba,  88,dPYba,,adPYba,   888888888     8b,dPPYba,  MM88MMM     88  88  
a8"    `Y88  88P'   "Y8  a8P_____88  ""     `Y8  88P'   "88"    "8a       a8P"     88P'    "8a   88        88  88  
8b       88  88          8PP"""""""  ,adPPPPP88  88      88      88    ,d8P'       88       d8   88        88  88  
"8a,   ,d88  88          "8b,   ,aa  88,    ,88  88      88      88  ,d8"          88b,   ,a8"   88,       88  88  
 `"8bbdP"Y8  88           `"Ybbd8"'  `"8bbdP"Y8  88      88      88  888888888     88`YbbdP"'    "Y888     88  88  
                                                                                   88                              
                                                                                   */
setcpm(128 / 4);
const drumz = "tr505";

const scalez = "f#:minor"; // f# minor but consider resolving to g minor
const mel = "5 5 5 4 - 3 - 3 3 4 2 _ [4 3] [3 2] [0 1] [2 3]";
const bass = "0 2 3 [<4 5> <6 3>]";
const phrase =
  "0 - - - 0 [0 0] 0 _ [0 0 1 0] - 0 - 0 [1 0 0 1 0 0] [2 -] [3 <5 6>]";

_$: s("bd!4")
  .bank(drumz)
  .lpf(1000)
  .diode("1.2:0.8")
  .gain(1.2)
  .duck(3)
  .duckdepth(0.6);

_$: s("- hh").fast(4).bank(drumz).gain(0.42).pan(rand.range(0.2, 0.8));

_$: s("- sd").fast(2).bank(drumz).gain(1.05);

_$: s("- cp").fast(2).bank(drumz).gain(0.34).room(0.62).rsize(1.1);

$: note(mel)
  .slow(2)
  .s("supersaw") // optionally, brak(mel)
  .scale(scalez)
  // .trancegate(1.5,2214,1) // gate for chorus
  .trans(0)
  .detune("0.2, 0.8, 1, 0.52")
  .room(0.87)
  .rsize(1.3)
  .delay(0.46)
  .pg(slider(0, 0, 1.5, 0.01))
  .o(3)
  ._pianoroll();

$: note(phrase)
  .slow(4)
  .s("supersaw")
  .scale(scalez)
  .trans(-12)
  .detune("0.1, -0.2, 0.3")
  .decay(0.18)
  .fm(rand.range(1, 2))
  .fmh(2)
  .delay(0.57)
  .delayfb(0.4)
  .acidenv(0.22)
  .diode("1.62:0.66")
  .room(0.8)
  .rsize(0.4)
  .pan(rand.range(0.3, 0.7))
  .pg(slider(0.3, 0, 1, 0.01));

$: note(bass)
  .slow(8)
  .s("sawtooth")
  .scale(scalez)
  .trans(-24)
  .seg(16)
  .acidenv(slider(0.24, 0, 1, 0.01))
  .lpq(2)
  .pg(slider(1.5, 0, 1.5, 0.01));
