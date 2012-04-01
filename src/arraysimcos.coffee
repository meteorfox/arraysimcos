window.arraysimcos = (array1, array2, options) ->

	# Make sure that parameters provided are what we need.
	return if _ is undefined
	
	property   = options?.comparable
	frequency  = options?.frequency
	accuracy   = options?.precision or 6
	pInclude   = _.include

	# Replace underscore include function.
	# I did this because the default _.include function verifies for object equality using ===.
	# I needed to establish that two objects are equal for this case as long as the two properties
	# match.
	_.include = (array, target) ->
		if not array then return false
		_.any(array, (obj) ->
			obj[property] is target[property] and obj[frequency] is target[frequency])

	# Perform union of two arrays.
	dimensions = _.union array1, array2

	# Get vector representation of each array. 
	vector1 = ((if _.include array1, object then object[frequency] else 0) for object in dimensions)
	vector2 = ((if _.include array2, object then object[frequency] else 0) for object in dimensions)

	# Get the dot product of the two vectors
	dotproduct = _.reduce (vector1[i] * vector2[i] for i in [0...dimensions.length]), (m, res) -> m + res

	# and the magnitude
	magnitude1 = Math.sqrt(_.reduce vector1, (m, scalar) -> scalar * scalar + m)
	magnitude2 = Math.sqrt(_.reduce vector2, (m, scalar) -> scalar * scalar + m)

	# Now we can calculate cosine similarity. cos x = (a . b)/(|a|*|b|)
	result = (dotproduct / (magnitude1 * magnitude2)).toFixed(accuracy)

	# Restore include function from underscore
	_.include = pInclude

	options.callback(result) if _.isFunction options.callback
	result