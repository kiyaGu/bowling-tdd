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
BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

BowlingGame.prototype.score = function() {
  let sum = 0;

  for (let i = 0; i < this.rolls.length; i++) {
    sum += this.rolls[i];
  }
  return sum;
}

module.exports = BowlingGame;
