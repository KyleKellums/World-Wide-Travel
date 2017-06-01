"use strict";
console.log("hello app.js");

var app = angular.module("TravelApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/guide-list.html',
		controller: 'bookCtrl',
	}).
	otherwise('/');
});

