arraycosSim
===========

Description
-----------

Utility function to compare two arrays of objects utilizing cosine similarity principles.


Usage:
------------
Just call the function with two arrays of objects as parameters and an options object.
In this options object you can specify the properties you will compare, the property
you will use as the frequency of comparison, and a floating point number precision.
	var array1 = [{'word':'testword1', 'count': 1}, {'word':'testword2', 'count': 1}]
	var array2 = [{'word':'testword2', 'count': 1}]
	var options = {'comparable': 'word', 'frequency': 'count'}, 'precision': 5};
	var compareResult = arraycosSim(array1, array2, options); // 0.70711

