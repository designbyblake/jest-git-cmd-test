'use strict';

var $ = require('../jquery.min');
$('#button').on('click', function () {
	setTimeout(function () {
		if ($('#text').text() === 'This is a test') {
			$('#text').text('This is a test22222');
		}
	}, 5000);
});