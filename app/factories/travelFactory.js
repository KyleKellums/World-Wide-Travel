"use strict";
console.log("hey travelFactory.js");

app.factory("travelFactory", function($q, $http) {
	let getJson = () => {
		return $q((resolve, reject) => {
			$http.get('./data/guides.json')
			.then( (guideData) => {
				let guideCollection = guideData.data;
				console.log("guideCollection", guideCollection.guides);
				resolve(guideCollection.guides);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getJson};
});