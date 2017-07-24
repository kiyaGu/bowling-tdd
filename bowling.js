function BowlingGame() {
  this.rolls = [];
  this.frameCounter = 1;
  this.rollCounter = 1;
  this.lastFrameSum = 0;
}

BowlingGame.prototype.isValidNumOfPins = function(pins){
	if ( pins < 0 || pins > 11 ) {
		throw new Error('Invalid number of pins, pins should be between 0 and 10')
	};
	if (this.rollCounter > 1) {
		if ((this.frameCounter < 10 && this.rolls.slice(-1)[0] + pins > 10) || 
			 (this.frameCounter === 10 && this.rolls.slice(-1)[0] < 10 && this.rollCounter === 2 && this.rolls.slice(-1)[0] + pins > 10) ) {
			throw new Error('Invalid number of pins in a frame, your total hits in a frame have exceeded 10.')
		}
	};
	return true;
};

BowlingGame.prototype.canRoll = function(){
	if (this.frameCounter < 10 || (this.frameCounter === 10 && this.rollCounter < 3) ||    (this.frameCounter === 10 && this.rollCounter === 3 && (this.lastFrameSum >= 10))) {
		return true;
	} else throw new Error('Game over! you cannot have more rolls');
};

BowlingGame.prototype.roll = function(pins) {
	try {
	 	if (this.canRoll() && this.isValidNumOfPins(pins)) {
	 		this.rolls.push(pins);
	 		if (pins === 10 && this.frameCounter < 10) {
	 			this.frameCounter++;
	 		} else {
	 			if (this.frameCounter < 10) {
	 				if (this.rollCounter === 1){
	 					this.rollCounter++;
	 				} else {
	 					this.rollCounter = 1;
	 					this.frameCounter++;
	 				} 
	 			} else {
	 				this.lastFrameSum += pins;
	 				this.rollCounter++;
	 			}
	 		}
	 	}
	 } catch(e) {
	 	console.log(e);
	 }
};

BowlingGame.prototype.score = function() {
  let sum = 0;
  let frameCounter = 1;
  let frameRollCounter = 1;
  let lastRoll = 0;
  for (let i = 0; i < this.rolls.length; i++) {
    sum += this.rolls[i];
    if (frameCounter !== 10) {
	    if (this.rolls[i] === 10){
	    	sum += (this.rolls[i+1] || 0) + (this.rolls[i+2] || 0);
	    	frameCounter++;
	    	frameRollCounter = 1;
	    	lastRoll = 0;
	    } else if (frameRollCounter === 1) {
	   	 	frameRollCounter++
	   	 	lastRoll = this.rolls[i];
	    } else {
	    	frameCounter++;
	    	frameRollCounter = 1;
	    	if (lastRoll + this.rolls[i] === 10){
	    		sum += this.rolls[i+1]
	    		lastRoll = 0;
	    	}
	    }
	}
  }
  return sum;
}






//module.exports = BowlingGame;

var myGame;

const bowlingScores = [ 	
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9],
				[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
				[0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0],
				[0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0] ];



for (let i = 0; i < bowlingScores.length ; i++) {
	myGame = new BowlingGame();
	for (let j = 0; j < bowlingScores[i].length ; j++) {
		myGame.roll(bowlingScores[i][j]);
	}
	console.log(myGame.score());
}


