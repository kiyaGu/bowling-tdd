function BowlingGame() {
  this.rolls = [];
}

BowlingGame.prototype.isSpare = function(roll1, roll2) {
  return roll1 + roll2 === 10;
}
BowlingGame.prototype.isStrike = function(roll){
  return roll === 10;
}

BowlingGame.prototype.calculateSpareBonus = function(frameIndex){
  return this.rolls[frameIndex + 2];
}
BowlingGame.prototype.calculateStrikeBonus = function(frameIndex){
  if(frameIndex !== 19){
    if(this.rolls[frameIndex + 2] === 10){
      //if the next roll is also a strike, for bonus add rolls from the next two frames
      return this.rolls[frameIndex + 2] + this.rolls[frameIndex + 4];
    } else {
      //if the next roll is not strike add the two rolls in that frame
      return this.rolls[frameIndex + 2] + this.rolls[frameIndex + 3];
    }
  }
}
BowlingGame.prototype.roll = function(pins) {
  if(pins === 10){
    //if it is strike make the next rolls to equal to zero
    //as each frame is considered to have two rolls => total of 20 rolls
    this.rolls.push(pins);
    this.rolls.push(0);
  } else{
    this.rolls.push(pins);
  }
}
BowlingGame.prototype.score = function() {
  let sum = 0;
  for (let i = 0; i < this.rolls.length; i++) {
    let bonus = 0;
    if(i <= 17){//not to include the 10th frame in calculating bonus
      if(this.isStrike(this.rolls[i])){
        bonus = this.calculateStrikeBonus(i);
      } else if(this.isSpare(this.rolls[i],this.rolls[i+1])){
        bonus = this.calculateSpareBonus(i);
      }
    }
    sum += this.rolls[i] + bonus;
  }
  return sum;
}
module.exports = BowlingGame;
