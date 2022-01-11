console.log('Hello World!');
const player = document.getElementById("player");
let x = 50;
let y = 50;
let bot_x = 200;
let bot_y = 200;
let g = 0;
player.innerText = "died" + g;
setInterval("move();",33);
function move() {
  //player
  player.style.left = x + "px";
  player.style.top = y + "px";
  //bot
  bot.style.left = bot_x + "px";
  bot.style.top = bot_y + "px";
  //player
  if (x > xm) {
    x-=1.5;
  } else if (x < xm) {
    x+=1.5;
  } 
  if (y > ym) {
    y-=1.5;
  } else if (y < ym) {
    y+=1.5;
  }
  //bot
  if (bot_x > x) {
    bot_x--;
  } else if (bot_x < x) {
    bot_x++;
  }
  if (bot_y > y) {
    bot_y--;
  } else if (bot_y < y) {
    bot_y++;
  }
  //当たり判定
  if (bot_x == x) {
    if (bot_y == y) {
      alert("Game Over!");
      x = Math.floor(Math.random() * 500);
      y = Math.floor(Math.random() * 500);
      g++;
      player.innerHTML = "died" + g;
    }
  }
}

let xm = x;
let ym = y;
game.addEventListener("mousemove",function (e) {
  xm = e.pageX;
  ym = e.pageY;
});