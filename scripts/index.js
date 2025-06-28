const count = document.getElementById('count');
const head = document.getElementById('head');
const giftbox = document.getElementById('merrywrap');
const canvasC = document.getElementById('c');
const slide = document.getElementById('slide');

let birthdate = 'Jun 05, 2025';
let confeteLigado = false;

let newDate = new Date(`${birthdate} 00:00:00`);
let dateNow = new Date();
var config = {
  // birthdate: 'Jul 05, 2022',
  birthdate: newDate.getFullYear() < dateNow.getFullYear() ? birthdate.replace(`${newDate.getFullYear()}`, `${dateNow.getFullYear()}`) : birthdate,
  name: 'DÉBORA CECÍLIA'
};


console.log(newDate.getFullYear() < dateNow.getFullYear())
console.log(config.birthdate)
let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();

console.log(config.birthdate)
function hideEverything() {
  head.style.display = 'none';
  count.style.display = 'none';
  giftbox.style.display = 'none';
  canvasC.style.display = 'none';
  slide.style.display = 'none';
}


hideEverything();


const confettiSettings = { target: 'confetti' };
const confetti = new window.ConfettiGenerator(confettiSettings);
desliga_confete()


const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;



console.log(countDown)
x = setInterval(function() {
  let now = new Date().getTime(),
  distance = countDown - now;
  console.log(day + 'dia') // console de verificação
  console.log(distance + 'distance')
  console.log(hour + 'hour')

  document.getElementById('yearauto').textContent = new Date().getFullYear();


  //document.getElementById('day').innerText = Math.floor(distance / day);
  document.getElementById('hour').innerText = Math.floor(
    (distance) / hour // troque para conseguir os dias (distance % day) / hour
  );
  document.getElementById('minute').innerText = Math.floor(
    (distance % hour) / minute
  );
  document.getElementById('second').innerText = Math.floor(
    (distance % minute) / second
  );

  let w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext('2d'),
    hw = w / 2, // half-width
    hh = h / 2,
    opts = {
      // strings: ['Feliz ' + 'aniversario meu amor, ' + 'Eu te amo.', 'Acima alguns dos melhores momentos', ' que passei com você', 'com a musica que me lembra vc.'],
      strings: ['', ''],
      charSize: 30,
      charSpacing: 30,
      lineHeight: 40,

      cx: w / 2,
      cy: h / 2,

      fireworkPrevPoints: 10,
      fireworkBaseLineWidth: 5,
      fireworkAddedLineWidth: 8,
      fireworkSpawnTime: 200,
      fireworkBaseReachTime: 30,
      fireworkAddedReachTime: 30,
      fireworkCircleBaseSize: 20,
      fireworkCircleAddedSize: 10,
      fireworkCircleBaseTime: 30,
      fireworkCircleAddedTime: 30,
      fireworkCircleFadeBaseTime: 10,
      fireworkCircleFadeAddedTime: 5,
      fireworkBaseShards: 5,
      fireworkAddedShards: 5,
      fireworkShardPrevPoints: 3,
      fireworkShardBaseVel: 4,
      fireworkShardAddedVel: 2,
      fireworkShardBaseSize: 3,
      fireworkShardAddedSize: 3,
      gravity: 0.1,
      upFlow: -0.1,
      letterContemplatingWaitTime: 360,
      balloonSpawnTime: 20,
      balloonBaseInflateTime: 10,
      balloonAddedInflateTime: 10,
      balloonBaseSize: 20,
      balloonAddedSize: 20,
      balloonBaseVel: 0.4,
      balloonAddedVel: 0.4,
      balloonBaseRadian: -(Math.PI / 2 - 0.5),
      balloonAddedRadian: -1
    },
    calc = {
      totalWidth:
        opts.charSpacing *
        Math.max(opts.strings[0].length, opts.strings[1].length)
    },
    Tau = Math.PI * 2,
    TauQuarter = Tau / 4,
    letters = [];

  ctx.font = opts.charSize + 'px Verdana';

  function Letter(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;

    this.dx = -ctx.measureText(char).width / 2;
    this.dy = +opts.charSize / 2;

    this.fireworkDy = this.y - hh;

    let hue = (x / calc.totalWidth) * 360;
    console.log(hue + 'hue')
    this.color = 'hsl(hue,80%,50%)'.replace('hue', hue);
    this.lightAlphaColor = 'hsla(hue,80%,light%,alp)'.replace('hue', hue);
    this.lightColor = 'hsl(hue,80%,light%)'.replace('hue', hue);
    this.alphaColor = 'hsla(hue,80%,50%,alp)'.replace('hue', hue);

    this.reset();
  }
  Letter.prototype.reset = function() {
    this.phase = 'firework';
    this.tick = 0;
    this.spawned = false;
    this.spawningTime = (opts.fireworkSpawnTime * Math.random()) | 0;
    this.reachTime =
      (opts.fireworkBaseReachTime +
        opts.fireworkAddedReachTime * Math.random()) |
      0;
    this.lineWidth =
      opts.fireworkBaseLineWidth + opts.fireworkAddedLineWidth * Math.random();
    this.prevPoints = [[0, hh, 0]];
  };
  Letter.prototype.step = function() {
    if (this.phase === 'firework') {
      if (!this.spawned) {
        ++this.tick;
        if (this.tick >= this.spawningTime) {
          this.tick = 0;
          this.spawned = true;
        }
      } else {
        ++this.tick;

        let linearProportion = this.tick / this.reachTime,
          armonicProportion = Math.sin(linearProportion * TauQuarter),
          x = linearProportion * this.x,
          y = hh + armonicProportion * this.fireworkDy;

        if (this.prevPoints.length > opts.fireworkPrevPoints)
          this.prevPoints.shift();

        this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

        let lineWidthProportion = 1 / (this.prevPoints.length - 1);

        for (let i = 1; i < this.prevPoints.length; ++i) {
          let point = this.prevPoints[i],
            point2 = this.prevPoints[i - 1];

          ctx.strokeStyle = this.alphaColor.replace(
            'alp',
            i / this.prevPoints.length
          );
          ctx.lineWidth = point[2] * lineWidthProportion * i;
          ctx.beginPath();
          ctx.moveTo(point[0], point[1]);
          ctx.lineTo(point2[0], point2[1]);
          ctx.stroke();
        }

        if (this.tick >= this.reachTime) {
          this.phase = 'contemplate';

          this.circleFinalSize =
            opts.fireworkCircleBaseSize +
            opts.fireworkCircleAddedSize * Math.random();
          this.circleCompleteTime =
            (opts.fireworkCircleBaseTime +
              opts.fireworkCircleAddedTime * Math.random()) |
            0;
          this.circleCreating = true;
          this.circleFading = false;

          this.circleFadeTime =
            (opts.fireworkCircleFadeBaseTime +
              opts.fireworkCircleFadeAddedTime * Math.random()) |
            0;
          this.tick = 0;
          this.tick2 = 0;

          this.shards = [];

          let shardCount =
              (opts.fireworkBaseShards +
                opts.fireworkAddedShards * Math.random()) |
              0,
            angle = Tau / shardCount,
            cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = 1,
            y = 0;

          for (let i = 0; i < shardCount; ++i) {
            let x1 = x;
            x = x * cos - y * sin;
            y = y * cos + x1 * sin;

            this.shards.push(new Shard(this.x, this.y, x, y, this.alphaColor));
          }
        }
      }
    } else if (this.phase === 'contemplate') {
      ++this.tick;

      if (this.circleCreating) {
        ++this.tick2;
        let proportion = this.tick2 / this.circleCompleteTime,
          armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
          .replace('light', 50 + 50 * proportion)
          .replace('alp', proportion);
        ctx.beginPath();
        ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 > this.circleCompleteTime) {
          this.tick2 = 0;
          this.circleCreating = false;
          this.circleFading = true;
        }
      } else if (this.circleFading) {
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        ++this.tick2;
        let proportion = this.tick2 / this.circleFadeTime,
          armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
          .replace('light', 100)
          .replace('alp', 1 - armonic);
        ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 >= this.circleFadeTime) this.circleFading = false;
      } else {
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
      }

      for (let i = 0; i < this.shards.length; ++i) {
        this.shards[i].step();

        if (!this.shards[i].alive) {
          this.shards.splice(i, 1);
          --i;
        }
      }

      if (this.tick > opts.letterContemplatingWaitTime) {
        this.phase = 'balloon';

        this.tick = 0;
        this.spawning = true;
        this.spawnTime = (opts.balloonSpawnTime * Math.random()) | 0;
        this.inflating = false;
        this.inflateTime =
          (opts.balloonBaseInflateTime +
            opts.balloonAddedInflateTime * Math.random()) |
          0;
        this.size =
          (opts.balloonBaseSize + opts.balloonAddedSize * Math.random()) | 0;

        let rad =
            opts.balloonBaseRadian + opts.balloonAddedRadian * Math.random(),
          vel = opts.balloonBaseVel + opts.balloonAddedVel * Math.random();

        this.vx = Math.cos(rad) * vel;
        this.vy = Math.sin(rad) * vel;
      }
    } else if (this.phase === 'balloon') {
      ctx.strokeStyle = this.lightColor.replace('light', 80);

      if (this.spawning) {
        ++this.tick;
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.spawnTime) {
          this.tick = 0;
          this.spawning = false;
          this.inflating = true;
        }
      } else if (this.inflating) {
        ++this.tick;

        let proportion = this.tick / this.inflateTime,
          x = (this.cx = this.x),
          y = (this.cy = this.y - this.size * proportion);

        ctx.fillStyle = this.alphaColor.replace('alp', proportion);
        ctx.beginPath();
        generateBalloonPath(x, y, this.size * proportion);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, this.y);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.inflateTime) {
          this.tick = 0;
          this.inflating = false;
        }
      } else {
        this.cx += this.vx;
        this.cy += this.vy += opts.upFlow;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        generateBalloonPath(this.cx, this.cy, this.size);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.cx, this.cy);
        ctx.lineTo(this.cx, this.cy + this.size);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(
          this.char,
          this.cx + this.dx,
          this.cy + this.dy + this.size
        );

        if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
          this.phase = 'done';
      }
    }
  };

  function Shard(x, y, vx, vy, color) {
    let vel =
      opts.fireworkShardBaseVel + opts.fireworkShardAddedVel * Math.random();

    this.vx = vx * vel;
    this.vy = vy * vel;

    this.x = x;
    this.y = y;

    this.prevPoints = [[x, y]];
    this.color = color;

    this.alive = true;

    this.size =
      opts.fireworkShardBaseSize + opts.fireworkShardAddedSize * Math.random();
  }
  Shard.prototype.step = function() {
    this.x += this.vx;
    this.y += this.vy += opts.gravity;

    if (this.prevPoints.length > opts.fireworkShardPrevPoints)
      this.prevPoints.shift();

    this.prevPoints.push([this.x, this.y]);

    let lineWidthProportion = this.size / this.prevPoints.length;

    for (let k = 0; k < this.prevPoints.length - 1; ++k) {
      let point = this.prevPoints[k],
        point2 = this.prevPoints[k + 1];

      ctx.strokeStyle = this.color.replace('alp', k / this.prevPoints.length);
      ctx.lineWidth = k * lineWidthProportion;
      ctx.beginPath();
      ctx.moveTo(point[0], point[1]);
      ctx.lineTo(point2[0], point2[1]);
      ctx.stroke();
    }

    if (this.prevPoints[0][1] > hh) this.alive = false;
  };

  function generateBalloonPath(x, y, size) {
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
      x - size / 2,
      y - size / 2,
      x - size / 4,
      y - size,
      x,
      y - size
    );
    ctx.bezierCurveTo(x + size / 4, y - size, x + size / 2, y - size / 2, x, y);
  }

  function anim() {

    window.requestAnimationFrame(anim);

    ctx.fillStyle = 'black'; //#fff branco
    ctx.fillRect(0, 0, w, h);

    ctx.translate(hw, hh);

    let done = true;
    for (let l = 0; l < letters.length; ++l) {
      letters[l].step();
      if (letters[l].phase !== 'done') done = false;
    }

    ctx.translate(-hw, -hh);

    if (done) for (let l = 0; l < letters.length; ++l) letters[l].reset();
  }

  for (let i = 0; i < opts.strings.length; ++i) {
    for (let j = 0; j < opts.strings[i].length; ++j) {
      letters.push(
        new Letter(
          opts.strings[i][j],
          j * opts.charSpacing +
            opts.charSpacing / 2 -
            (opts.strings[i].length * opts.charSize) / 2,
          i * opts.lineHeight +
            opts.lineHeight / 2 -
            (opts.strings.length * opts.lineHeight) / 2
        )
      );
    }
  }

  window.addEventListener('resize', function() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;

    hw = w / 2;
    hh = h / 2;

    ctx.font = opts.charSize + 'px Verdana';
  });

  if (distance > 0) {
    head.style.display = 'initial';
    count.style.display = 'initial';
  } else {
    head.style.display = 'none';
    count.style.display = 'none';
    giftbox.style.display = 'initial';
    clearInterval(x);
    let merrywrap = document.getElementById('merrywrap');
    let box = merrywrap.getElementsByClassName('giftbox')[0];
    let step = 1;
    let stepMinutes = [2000, 2000, 1000, 1000];

    function init() {
      box.addEventListener('click', openBox, false);
      box.addEventListener('click', showfireworks, false);
    }

    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }

    function sli(){
       const div = document.getElementById('audio');
      //  div.innerHTML = '<audio controls src="./img/Sunflower - Rex Orange County (legendado).mp3">O seu navegador não tem suporte à áudio.</audio> ';
      // div.innerHTML = "<embed src='./img/SnapInsta.io - Zé Neto e Cristiano - MOÇA DO ESPELHO - Zé Neto e Cristiano Acústico (128 kbps).mp3' hidden=true autostart=true loop=false>";
      div.innerHTML = "<embed src='./img/jorge & Mateus - Água de Oceano.mp3' hidden=true autostart=true loop=true>";

      // slide.style.display =  'flex';
      //slide.style.display =  'flex';
      //slide.style.marginLeft = '10%'
      //c.style.margin = '230px 0 0 0';
    }

    function openBox() {
      if (step === 1) {
        box.removeEventListener('click', openBox, false);
      }
      stepClass(step);
      if (step === 3) {
        startMoonAnimation();//inicia animacao
      }
      if (step === 4) {
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
      //   setTimeout(anim, 1900);
    }

    function showfireworks() {
      canvasC.style.display = 'initial';
      // setTimeout(anim, 1500);
      setTimeout(sli, 2500);
      // setTimeout(startMoonAnimation(), 5500)

    }

    init();
  }

  // if (distance < 0) {
  //     clearInterval(x);
  //     console.log("happy birthday");
  // }
}, second);

// animação carta
//Variables
let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);
const notes = document.querySelectorAll(".js-note");

//-> Function that resets the size of the notes.
function recize_notes() {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].classList.contains("active")) {
      notes[i].classList.remove("active");
      gsap.set(notes[i], {
        height: "30%",
        clearProps: "all"
      });
    }
  }
}

//-> Main function that enables all the notes.
function notes_ready() {
  gsap.to(".js-envelop-content", {
    height: "110%",
    duration: 0.5
  });

  for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("click", function () {
      if (mobile_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 125 + 40 * i + "%"
          });
        }
      } else if (tablet_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 80 + 21 * i + "%"
          });
        }
      } else {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "30%",
            clearProps: "all"
          });
        } else {
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].classList.contains("active")) {
              notes[i].classList.remove("active");
              gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
              });
            }
          }
          this.classList.add("active");
          gsap.set(this, {
            height: 70 + 20 * i + "%"
          });
        }
      }
    });
  }
}

//-> Function that set up the up paper of the envelope.
function set_up_paper() {
  var arr = [0, 0, 100, 0, 50, 61];
  gsap.set(".js-up-paper", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath:
      "polygon(" +
      arr[0] +
      "%" +
      arr[1] +
      "%," +
      arr[2] +
      "%" +
      arr[3] +
      "%," +
      arr[4] +
      "%" +
      arr[5] +
      "%)",
    onComplete: notes_ready
  });
}

//-> Function that starts the up paper transition.
function envelop_transition() {
  gsap.to(".js-up-paper", {
    bottom: "1%",
    duration: 0.25,
    onComplete: set_up_paper
  });
  document
    .querySelector(".js-up-paper")
    .removeEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.remove("cursor");
}

//-> Function that allows cut the sticker.
function sticker() {
  gsap.set(".js-sticker", { width: "20%", left: "-80%" });
  document.body.classList.remove("scissors");
  document.querySelector(".js-sticker").removeEventListener("click", sticker);
  document
    .querySelector(".js-up-paper")
    .addEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.add("cursor");
}

document.querySelector(".js-sticker").addEventListener("click", sticker);

window.onresize = function (event) {
  recize_notes();
};


// pull-to-refresh
document.addEventListener('DOMContentLoaded', () => {
  let startY = 0;
  let endY = 0;
  const threshold = 100;
  const loader = document.getElementById('loader');

  window.addEventListener('touchstart', (event) => {
      if (window.scrollY === 0) {
          startY = event.touches[0].clientY;
      }
  });

  window.addEventListener('touchmove', (event) => {
      endY = event.touches[0].clientY;
  });

  window.addEventListener('touchend', () => {
      if (startY !== 0 && endY - startY > threshold) {
          loader.classList.add('show');
          setTimeout(() => {
              window.location.reload();
          }, 1000); // Simula tempo de carregamento
      }
      startY = 0;
      endY = 0;
  });
});


const canvas = document.getElementById('starry-sky');
const ctx = canvas.getContext('2d');

let stars = [];
const maxStars = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < maxStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      delta: (Math.random() * 0.02) + 0.005 // velocidade de piscada
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.alpha += star.delta;
    if (star.alpha <= 0) {
      star.alpha = 0;
      star.delta = -star.delta;
    } else if (star.alpha >= 1) {
      star.alpha = 1;
      star.delta = -star.delta;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

function desliga_confete(){
  if(confeteLigado == true){
    confetti.render();
  }
}

function startMoonAnimation() {
  let moonCanvas = document.getElementById('moon-canvas');
  if (!moonCanvas) {
    moonCanvas = document.createElement('canvas');
    moonCanvas.id = 'moon-canvas';
    document.body.appendChild(moonCanvas);
    moonCanvas.style.position = 'fixed';
    moonCanvas.style.top = '0';
    moonCanvas.style.left = '0';
    moonCanvas.style.zIndex = '-1';
    moonCanvas.style.pointerEvents = 'none';
  }

  const ctx = moonCanvas.getContext('2d');
  let width = (moonCanvas.width = window.innerWidth);
  let height = (moonCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = moonCanvas.width = window.innerWidth;
    height = moonCanvas.height = window.innerHeight;
  });

  const stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    delta: 0.005 + Math.random() * 0.02
  }));

  let messageOpacity = 0;

 function drawMoonScene() {
  ctx.clearRect(0, 0, width, height);

  // 💜 Céu com degradê
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#0d1b2a");
  gradient.addColorStop(1, "#1b263b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 🌟 Estrelas cintilando
  for (const star of stars) {
    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.delta = -star.delta;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }

  // 🌕 Lua central
  const moonX = width / 2;
  const moonY = height / 2;
  const moonRadius = 80;

  ctx.beginPath();
  ctx.arc(moonX, moonY, moonRadius, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff9c4';
  ctx.shadowColor = '#fff9c4';
  ctx.shadowBlur = 40;
  ctx.fill();

  drawCouple(ctx, moonX - 150, moonY + 20);

  // 💌 Mensagem com fade-in
  if (messageOpacity < 1) {
    messageOpacity += 0.005;
  }
  ctx.shadowBlur = 0;
  ctx.fillStyle = `rgba(255, 255, 255, ${messageOpacity})`;
  ctx.textAlign = 'center';

  // Fontes proporcionais à largura da tela
  const titleFontSize = Math.min(width / 15, 30);
  const subtitleFontSize = Math.min(width / 20, 20);
  const footerFontSize = Math.min(width / 40, 12);

  // Função para quebrar o texto automaticamente em várias linhas
  function wrapText(ctx, text, maxWidth, font) {
    ctx.font = font;
    const words = text.split(' ');
    const lines = [];
    let line = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const { width } = ctx.measureText(testLine);
      if (width > maxWidth && i > 0) {
        lines.push(line.trim());
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());
    return lines;
  }

  const maxTextWidth = width * 0.8; // 80% da largura da tela
  let currentY = moonY + moonRadius + 60;

  // Primeira linha — quebrada dinamicamente
  let wrappedLines = wrapText(ctx, "Feliz Aniversário, meu raio de luar 💖", maxTextWidth, `bold ${titleFontSize}px "Segoe UI", sans-serif`);
  ctx.fillStyle = `rgba(255, 255, 255, ${messageOpacity})`;
  ctx.textAlign = 'center';
  ctx.font = `bold ${titleFontSize}px "Segoe UI", sans-serif`;
  wrappedLines.forEach(line => {
    ctx.fillText(line, moonX, currentY);
    currentY += titleFontSize + 5;
  });

  // Segunda e terceira linhas
  ctx.font = `italic ${subtitleFontSize}px "Segoe UI", sans-serif`;
  ctx.fillText("Que a sua vida seja sempre iluminada", moonX, currentY);
  currentY += subtitleFontSize + 5;
  ctx.fillText("e cheia de amor! Eu te amo demais.", moonX, currentY);
  currentY += subtitleFontSize + 5;

  // Última linha
  ctx.font = `italic ${footerFontSize}px "Segoe UI", sans-serif`;
  ctx.fillText("By Diego Lins, Your love", moonX, currentY);
}


  function animateMoon() {
    drawMoonScene();
    requestAnimationFrame(animateMoon);
  }

  animateMoon();
}

function drawCouple(ctx, x, y) {
  ctx.save();
  ctx.translate(x, y);

  // --- Pessoa 1 ---
  // Cabelo ondulado
  ctx.beginPath();
  ctx.moveTo(-30, -30);
  ctx.bezierCurveTo(-45, -15, -45, 15, -30, 30);
  ctx.bezierCurveTo(-20, 20, -25, -20, -30, -30);
  ctx.fillStyle = '#3a2c1e'; // castanho escuro
  ctx.fill();

  // Rosto
  ctx.beginPath();
  ctx.arc(-10, 0, 15, 0, Math.PI * 2);
  ctx.fillStyle = '#fddac5'; // pele clara

  ctx.fill();

  // Corpo (vestido)
  ctx.beginPath();
  ctx.moveTo(-10, 15);
  ctx.lineTo(-35, 80);
  ctx.quadraticCurveTo(-10, 100, 15, 80);
  ctx.lineTo(-10, 15);
  ctx.fillStyle = '#ffc0cb'; // vestido rosa claro
  ctx.fill();

  // Braço segurando
  ctx.beginPath();
  ctx.moveTo(0, 25);
  ctx.lineTo(30, 40);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#fddac5';
  ctx.stroke();

  // --- Pessoa 2 ---
  // Cabelo curto
  ctx.beginPath();
  ctx.arc(55, -10, 12, 0, Math.PI * 2);
  ctx.fillStyle = '#2f2f2f'; // cabelo escuro
  ctx.fill();

  // Rosto
  ctx.beginPath();
  ctx.arc(55, 0, 15, 0, Math.PI * 2);
  ctx.fillStyle = '#b98e68';
  ctx.fill();

  // Corpo (camiseta e calça)
  ctx.beginPath();
  ctx.moveTo(55, 15);
  ctx.lineTo(35, 80);
  ctx.lineTo(75, 80);
  ctx.lineTo(55, 15);
  ctx.fillStyle = '#add8e6'; // azul claro
  ctx.fill();

  // Braço segurando
  ctx.beginPath();
  ctx.moveTo(45, 25);
  ctx.lineTo(15, 40);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#b98e68';
  ctx.stroke();

  ctx.restore();
}


// Iniciar
resizeCanvas();
createStars();
animate();

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars();
});
