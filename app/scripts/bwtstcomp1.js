/**
 * Sample directive implementation.
 * The module is declared in bwtstcomp1.js
 */
angular.module('bwtstcomp1',[]);

angular.module('bwtstcomp1').directive('compTest1', function () {

	'use strict';

	return {
    restrict: 'AE',
    scope: {
      msg: '@tdMsg'
    },
		template: '<div>{{msg}}</div>'
	};

});
