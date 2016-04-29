jest.unmock('../build/test3');

describe('subtract3', () => {
	it('subtracts 1 - 2 to equal -1', () => {
		const subtract3 = require('../build/test3');
		expect(subtract3.subtract3(1,2)).toBe(-1);
	});
});

describe('sum3', () => {
	it('adds 1 + 2 to equal 3', () => {
		const sum3 = require('../build/test3');
		expect(sum3.sum3(1,2)).toBe(3);
	});
});

// describe('dog3', () => {
// 	it('adds its insane to the name', () => {
// 		const test3 = require('../build/test3');
// 		expect(dog3('Dan')).toBe('Dan is insane');
// 	});
// });