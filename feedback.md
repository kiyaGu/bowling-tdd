# Feedback

1. Good work on making the app more robust - checking for finish conditions and edge cases.
2. Watch your line length - 80 or 100 characters should be a max for JavaScript. Use a linter to make sure you stick to this.
3. Lines 3 and 54 have a variable with the same name that is doing similar but different things - don't use the same name for these.
4. You need to extract a lot of your what is happening in your ‘score’ method into individual methods. It is doing TOO much so  it is not SOLID https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa
  * Examples:
  
  This should be extracted into a **isStrike** method
  ```
  if (this.rolls[i] === 10){ 
  ```
  This should be extracted into a **strikeBonus** method
  ```
	    	sum += (this.rolls[i+1] || 0) + (this.rolls[i+2] || 0); 
	    	frameCounter++;
	    	frameRollCounter = 1;
	    	lastRoll = 0;
  ```
  This should be extracted into a **sumOfBalls** method
  ```
	   	 	frameRollCounter++        // this should be a 
	   	 	lastRoll = this.rolls[i];
   ```
5. The **roll** method has a very complex chain of conditionals (ifs and elses). Too many conditionals, especially nested ones, are very hard to read, and they also make testing problematic. This is referred to as high cyclomatic complexity https://en.wikipedia.org/wiki/Cyclomatic_complexity - Try and find a way to make this method more simple - possibly by abstractin out certain parts into helper functions.
``` if (this.canRoll() && this.isValidNumOfPins(pins)) {
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
 ```
 6. Line 14 - you don't to use slice (which creates a whole new array - overkill) in order to access the last element of the array. How else could you do this? Also, this whole function is not very readable and overly complex, we can simplify it :)
