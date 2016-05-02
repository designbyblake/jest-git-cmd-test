'use strict';

var mods = {
	sum: function sum(a, b) {
		return a + b;
	},
	sub: function sub(a, b) {
		return a - b;
	},
	dog: function dog(name) {
		return name + ' is insane';
	}
};
module.exports = mods;