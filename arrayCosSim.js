/*
Copyright (c) 2011 Xavier E. López

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(global, _, Math) {
	if (global && global._ === undefined) { 
		//No underscore object loaded into global object.
		return; 
	}
	
	global.arrayCosSim = function(array1, array2, options) {
		
		//Make sure that parameters provided are what we need.		
		if(!(_.isArray(array1) && _.isArray(array2) && options 
			&& _.isString(options.comparable) && _.isString(options.frequency))) {
			return;
		}
		
		//Initialize variables we're going to be using for the rest
		//of the function.
		var	property = options.comparable, 
			frequency = options.frequency,
			accuracy = options.accuracy || 6,
			dimensions, vector1, vector2, freq, result,
			dotproduct = 0, magnitude1, magnitude2;
		
		//Perform union on two arrays:
		//array1 = [{'word':'testword1', 'count': 1}]
		//array2 = [{'word':'testword2', 'count': 1}]
		dimensions = _.union(array1, array2); 
		console.log(dimensions);
		//Now we have:
		//dimensions = [{'word':'testword1', 'count': 1}, {'word':'testword2', 'count': 1}]
		
		//Let's use that dimensions vector to map the frequency of the vector 
		//if it's in the original array, else set it to 0.
		vector1 = _.map(dimensions, function(object) { return _.include(array1, object) ? object[frequency] : 0;});
		vector2 = _.map(dimensions, function(object) { return _.include(array2, object) ? object[frequency] : 0;});
		console.log(vector1, vector2);
		//Now we have:
		//vector1 = [1, 0]
		//vector2 = [0, 1]		
		//Calculate dot product
		_.each(_.range(dimensions.length), function(index) { dotproduct += vector1[index] * vector2[index];
		});

		//Calculate magnitudes
		magnitude1 = Math.sqrt(_.reduce(vector1, function(memo, num) { return num*num + memo;}, 0));
		magnitude2 = Math.sqrt(_.reduce(vector2, function(memo, num) { return num*num + memo;}, 0));
		
		//Get the resulting operation. cos x = a . b/|a|*|b|.
		result = (dotproduct/(magnitude1*magnitude2)).toFixed(accuracy);	
				
		//Return the result.
		if(_.isFunction(options.callback)) {		
			callback(result);
		} else {
			return result;
		}
	};	
	
	_.union = 
	
})(window, _, Math);
 


