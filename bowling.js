function BowlingGame() {
    this.rolls = [];
}

BowlingGame.prototype.isSpare = function(roll1, roll2) {
    return roll1 + roll2 === 10;
}
BowlingGame.prototype.isStrike = function(roll) {
    return roll === 10;
}

BowlingGame.prototype.calculateSpareBonus = function(frameIndex) {
    //add the first roll in the next frame
    return this.rolls[frameIndex + 2];
}

BowlingGame.prototype.calculateStrikeBonus = function(frameIndex) {
    //add the next two rolls
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
}

BowlingGame.prototype.roll = function(pins) {
    this.rolls.push(pins);
}

BowlingGame.prototype.score = function() {
    let sum = 0;
    let index = 0;
    for (let i = 1; i < 11; i++) {
        if (this.isStrike(this.rolls[index])) {
            // add the strike in the current frame and strike bonus
            sum += this.rolls[index] + this.calculateStrikeBonus(index);
            index++; // move to the next frame
        } else if (this.isSpare(this.rolls[index], this.rolls[index + 1])) {
            //add the two rolls in the current frame and the bonus for spare
            sum += this.rolls[index] + this.rolls[index + 1] + this.calculateSpareBonus(index);
            index += 2; // move to the next frame
        } else {
            //add the two rolls in the current frame
            sum += this.rolls[index] + this.rolls[index + 1];
            index += 2; // move to the next frame
        }
    }
    return sum;
}
module.exports = BowlingGame;