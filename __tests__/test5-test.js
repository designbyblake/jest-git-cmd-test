jest.unmock('../build/js/test5');

describe('subtract', () => {
	it('subtracts 1 - 2 to equal -1', () => {
		const mods = require('../build/js/test5');
		expect(mods.sub(1,2)).toBe(-1);
	});
});

describe('sum', () => {
	it('adds 1 + 2 to equal 3', () => {
		const mods = require('../build/js/test5');
		expect(mods.sum(1,2)).toBe(3);
	});
});

describe('dog', () => {
	it('adds its insane to the name', () => {
		const mods = require('../build/js/test5');
		expect(mods.dog('Dan')).toBe('Dan is insane');
	});
});