setcpm(125/4)
            /* 
⠀⠀⠀⠀⡏⢢⡁⠂⠤⣀⣀⣀⣀⣀ ⠤⠐⢈⡔⢹
⠀⠀⠀⠀⢿⡀⠙⠆⠀⠉⠀⠀⠀⠀⠉⠀⠰⠋⢀⡿
⠀⠀⠀⠀⠈⢷⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡾⠁
⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹
⣰⠊⠉⠉⠉⡇⠀⠢⣤⣄⠀⠀ ⣠⣤⠔⠀⢸
⠙⠓⠒⢦⠀⠱⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠎
⠀⠀⠀⠀⡇⠀⠀⠏⠑⠒⠀⠉⠀⠒⠊⠹
⡎⠉⢹⠀⠙⡶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⠀⠀⡏⠉⢱
⢧⡈⠛⠉⠉⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠉⠉⠋⢁⡼
⠀⢉⣿⠖⠚⠛⢋⢀⠀⠀⠀⠀⠀⠀⠀⡀⡙⠛⠓⠲⣿⣄
⠀⢸⡇⠀⠀⠀⡞⠁⠈⡃⠀⠀⠀⠀⢘⠁⠈⢳⠀⠀⠀⢸⡇
⠀⠈⢷⣄⠀⠀⠙⠦⠌⠑⠢⠤⠔⠊⠁⢠⠎⠀⠀⣠⡾⠁
⠀⠀⠀⠈⠛⠲⠤⣤⣀⣀⣀⣀⣠⣤⣚⣡⠤⠖⠛⠁ 

                                                                                                                                                                                                                    
                                                     ad88     88                                 88                      d8                                                                                         
                            ,d                      d8"       88                                 88                    ,8P'                                                                                         
                            88                      88        88                                 88                   d8"                                                                                           
 ,adPPYba,   88       88  MM88MMM      ,adPPYba,  MM88MMM     88,dPPYba,    ,adPPYba,    ,adPPYb,88  8b       d8    ,8P'  88,dPYba,,adPYba,    ,adPPYba,  88,dPYba,,adPYba,    ,adPPYba,   8b,dPPYba,  8b       d8  
a8"     "8a  88       88    88        a8"     "8a   88        88P'    "8a  a8"     "8a  a8"    `Y88  `8b     d8'   d8"    88P'   "88"    "8a  a8P_____88  88P'   "88"    "8a  a8"     "8a  88P'   "Y8  `8b     d8'  
8b       d8  88       88    88        8b       d8   88        88       d8  8b       d8  8b       88   `8b   d8'  ,8P'     88      88      88  8PP"""""""  88      88      88  8b       d8  88           `8b   d8'   
"8a,   ,a8"  "8a,   ,a88    88,       "8a,   ,a8"   88        88b,   ,a8"  "8a,   ,a8"  "8a,   ,d88    `8b,d8'  d8"       88      88      88  "8b,   ,aa  88      88      88  "8a,   ,a8"  88            `8b,d8'    
 `"YbbdP"'    `"YbbdP'Y8    "Y888      `"YbbdP"'    88        8Y"Ybbd8"'    `"YbbdP"'    `"8bbdP"Y8      Y88'  8P'        88      88      88   `"Ybbd8"'  88      88      88   `"YbbdP"'   88              Y88'     
                                                                                                         d8'                                                                                               d8'      
                                                                                                        d8'                                                                                               d8'       
                                                                                                       */       

const drumMachine = 'akailinn'
const bassSynth = 'sawtooth'
const leadSynth = 'supersaw'
const scale = "f#:minor"

const arpArray = [
  "<0 2 4 2 8>*16",
  "<0 5 7 9 8>*16",
  "<0 3 6 8 2>*16",
  "<6 4 5 7 9>*16",
]

const bassSelector = "<0 0 0 0>" // default 0 0 0 0, 0 2 1 0, etc.

KICK: s("[ bd bd ]*2")
  .bank(drumMachine)
  .lpf(slider(679,500,2000,1))
  .lpq(5)
  // .duckorbit(2)
  .distort("2:0.67:diode")
  .gain(slider(0,0,1,0.02))

HATS: s("[ - hh - hh]*2").bank(drumMachine)
  .hpf(7000).hpq(6)
  .lpf(8000).lpq(4)
  .room(0.7)
  .rsize(2)
  .gain(slider(0,0,0.25,0.01))

ACIDBASS: note(pick(arpArray, bassSelector.slow(2))).scale(scale).s(bassSynth)
  .trans(-12)
  .acidenv(slider(0.26,0,1,0.01))
  .o(3)
  .delay(slider(0.65,0,1,0.05))
  .delayfb(slider(0.60,1,0.05))
  .distort("1:0.5:diode")
  ._pianoroll()
ANYLEAD: note("<0 _ _ _>*16").scale(scale).s(leadSynth)
  .sustain(1)
  .slow(perlin.range(0.25,1.25).fast(2))
  .vib(8).vibmod(0.16)
  .penv(1).pdec(0.08)
  .trans(choose(0,12).slow(16))
  .acidenv(slider(0,0,1,0.01))
  .o(2)
  .delay(slider(0.7,0,1,0.05))
  .delayfb(slider(0.45,0,1,0.05))
  .room(1.5)
  .rsize(4)
  .gain(slider(0.38,0,1,0.02))
  .spiral({ steady: .96 })
  ._scope()
ACIDBASSLOW: note(pick(arpArray, bassSelector.slow(2))).scale(scale).s(bassSynth)
  .trans(-24)
  .acidenv(slider(0.09,0,1,0.01))
  .o(3)
  .delay(slider(0.5,0,1,0.05))
  .delayfb(slider(0.45,0,1,0.05))
  .distort("2:0.25:diode")

NOISE: note('c _ _ _').s('white')
  .seg(0.5)
  .attack(8)
  .sustain(1)
  .release(4)
  .room(1.6)
  .rsize(3.5)
  .gain(sine.range(0.1,0.18).slow(8))
  ._spectrum()
