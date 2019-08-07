"use strict";
/*
Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
function orbitalPeriod(arr) {
	const GM = 398600.4418,
  earthRadius = 6367.4447,
	twoPI = 2 * Math.PI;

  let newArr = arr.slice(0),
	raw, t;

	for(let i = 0; i < arr.length; i++){
		const avgAlt = newArr[i].avgAlt,
		a = earthRadius + avgAlt;
		raw = twoPI * Math.sqrt(Math.pow(a, 3) / GM);
		t = Math.round(raw);
		delete newArr[i].avgAlt;
		newArr[i].orbitalPeriod = t;
		console.log (raw, t);
	}

  return newArr;
}

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);