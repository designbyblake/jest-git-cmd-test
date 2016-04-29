jest

.unmock('../build/jtest')
.unmock('../jquery.min');

describe('jtest', () => {
	it('displays text', () => {
		document.body.innerHTML = 
			'<div>' +
			'<button id="button" />' +
			'<div id="text" />' +
			'</div>';
		require('../build/jtest');
		const $ = require('../jquery.min');
		$('#button').click();
		expect($('#text').text()).toEqual('This is a test');
	});
});

