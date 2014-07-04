/**
 * Sample directive implementation.
 * The module is declared in bwtstcomp1.js
 */
angular.module('bwtstcomp1').directive('compTest1', function () {

	'use strict';

	return {

		template: '<p>Test Comp1</p>',

		replace: true

	};

});
