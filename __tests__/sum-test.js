jest.unmock('../build/sum');

describe('sum', () => {
	it('adds 1 + 2 to equal 3', () => {
		const sum = require('../build/sum');
		expect(sum(1,2)).toBe(3);
	});
});