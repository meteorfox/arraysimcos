arraycosSim
===========

Description
-----------

Utility function to compare two arrays of objects utilizing cosine similarity principles.


Usage:
------------
	var array1 = [{'word':'testword1', 'count': 1}, {'word':'testword2', 'count': 1}]
	var array2 = [{'word':'testword2', 'count': 1}]
	var options = {'comparable': 'word', 'frequency': 'count'};
	var compareResult = arraycosSim(array1, array2, options); // 0.707107
