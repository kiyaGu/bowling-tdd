const BowlingGame = require('./bowling');

describe('Bowling Game should', () => {
    let game;

    beforeEach(() => {
        game = new BowlingGame();
    });

    function rollMany(times, pins) {
        for (let i = 0; i < times; i++) {
            game.roll(pins);
        }
    }

    test('score a gutter game (all 0 rolls)', () => {
        rollMany(20, 0);
        const score = game.score();
        expect(score).toBe(0);
    });

    test('score a game with all 1s for rolls', () => {
        rollMany(20, 1);
        const score = game.score();
        expect(score).toBe(20);
    });

    test('handle a spare', () => {
        expect(game.isSpare(5, 5)).toBeTruthy();
        expect(game.isSpare(5, 4)).toBeFalsy();
    });

    test('handle a strike', () => {
        expect(game.isStrike(10)).toBeTruthy();
        expect(game.isStrike(4)).toBeFalsy();
    });

    test('handle a bonus for spare', () => {
        rollMany(2, 5);
        game.roll(4);
        const bonus = game.calculateSpareBonus(0);
        expect(bonus).toBe(4)
    });
    test('handle a bonus for strike', () => {
        rollMany(1, 10);
        game.roll(8);
        game.roll(6);
        const bonus = game.calculateStrikeBonus(0);
        expect(bonus).toBe(14)
    });
    test('calculates the score', () => {
        game.roll(10);
        game.roll(9);
        game.roll(1);
        rollMany(2, 5);
        game.roll(7);
        game.roll(2);
        rollMany(3, 10);
        game.roll(9);
        game.roll(0);
        game.roll(8);
        game.roll(2);
        game.roll(9);
        game.roll(1);
        game.roll(10);
        const score = game.score();
        expect(score).toBe(187)
    });
});