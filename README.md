# Bowling TDD

![Bowling](./assets/bowling.png)

The game consists of 10 frames as shown above. In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 7 (the number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.

## Instructions
Make a "BowlingGame" that has two methods:
  1. roll(pins)
      - this is called each time the player rolls a ball. The argument is the number of pins knocked down.
  2. score()
      - called only after the *very end of the game*. Returns total score of the game.

## Design
  * One game
  * A game has 10 frames
  * A frame has one or two rolls
  * The tenth frame has two or three rolls. It's different from all the other frames
  * The score function must iterate through all the frames, and calculate all their scores
  * The score for a spare or a strike depends on the next roll after the frame
