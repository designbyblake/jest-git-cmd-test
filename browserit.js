(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function sum(a, b) {
	return a + b;
}
module.exports = sum;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

//var test = require('./build/test4');
var sum = require('./build/sum');
//var test3 = require('./build/test3');
var dan = require('./build/test5');
//var jtest = require('./build/jtest');
//var jtest = require('./build/jtest2');

console.log(dan.dog("Browserify"));

},{"./build/sum":1,"./build/test5":2}]},{},[3]);
