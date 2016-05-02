jest.unmock('../build/js/test');

describe('test', () => {
	it('subtracts 1 - 2 to equal -1', () => {
		const test = require('../build/js/test');
		expect(test(1,2)).toBe(-1);
	});
});