(function(){
    var names = ['TJ', 'Jared', 'Ryan', 'Dustin'];
    console.log(names.length);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.
})();

var names = ['Teej', 'Jayrod', 'RyDog', 'Dustinnnnnn']
for (var i = 0; i < names.length; i++) {
	console.log("The name at iteration " + i + " is " + names[i])
}

names.forEach(function (element, index, array) {
	console.log("The name at index " + index + " is " + element);
});