//Define variable that will be used restart a cgame
let gameRestart=true;

// Enemies our player must avoid

var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here.
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies to load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x>505){
      this.x=-100;
    }
    // define the action for a collison: what will happen
    // when a player meets an enemy. In this case, a player
    // will come back to its starting possition and
    // will loose one life.
    else if (player.x >= this.x - 50 &&
        player.x <= this.x + 50 &&
        player.y >= this.y - 50 &&
        player.y <= this.y + 50) {
      player.x = 200;
      player.y = 400;
      player.life -=1;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Here a player class is written.
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (){
  this.x=200;
  this.y=400;
  this.sprite = 'images/char-cat-girl.png';
  this.life = 4;
  this.score = 0;
};


// Here the class will call update.
// In this case, a player position is ajusted
// to make all movements as smooth as it is possibel,
// and to not go behind a cavnas.

Player.prototype.update = function() {
  if (this.x<0){
    this.x=0;
  }
  else if (this.x>400){
    this.x=400;
  }
  else if (this.y>400){
    this.y=400;
  }
  else if (this.y<-40){
    this.y=400;
    this.x=200;
    this.score+=50;
  }
  else if (this.life === 0) {
        gameRestart = false;
    }
};

// A this place, a player class is rendered in order to
// update the number of scores that are won after successfull
// arriving to the water. For each success, a player earns
// 50 points.

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "27px Impact";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fillText("Score: " + this.score, 370, 35);
    ctx.strokeText("Score: " + this.score, 370, 35);
  };


  // Here the possition of a player is adjusted regarding
  // a canvas size and pressed keys.
Player.prototype.handleInput = function(move) {
  switch (move) {
    case 'up':
        this.y -= 90;
    break;
    case 'down':
          this.y += 85;
      break;
    case 'left':
      this.x -= 100;
      break;
    case 'right':
      this.x += 100;
      break;
    default:
      break;
  }
};


// Thisis a moment to instantiate the objects.
// At first the enemies are prepared.
// Here, we place all enemy objects in an array called allEnemies
// Then, we define its possiotions in a canvas and
// adjust random speed for each of enemies.
const allEnemies = [];
const positionEnemyY=[65, 145, 225];

positionEnemyY.forEach(function (positionY){
  let enemySpeed= 40 + Math.floor(Math.random() * 290);
  let enemy= new Enemy (-150, positionY, enemySpeed);
  allEnemies.push(enemy);
});


// Place the player object in a variable called player

var player = new Player();

// Now create a class for heart that will show to the user
// how many lives he/she has and many of them he/she
// is loosing during a game. At the beginning, a user
// 4 lives.

var lifehearts = function() {
    this.sprite = 'images/Heart.png';
};

//In this part, we calle and heart image that is multiplied
// by the number of lives. When a user lose, a game over message
// is shown with the number of score that a user gain.
lifehearts.prototype.render = function() {
    for( var i = 0; i < player.life; i++ ) {
		ctx.drawImage(Resources.get(this.sprite), i*30, 10, 29, 36 );
	}
  if (player.life===0){
    ctx.font = "50px Impact";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.fillText("Game over", 145, 290);
    ctx.strokeText("Game over", 145, 290);
    ctx.fillText("Your score: " + player.score, 120, 370);
    ctx.strokeText("Your score: " + player.score, 120, 370);
    window.setTimeout(reset, 4000);
    function reset(){
      player.life=4;
      gameRestart=true;
    }
  }
};


// The object lifehearts is placed in a variable called life.

const life = new lifehearts();


// This listens for key presses and sends the keys to
// Player.handleInput() method.
// When a user doesn´t have a life, key actions are blocked.
document.addEventListener('keyup', function(e) {
  if (player.life>0) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
  player.handleInput(allowedKeys[e.keyCode]);
  }
else if (player.life=0){
    this.removeEventListner('keyup', e);
  };
});
