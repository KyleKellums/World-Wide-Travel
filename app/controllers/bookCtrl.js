"use strict";
console.log("hey bookCtrl.js");

app.controller('bookCtrl', function($scope, travelFactory) {

	travelFactory.getJson()
	.then(function(guideCollection) { //guideCollection gets passed from travelFactory.js
		$scope.guide = guideCollection;
		console.log("$scope", $scope.guide);
	});
});