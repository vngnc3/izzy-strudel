/*

  mathdroid & vngnc presents

██╗░░░██╗░█████╗░██╗██████╗░██████╗░░█████╗░██╗██████╗░
██║░░░██║██╔══██╗██║██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗
╚██╗░██╔╝██║░░██║██║██║░░██║██████╔╝██║░░██║██║██║░░██║
░╚████╔╝░██║░░██║██║██║░░██║██╔══██╗██║░░██║██║██║░░██║
░░╚██╔╝░░╚█████╔╝██║██████╔╝██║░░██║╚█████╔╝██║██████╔╝
░░░╚═╝░░░░╚════╝░╚═╝╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝╚═════╝░

  DEBUT A/V SET, 97KOBOLAB, JUNE 6TH 2026

  __SETLIST__
  dreamz pt. 1    f# minor
  graave          c# minor
  oobm            f# minor
  dreamz pt. 2    f# minor -> g minor

*/

setcpm(125 / 4);
const scalez = "f#:minor";

/*

  PART ONE 
  
█▀▀▄ █▀▀█ █▀▀ █▀▀█ █▀▄▀█ ▀▀█ 　 █▀▀█ ▀▀█▀▀ ░ 　 ▄█░ 
█░░█ █▄▄▀ █▀▀ █▄▄█ █░▀░█ ▄▀░ 　 █░░█ ░░█░░ ▄ 　 ░█░ 
▀▀▀░ ▀░▀▀ ▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ 　 █▀▀▀ ░░▀░░ █ 　 ▄█▄
  
  125 BPM in F# MINOR
*/

const mel = "0 [3 3] 3 2 0 _ 4 5 [4 4] 2 _ 2 0 2 4 5";
const bass = "0 2 3 [<4 5> <6 3>]";

// KICK
_$: s("bd!4").bank("tr505").lpf(1200).diode("1.2:0.8").gain(1.2);
// HATS
_$: s("- hh")
  .fast(4)
  .bank("tr505")
  .hpf(6500)
  .gain(0.72)
  .room(0.62)
  .rsize(1.1)
  .pan(rand);
// SNARE
_$: s("- sd").bank("tr505").fast(2).gain(1.1);
// CLAP
_$: s("- cp").fast(2).bank("tr505").gain(0.34).room(0.62).rsize(1.1);

_$: note(bass)
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
  .rsize(0.4)
  ._scope();

_$: note(mel)
  .slow(2)
  .s("supersaw")
  .scale(scalez)
  .trans(0)
  .detune("0.2, 0.8, 1, 0.52")
  .room(0.87)
  .rsize(1.3)
  .delay(0.45)
  .pg(slider(0, 0, 1.5, 0.01))
  ._pianoroll();

_$: note(mel)
  .slow(2)
  .s("supersaw")
  // .trancegate(1.25, 667, 1) // optional for chorus
  .scale(scalez)
  .trans(12)
  .detune("0.2, 0.8, 0.9, 0.52")
  .room(0.96)
  .rsize(1.6)
  .delay(0.62)
  .gain(0.823)
  .pg(slider(0.5, 0, 1, 0.01))
  ._pianoroll();

/*

  PART TWO 
───────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─████████████████───██████████████─██████████████─██████──██████─██████████████─
─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─
─██░░██████████─██░░████████░░██───██░░██████░░██─██░░██████░░██─██░░██──██░░██─██░░██████████─
─██░░██─────────██░░██────██░░██───██░░██──██░░██─██░░██──██░░██─██░░██──██░░██─██░░██─────────
─██░░██─────────██░░████████░░██───██░░██████░░██─██░░██████░░██─██░░██──██░░██─██░░██████████─
─██░░██──██████─██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─
─██░░██──██░░██─██░░██████░░████───██░░██████░░██─██░░██████░░██─██░░██──██░░██─██░░██████████─
─██░░██──██░░██─██░░██──██░░██─────██░░██──██░░██─██░░██──██░░██─██░░░░██░░░░██─██░░██─────────
─██░░██████░░██─██░░██──██░░██████─██░░██──██░░██─██░░██──██░░██─████░░░░░░████─██░░██████████─
─██░░░░░░░░░░██─██░░██──██░░░░░░██─██░░██──██░░██─██░░██──██░░██───████░░████───██░░░░░░░░░░██─
─██████████████─██████──██████████─██████──██████─██████──██████─────██████─────██████████████─
───────────────────────────────────────────────────────────────────────────────────────────────
  125 BPM in C# MINOR
*/

// DISTORTTTTTT TTTTTHHHHE FUCKING EARDRUMS
// HARDTECH KICK TR909
_$: s("bd!4").bank("tr909").diode("1:2");

// HARDTECH HH FAST
_$: s("hh -")
  .bank("tr808")
  .fast(16)
  .lpf(slider(8021, 3000, 11000, 1))
  .lpq(4);

// HH TWO
_$: s("- hh").bank("tr808").fast(4);

// HARMONY BASS
_$: note("0 7 6 5 <[0 0] [0 1] [2 0] [0 3]> 2 3 4")
  .s("sawtooth")
  .slow(1)
  .scale(scalez)
  .acidenv(0.56)
  .diode("1:0.8");

// PLUCK BASS
_$: note("[0 3 2 3] [0 0 2 1]")
  .s("sawtooth")
  .slow(8)
  .seg(8)
  .scale(scalez)
  .trans(-12)
  .acidenv(slider(0.3, 0, 1, 0.02))
  .diode("1.2:0.5")
  ._scope();
// MAIN ARP
_$: note("1 4 2 4 5 1 0 [0 4] 2 4 8 6 2 0")
  .s("supersaw")
  .trancegate(1.25, 22220, 1) // 44242 good drop seed
  .scale(scalez)
  .trans(0) // transpose 12st for EXTRA LOUDNESS
  .detune("0.3, 2") // DETUNEEEEEEE FOR DA BIG DROP
  .gain(1.1)
  .lpf(slider(3735, 200, 13000, 1))
  .fm(3) // fm3 for extra loudness
  .room(1.5)
  .rsize(0.9)
  .diode("2:0.36")
  .delay(slider(0.9, 0, 1, 0.02))
  .delayfb(0.4)
  .pg(slider(0.6, 0, 1, 0.01))
  ._pianoroll();

/*
  
  PART THREE 
    
█▀█ █░█ ▀█▀   █▀█ █▀▀
█▄█ █▄█ ░█░   █▄█ █▀░
  
█▀▀▄ █▀▀█ █▀▀▄ █░░█    //░ █▀▄▀█ █▀▀ █▀▄▀█ █▀▀█ █▀▀█ █░░█ 
█▀▀▄ █░░█ █░░█ █▄▄█   //░  █░▀░█ █▀▀ █░▀░█ █░░█ █▄▄▀ █▄▄█ 
▀▀▀░ ▀▀▀▀ ▀▀▀░ ▄▄▄█  //░   ▀░░░▀ ▀▀▀ ▀░░░▀ ▀▀▀▀ ▀░▀▀ ▄▄▄█
  
  125 BPM in F# MINOR
*/

const oobmDrum = "akailinn";
const bassSynth = "sawtooth";
const leadSynth = "supersaw";

const arpArray = [
  "<0 2 4 2 8>*16",
  "<0 5 7 9 8>*16",
  "<0 3 6 8 2>*16",
  "<6 4 5 7 9>*16",
];

const bassSelector = "<0 0 0 0>"; // default 0 0 0 0, 0 2 1 0, etc.

// DISTORTTTTTT TTTTTHHHHE FUCKING EARDRUMS
// HARDTECH KICK TR909
_OOBMKICKTECH: s("bd!4").bank("tr909").diode("1:2").duckorbit(2);

// HARDTECH HH FAST
_OOBMFASTHAT: s("hh -")
  .bank("tr808")
  .fast(16)
  .lpf(slider(8021, 3000, 11000, 1))
  .lpq(4);

_OOBMHH: s("[ - hh - hh]*2")
  .bank(oobmDrum)
  .hpf(7000)
  .hpq(6)
  .lpf(8000)
  .lpq(4)
  .room(0.7)
  .rsize(2)
  .gain(slider(0.18, 0, 0.25, 0.01));

_OOBMACIDBASS: note(pick(arpArray, bassSelector.slow(2)))
  .scale(scalez)
  .s(bassSynth)
  .trans(-12)
  .acidenv(slider(0, 0, 1, 0.01))
  .o(3)
  .delay(slider(0.75, 0, 1, 0.05))
  .delayfb(slider(0.25, 0, 1, 0.05))
  .distort("1:0.5:diode")
  ._pianoroll();
_ANYLEAD: note("<0 _ _ _>*16")
  .scale(scalez)
  .s(leadSynth)
  .sustain(1)
  .slow(perlin.range(0.25, 1.25).fast(2))
  .vib(8)
  .vibmod(0.16)
  .penv(1)
  .pdec(0.08)
  .trans(choose(0, 12).slow(16))
  .acidenv(slider(0.81, 0, 1, 0.01))
  .o(2)
  .delay(slider(0.8, 0, 1, 0.05))
  .delayfb(slider(0.6, 0, 1, 0.05))
  .room(1.5)
  .rsize(4)
  .gain(slider(0.36, 0, 1, 0.02))
  .spiral({ steady: 0.96 })
  ._scope();
_ACIDBASSLOW: note(pick(arpArray, bassSelector.slow(2)))
  .scale(scalez)
  .s(bassSynth)
  .trans(-24)
  .acidenv(slider(0.11, 0, 1, 0.01))
  .o(3)
  .delay(slider(0.7, 0, 1, 0.05))
  .delayfb(slider(0.45, 0, 1, 0.05))
  .distort("2:0.25:diode");

_NOISE: note("c _ _ _")
  .s("white")
  .seg(0.5)
  .attack(8)
  .sustain(1)
  .release(4)
  .room(1.6)
  .rsize(3.5)
  .gain(sine.range(0.1, 0.18).slow(8))
  ._spectrum();

/*
  
  PART IV 
  
█▀▀▄ █▀▀█ █▀▀ █▀▀█ █▀▄▀█ ▀▀█ 　 █▀▀█ ▀▀█▀▀ ░ 　 █▀█ 
█░░█ █▄▄▀ █▀▀ █▄▄█ █░▀░█ ▄▀░ 　 █░░█ ░░█░░ ▄ 　 ░▄▀ 
▀▀▀░ ▀░▀▀ ▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ 　 █▀▀▀ ░░▀░░ █ 　 █▄▄
  
  128 BPM in F# MINOR...? 
*/

const drumz = "tr505";
const drmzpt2mel = "5 5 5 4 - 3 - 3 3 4 2 _ [4 3] [3 2] [0 1] [2 3]";
const drmzpt2bass = "0 2 3 [<4 5> <6 3>]";
const phrase =
  "0 - - - 0 [0 0] 0 _ [0 0 1 0] - 0 - 0 [1 0 0 1 0 0] [2 -] [3 <5 6>]";

// DISTORTTTTTT TTTTTHHHHE FUCKING EARDRUMS
// HARDTECH KICK TR909
_OOBMKICKTECH: s("bd!4").bank("tr909").diode("1:2").duckorbit(2);

// HARDTECH HH FAST
_OOBMFASTHAT: s("hh -")
  .bank("tr808")
  .fast(16)
  .lpf(slider(9415, 3000, 11000, 1))
  .lpq(4);

_DRMZHATSTWO: s("- hh")
  .fast(4)
  .bank(drumz)
  .gain(0.32)
  .pan(rand.range(0.2, 0.8))
  .room(0.1);

_DRMZSNARETHREE: s("- sd").fast(2).bank(drumz).gain(1.05);

_DRMZCLAPTHREE: s("- cp").fast(2).bank(drumz).gain(0.34).room(0.52).rsize(0.9);

_LARGETRANCESYNTH: note(brak(drmzpt2mel))
  .slow(2)
  .s("supersaw") // optionally, brak(mel)
  .scale(scalez)
  .trancegate(1.5, 2214, 1) // gate for DA BIG DROP; default seed 2214
  .trans(12) // trans 12 for BIG DROP
  .detune("0.2, 0.8, 1, 0.52")
  .room(0.87)
  .rsize(1.3)
  .delay(0.46)
  .pg(slider(0.82, 0, 1.5, 0.01))
  .o(3)
  ._pianoroll();

_ANYMPHRASE: note(phrase)
  .slow(4)
  .s("supersaw")
  .scale(scalez)
  .trans(0) // -12 for intro and mid, trans zero for drop til the end
  .detune("0.1, -0.2, 0.3")
  .decay(0.18)
  .fm(rand.range(1, 2))
  .fmh(2)
  .delay(0.57)
  .delayfb(0.4)
  .acidenv(choose("0.22", "0.28"))
  .diode("1.32:0.56")
  .room(0.8)
  .rsize(0.4)
  .pan(rand.range(0.3, 0.7))
  .pg(slider(0, 0, 1, 0.01))
  ._scope();

_DRMZBASSPARTTWOEND: note(drmzpt2bass)
  .slow(8)
  .s("sawtooth")
  .scale(scalez)
  .trans(-24)
  .seg(16)
  .acidenv(slider(0.13, 0, 1, 0.01))
  .lpq(1.8)
  .pg(slider(1.5, 0, 1.5, 0.01))
  ._scope();
