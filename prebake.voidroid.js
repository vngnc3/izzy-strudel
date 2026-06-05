/*

⠶⣮⢿⣿⡏⡼⡿⠛⠛⣛⠻⠿⠋⣿⡿⠿⣋⣙⣔⢻
⢁⢈⣈⡑⢌⢃⣀⣤⣄⠉⠻⣶⣛⣛⣔⣮⣅⡀⢈⠑   mathdroid & vngnc presents
⢔⢽⢿⣿⣿⣿⣿⣿⣿⣿⡄⡉⠫⢟⠋⠉⠉⠹⢛⣴     // VOIDROID A/V SET //
⠨⣳⣿⣷⣭⣧⣯⣷⣿⣿⣿⣦⣄⡀⠄⠐⣝⠟⠯⣟
⠄⠳⣯⣿⣿⢿⣟⢿⠿⠿⢽⠛⢋⠫⠄⠄⠙⠛⠟⠿    strudel.cc / R3F stack 😈
⢀⠄⢠⡠⠈⠈⣬⣄⠄⠄⠄⠄⡠⢠⣶⣕⡀⠄⠄⢀
⠄⠄⠈⢿⣷⣦⣿⣿⣮⡶⣴⣲⣾⣿⡿⡿⣳⢀⠄⢷  ALGORAPTURE → NULL VALLEY 🜃
⠄⠲⡲⡀⢻⣿⣽⣿⣿⣿⢏⡻⣿⣿⡯⡫⣪⢖⠄⢀   @97KOBOLAB  ROW9  JAKARTA
⠄⠄⠄⠄⠄⠑⣿⣻⠛⡠⡵⡿⢾⢮⢫⢯⡳⡯⣪⠢        Sat, 6.6.2026
⢔⢀⠄⠄⠄⠄⠈⢒⢶⠠⡶⠶⣲⣱⢱⢕⡯⡛⡐⡐        19:00 onwards
⡕⠄⠄⢀⢔⡄⡀⢀⢝⢶⠾⢿⢿⢗⠗⠉⠄⡂⠔⡜
⣗⡕⡌⡆⡿⣽⣾⣾⣪⡳⣕⡁⠄⠄⠄⠄⠠⡠⡱⡹
⣿⢽⢮⢧⢯⣿⣿⣿⣿⣷⣽⣯⡄⠄⠄⠄⣌⢎⢎⢮
⣿⣽⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣾⣾⣿⣿⣷

*/

const ratchet = register("ratchet", (pat) => pat.sometimes(ply(2)));

window.registerFunc = (name, func) => {
  //ensures it will work in mondo notation
  strudelScope[name] = func;
  //ensures it will work in mini notation
  window[name] = func;
};

// custom strobe
const { strobe } = registerControl("strobe");
const $strobe = Pattern.prototype.strobe;
Pattern.prototype.strobe = function (value) {
  return $strobe.call(this, value).onTrigger((hap) => {
    const color = hap.value.strobe;
    if (!color) return;
    document.body.style.transition = "background-color 0ms";
    document.body.style.backgroundColor = color;
    requestAnimationFrame(() => {
      document.body.style.transition = "background-color 150ms ease-out";
      document.body.style.backgroundColor = "";
    });
  }, false); // false = don't kill audio
};

register("acidenv", (x, pat) =>
  pat
    .lpf(100)
    .lpenv(x * 9)
    .lps(0.2)
    .lpd(0.12)
    .lpq(2),
);

register("pg", (pgain, x) => {
  return x.mul(postgain(pgain));
});

// fill — fills gaps between events, making the gate pattern continuous
register("fill", function (pat) {
  return new Pattern(function (state) {
    const lookbothways = 1;
    const haps = pat.query(
      state.withSpan(
        (span) =>
          new TimeSpan(
            span.begin.sub(lookbothways),
            span.end.add(lookbothways),
          ),
      ),
    );
    const onsets = haps
      .map((hap) => hap.whole.begin)
      .sort((a, b) => a.compare(b))
      .filter((x, i, arr) => i == arr.length - 1 || x.ne(arr[i + 1]));
    const newHaps = [];
    for (const hap of haps) {
      if (hap.part.begin.gte(state.span.end)) continue;
      const next = onsets.find((onset) => onset.gte(hap.whole.end));
      if (next === undefined) continue;
      if (next.lte(state.span.begin)) continue;
      const whole = new TimeSpan(hap.whole.begin, next);
      const part = new TimeSpan(
        hap.part.begin.max(state.span.begin),
        next.min(state.span.end),
      );
      newHaps.push(new Hap(whole, part, hap.value, hap.context, hap.stateful));
    }
    return newHaps;
  });
});

// trancegate
register("trancegate", (density, seed, length, x) => {
  density = reify(density).add(0.5);
  return x
    .struct(rand.mul(density).round().seg(16).rib(seed, length))
    .fill()
    .clip(0.7);
});
