setcpm(120/4)

/* ☆ *　. 　☆
　　. ∧＿∧　∩　* ☆
* ☆ ( ・∀・)/ .
　. ⊂　　 ノ* ☆
☆ * (つ ノ .☆
　　 (ノ       */
                                                                                                                                   
/*                                                                                                                a8"  ad888888b,  
88                                                 ,d                                                           a8"   d8"     "88  
88                                                 88                                                         a8"             a8P  
88,dPPYba,    ,adPPYba,  ,adPPYYba,  8b,dPPYba,  MM88MMM  ,adPPYba,  8b       d8   ,adPPYba,  ,adPPYba,     a8"            aad8"   
88P'    "8a  a8P_____88  ""     `Y8  88P'   "Y8    88    a8P_____88  `8b     d8'  a8P_____88  I8[    ""     "8a            ""Y8,   
88       88  8PP"""""""  ,adPPPPP88  88            88    8PP"""""""   `8b   d8'   8PP"""""""   `"Y8ba,        "8a             "8b  
88       88  "8b,   ,aa  88,    ,88  88            88,   "8b,   ,aa    `8b,d8'    "8b,   ,aa  aa    ]8I         "8a   Y8,     a88  
88       88   `"Ybbd8"'  `"8bbdP"Y8  88            "Y888  `"Ybbd8"'      Y88'      `"Ybbd8"'  `"YbbdP"'           "8a  "Y888888P'  
                                                                         d8'                                                       
                                                                        d*/

// on a# major pentatonic A# C D F G

// KICK: sound("bd - bd - bd - bd*2 bd").bank("tr909")
//   .distort("1.9:0.44:diode")
//   .lpf(slider(1000,50,1000,1))
//   .duckorbit(2)
//   .duckattack(0.3)
//   ._punchcard()

HH: sound("[hh - hh -] [- - hh -] [- - hh -] [- - hh -]").bank("tr909")
  .gain(slider(0.11,0,0.2,0.01))
  .crush(rand.range(4,6))
  .room(0.36)
  .delay(rand.range(0.48,0.823))
  .delayfeedback(slider(0.8,0,1,0.1))

BASS: note("<[a#3,f4,a#4] [g3,d4,g4] [d3,d4]@2 [a#3,f4,a#4] [g3,d4,g4] [d3,d4,f#4]@2>")
  .s("gm_synth_brass_2")
  .trans(-24)
  .orbit(2)
  .distort("4:0.11:diode")
  .lpf(slider(50,50,400,1))
  .room(.9)
  .rsize(4)
  ._pianoroll()
const arpeggiator = [
  "{a#3 c4 d4 f4}%16",
  "{a#3 c4 d4 g4}%16"
]

ARP: note(pick(arpeggiator, "<0 1>".slow(2)))
  .trans(choose(-12,0,12).slow(64))  // change this arbitrarily; default 64
  .sound("supersaw")
  .lpf(slider(100,50,400,1))
  .attack(0)
  .decay(1)
  .sustain(0.5)
  .release(0.01)
  .distort("4:0.12:diode")
  .room(sine.range(0.72,0.99))
  .rsize(4)
  .delay(rand.range(0.48,0.823))
  .delayfeedback(slider(0.6,0,1,0.1))
  .gain(0.9)
  .pianoroll()

