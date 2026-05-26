setcpm(120/4)
/*

⠄⠄⢂⠢⢨⣶⡾⢷⣦⡅⡂⠅⡡⢁⠂⡂⡂⢅⢑⣴⣾⠾⣮⣌⢐⠠⠄
⠄⠄⢂⢊⢿⡏⠡⠂⢽⡗⢌⢂⠢⡁⠪⡐⠄⢕⢸⣿⠑⠡⢸⡿⢐⠨⠄
⠄⠄⠅⡢⡙⠿⣾⢼⠟⡕⡑⢔⠡⡊⢌⠢⡑⡑⡌⡻⢷⢷⠟⢍⠢⡁⠂
⠄⠄⠌⡂⡪⡑⡆⣇⣣⣱⣸⣰⣱⣜⣬⣪⣬⣦⣣⣎⣖⣔⣕⢅⢕⠨⠄
⠄⠄⡑⣬⣺⡾⣿⣿⣻⣯⣿⣟⣿⣽⣿⣻⣿⣾⢿⣻⣿⣻⣯⣿⣲⢅⠄
⠄⠄⢪⢗⣯⡏⠙⣯⣿⣯⣷⣿⣿⣽⣾⣿⢷⣿⡿⣿⣻⠝⢓⡷⡯⡣⠄
⠄⠄⠈⢝⢞⡿⣦⡀⠙⠯⢿⢷⣿⣽⢿⣾⢿⡯⡟⠏⢁⢤⡿⡝⡕⠁⠄
⠄⠄⠄⠄⠑⠝⣗⣟⡷⣤⣀⣁⠈⠈⠉⠊⣁⡠⣤⢶⣻⢽⠱⠑⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠐⠸⠹⠽⡽⣽⣻⣻⣟⣟⣷⣻⢽⢫⠣⠃⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠈⠁⠣⢣⢓⢗⢳⢹⢸⠸⠈⡀⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄

           88                                       
           ""                                                                                           
,adPPYba,  88  8b,dPPYba,   ,adPPYba,  8b,dPPYba,   
I8[    ""  88  88P'   "Y8  a8P_____88  88P'   `"8a  
 `"Y8ba,   88  88          8PP"""""""  88       88  
aa    ]8I  88  88          "8b,   ,aa  88       88  
`"YbbdP"'  88  88           `"Ybbd8"'  88       88  

                                      author: izzy
*/

_DRUMS: s("bd!4").bank('tr808')
  .duckorbit(2).duckdepth(0.8)

BASS: note("a2 _ a2 _ a2 _ c3 _ a2 a#2 a2 -").s('z_sawtooth')
  .trans(-12)
  .acidenv(slider(0.12,0,1,0.01))
  .diode("3:0.18")
  .orbit(2)
  .fm("0 1 2 2")
  .room(0.8).rsize(0.5)
  .delay(0.4).delayfb(0.2).delayspeed(0.3)
  .gain(slider(0.3,0,1,0.05))

const delayLead = slider(0.76,0,1,0.02)
const vibAmt = slider(1.3,-2,4,0.02)

LEAD: note("a4 -!3").fast(12).s('supersaw')
  .trans(0)
  .vib(vibAmt).vibmod(4)
  .room(0.9).rsize(4)
  .delay(0.8).delayfb(0.4).delayspeed(1-delayLead).delayfb(delayLead)
  .gain(slider(0.1,0,1,0.05))
  ._scope()
