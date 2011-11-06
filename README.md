arraysimcos.js
===========

Description
-----------

Simple utility function to compare two arrays of objects utilizing cosine similarity principles.
Uses undescore.js.


Instructions:
------------
Just call the function with two arrays of objects as parameters and an options object.
In this options object you can specify the properties you will compare, the property
you will use as the frequency of comparison, and a floating point number precision.


Usage:
===========
	//In your html, load the function into the global object.
	<script src="arraycossim.js"></script>
	
	//Now simply use it in your code.
	var array1 = [{'word':'testword1', 'count': 1},{'word':'testword2', 'count': 1}];
	var array2 = [{'word':'testword2', 'count': 1}];
	var options = {'comparable': 'word', 'frequency': 'count', 'precision': 5};
	var compareResult = arraysimcos(array1, array2, options);
	alert(compareResult);	// 0.70711

You could also provide a callback function if the array is big enough by providing a callback
function with the options object. For example:

	function callbackHandler(result) {
		alert(result)
	}
	
	var options = {'comparable': 'word', 'frequency': 'count', 'precision': 5, 'callback': callbackHandler};
	arrayCosSim(array1, array2, options); //alert 0.70711